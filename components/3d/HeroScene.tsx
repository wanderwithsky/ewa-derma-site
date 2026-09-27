"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

// Procedural 3D Female Aesthetic Face Geometry
function createFemaleFaceGeometry() {
  const geom = new THREE.BufferGeometry();

  // High-density parametric grid for female facial structure
  const uSegments = 48;
  const vSegments = 48;
  const vertices: number[] = [];
  const indices: number[] = [];
  const uvs: number[] = [];
  const normals: number[] = [];

  for (let i = 0; i <= uSegments; i++) {
    const u = i / uSegments; // -1 to 1 across face (left to right)
    const xBase = (u - 0.5) * 2.2;

    for (let j = 0; j <= vSegments; j++) {
      const v = j / vSegments; // -1 to 1 top of forehead to neck
      const yBase = (0.5 - v) * 3.2;

      // Mathematical anatomical modeling of a sculpted female face
      // 1. Cranium & Forehead curvature
      const foreheadWeight = Math.max(0, 1 - Math.pow((yBase - 1.0) / 0.8, 2));
      // 2. Cheekbone definition (high, sculpted feminine zygomatic arch)
      const cheekDist = Math.hypot(Math.abs(xBase) - 0.65, yBase - 0.1);
      const cheekBone = Math.exp(-Math.pow(cheekDist / 0.45, 2)) * 0.48;

      // 3. Nose bridge, dorsum & tip definition
      const noseWidth = Math.exp(-Math.pow(xBase / 0.18, 2));
      const noseLength = Math.max(0, 1 - Math.pow((yBase - 0.15) / 0.55, 2));
      const noseTip = Math.exp(-Math.hypot(xBase / 0.15, (yBase - -0.15) / 0.15)) * 0.72;
      const nose = (noseWidth * noseLength * 0.52 + noseTip);

      // 4. Upper & Lower Lips contour
      const lipDist = Math.hypot(xBase / 0.42, (yBase - -0.52) / 0.18);
      const lips = Math.exp(-Math.pow(lipDist, 2)) * 0.38;

      // 5. Feminine sculpted chin & jawline taper
      const chinDist = Math.hypot(xBase / 0.32, (yBase - -0.95) / 0.25);
      const chin = Math.exp(-Math.pow(chinDist, 2)) * 0.42;
      const jawTaper = Math.max(0, 1 - Math.abs(xBase) * (1.2 + (yBase < 0 ? -yBase * 0.6 : 0)));

      // Depth (Z) calculation with natural oval curvature
      const baseOvalZ = Math.sqrt(Math.max(0, 1 - Math.pow(xBase / 1.1, 2) - Math.pow(yBase / 1.6, 2))) * 0.9;
      const z = (baseOvalZ * 0.75 + cheekBone + nose + lips + chin) * jawTaper;

      // Subtle lateral face curvature for ear and jaw slope
      const finalX = xBase * (1 - (yBase < -0.6 ? (-0.6 - yBase) * 0.35 : 0));
      const finalY = yBase;
      const finalZ = Math.max(0, z);

      vertices.push(finalX, finalY, finalZ);
      uvs.push(u, v);
    }
  }

  // Generate quad indices
  for (let i = 0; i < uSegments; i++) {
    for (let j = 0; j < vSegments; j++) {
      const a = i * (vSegments + 1) + j;
      const b = (i + 1) * (vSegments + 1) + j;
      const c = (i + 1) * (vSegments + 1) + (j + 1);
      const d = i * (vSegments + 1) + (j + 1);

      indices.push(a, b, d);
      indices.push(b, c, d);
    }
  }

  geom.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
  geom.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geom.setIndex(indices);
  geom.computeVertexNormals();

  return geom;
}

// Facial Symmetry Mapping Nodes (Golden Ratio aesthetic points)
function AestheticMappingPoints() {
  // Key anatomical landmarks: Cheeks, nose tip, lips, chin, temples, brow
  const points = useMemo(() => {
    return [
      [0, 0.95, 0.65],    // Forehead midpoint
      [-0.45, 0.65, 0.6],  // Left brow arch
      [0.45, 0.65, 0.6],   // Right brow arch
      [-0.25, 0.45, 0.6],  // Left inner eye
      [0.25, 0.45, 0.6],   // Right inner eye
      [0, 0.25, 0.85],    // Nose bridge
      [0, -0.15, 1.1],    // Nose tip
      [-0.65, 0.1, 0.85],  // Left cheekbone apex
      [0.65, 0.1, 0.85],   // Right cheekbone apex
      [0, -0.45, 0.88],   // Cupid's bow / upper lip
      [0, -0.62, 0.82],   // Lower lip
      [0, -0.95, 0.85],   // Chin apex
      [-0.85, -0.45, 0.4], // Left jawline
      [0.85, -0.45, 0.4],  // Right jawline
    ];
  }, []);

  return (
    <group>
      {points.map((pos, idx) => (
        <mesh key={idx} position={pos as [number, number, number]}>
          <sphereGeometry args={[0.028, 16, 16]} />
          <meshStandardMaterial
            color={idx % 2 === 0 ? "#E31C79" : "#2E93A8"}
            emissive={idx % 2 === 0 ? "#E31C79" : "#2E93A8"}
            emissiveIntensity={2.5}
            roughness={0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

function FemaleFace3D({ mousePos, scrollY }: { mousePos: { x: number; y: number }; scrollY: number }) {
  const faceMeshRef = useRef<THREE.Mesh>(null);
  const wireMeshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  const faceGeometry = useMemo(() => createFemaleFaceGeometry(), []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Elegant, subtle continuous breathing rotation
      const idleRotY = Math.sin(state.clock.elapsedTime * 0.4) * 0.12;
      const idleRotX = Math.cos(state.clock.elapsedTime * 0.3) * 0.05;

      // Pointer-driven parallax tilt
      const targetRotY = mousePos.x * 0.45 + idleRotY;
      const targetRotX = -mousePos.y * 0.3 + idleRotX;

      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.06);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.06);

      // Scroll-linked depth drift: recedes in Z space smoothly on scroll
      const scrollFactor = Math.min(scrollY / 700, 1.5);
      const targetZ = -scrollFactor * 3.2;
      const targetScale = Math.max(1 - scrollFactor * 0.35, 0.2);

      groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, targetZ, 0.08);
      groupRef.current.scale.setScalar(
        THREE.MathUtils.lerp(groupRef.current.scale.x, targetScale, 0.08)
      );
    }

    if (lightRef.current) {
      // Dynamic moving magenta accent light tracking face contours
      lightRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.8) * 2.5 + mousePos.x * 1.5;
      lightRef.current.position.y = Math.cos(state.clock.elapsedTime * 0.6) * 2.5 - mousePos.y * 1.5;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Dynamic Colored Lighting Setup tailored for Facial Contours */}
      <pointLight ref={lightRef} color="#E31C79" intensity={4.5} distance={12} />
      <pointLight position={[-3.5, 2, 3]} color="#2E93A8" intensity={4.0} distance={12} />
      <pointLight position={[3.5, -2, 2.5]} color="#4FAE7C" intensity={2.5} distance={10} />
      <pointLight position={[0, 4, 1]} color="#FFFFFF" intensity={1.8} distance={8} />
      <ambientLight intensity={0.55} />

      {/* 3D Sculpted Female Face Solid Surface (Glassy Ceramic Skin Radiance) */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.6}>
        <mesh ref={faceMeshRef} geometry={faceGeometry}>
          <meshPhysicalMaterial
            color="#146A80"
            emissive="#0D4A5A"
            emissiveIntensity={0.35}
            roughness={0.22}
            metalness={0.4}
            clearcoat={1.0}
            clearcoatRoughness={0.12}
            reflectivity={0.9}
            transparent={true}
            opacity={0.88}
          />
        </mesh>

        {/* Delicate Aesthetic Contour Lines (Golden Ratio Facial Mapping Grid) */}
        <mesh ref={wireMeshRef} geometry={faceGeometry} scale={[1.002, 1.002, 1.002]}>
          <meshStandardMaterial
            color="#2E93A8"
            emissive="#2E93A8"
            emissiveIntensity={0.6}
            wireframe={true}
            transparent={true}
            opacity={0.25}
          />
        </mesh>

        {/* Golden Ratio Aesthetic Nodes / Injection & Rejuvenation Mapping Points */}
        <AestheticMappingPoints />
      </Float>

      {/* Floating Radiant Aura Particles */}
      <Sparkles
        count={50}
        scale={7}
        size={2.5}
        speed={0.3}
        opacity={0.6}
        color="#E31C79"
      />
      <Sparkles
        count={40}
        scale={6}
        size={2.0}
        speed={0.25}
        opacity={0.5}
        color="#2E93A8"
      />
    </group>
  );
}

export function HeroScene() {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = React.useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none">
      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 42 }}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          alpha: true,
        }}
        dpr={[1, 1.5]}
      >
        <FemaleFace3D mousePos={mousePos} scrollY={scrollY} />
      </Canvas>
    </div>
  );
}
