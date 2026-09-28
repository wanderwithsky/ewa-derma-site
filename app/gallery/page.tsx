"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { FloatingActions } from "@/components/ui/FloatingActions";
import {
  GALLERY_VIDEOS,
  GALLERY_PHOTOS,
  MARQUEE_ROW_1,
  MARQUEE_ROW_2,
  GalleryVideoItem,
  GalleryPhotoItem,
} from "@/lib/galleryData";
import {
  Play,
  X,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  Calendar,
  Eye,
  Video,
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight,
  Stethoscope,
  Clock,
  CheckCircle2,
  Maximize2,
} from "lucide-react";

export default function GalleryPage() {
  // Filter States
  const [selectedMediaType, setSelectedMediaType] = useState<"all" | "videos" | "photos">("all");
  const [selectedPhotoCategory, setSelectedPhotoCategory] = useState<string>("all");

  // Lightbox Modal State
  const [activeVideo, setActiveVideo] = useState<GalleryVideoItem | null>(null);
  const [isVideoLoading, setIsVideoLoading] = useState<boolean>(true);
  const [prewarmedVideo, setPrewarmedVideo] = useState<GalleryVideoItem | null>(null);
  const [activePhoto, setActivePhoto] = useState<GalleryPhotoItem | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(-1);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (activeVideo || activePhoto) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeVideo, activePhoto]);

  // Open Video handler with instant loader reset
  const openVideoLightbox = (video: GalleryVideoItem) => {
    setIsVideoLoading(true);
    setActiveVideo(video);
  };

  // Pre-warm / preconnect to video URL on card hover and initialize hidden background warm-up
  const handleVideoHover = (video: GalleryVideoItem) => {
    if (typeof document !== "undefined") {
      const existing = document.querySelector(`link[href="${video.driveEmbedUrl}"]`);
      if (!existing) {
        const link = document.createElement("link");
        link.rel = "prefetch";
        link.href = video.driveEmbedUrl;
        link.as = "document";
        document.head.appendChild(link);
      }
    }
    // Pre-warm iframe in memory if not already warm
    if (!prewarmedVideo || prewarmedVideo.id !== video.id) {
      setPrewarmedVideo(video);
    }
  };

  // Filter photos based on category
  const filteredPhotos =
    selectedPhotoCategory === "all"
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === selectedPhotoCategory);

  // Handle Lightbox photo navigation
  const openPhotoLightbox = (photo: GalleryPhotoItem) => {
    const idx = GALLERY_PHOTOS.findIndex((p) => p.id === photo.id);
    setActivePhotoIndex(idx);
    setActivePhoto(photo);
  };

  const nextPhoto = () => {
    if (activePhotoIndex < GALLERY_PHOTOS.length - 1) {
      const nextIdx = activePhotoIndex + 1;
      setActivePhotoIndex(nextIdx);
      setActivePhoto(GALLERY_PHOTOS[nextIdx]);
    } else {
      setActivePhotoIndex(0);
      setActivePhoto(GALLERY_PHOTOS[0]);
    }
  };

  const prevPhoto = () => {
    if (activePhotoIndex > 0) {
      const prevIdx = activePhotoIndex - 1;
      setActivePhotoIndex(prevIdx);
      setActivePhoto(GALLERY_PHOTOS[prevIdx]);
    } else {
      setActivePhotoIndex(GALLERY_PHOTOS.length - 1);
      setActivePhoto(GALLERY_PHOTOS[GALLERY_PHOTOS.length - 1]);
    }
  };

  // Keyboard controls for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveVideo(null);
        setActivePhoto(null);
      } else if (e.key === "ArrowRight" && activePhoto) {
        nextPhoto();
      } else if (e.key === "ArrowLeft" && activePhoto) {
        prevPhoto();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhoto, activePhotoIndex]);

  return (
    <div className="min-h-screen bg-ewa-mist text-ewa-ink flex flex-col selection:bg-ewa-magenta selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ewa-teal-deep via-ewa-teal-bg to-[#082830] text-white pt-20 pb-12 border-b border-ewa-teal/30">
        {/* Ambient glow orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-ewa-teal/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-ewa-magenta/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ewa-magenta/20 border border-ewa-magenta/40 text-ewa-magenta-light text-xs font-semibold tracking-wide"
            >
              <Sparkles className="w-3.5 h-3.5 text-ewa-magenta-light" />
              <span>Visual Results & Procedure Archives</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl font-display font-black leading-tight tracking-tight text-white"
            >
              Clinical Gallery & Transformations
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-white/80 text-sm sm:text-base font-sans max-w-xl mx-auto"
            >
              Real patient outcomes, high-definition in-clinic procedures, and dermoscopic documentation.
            </motion.p>

          </div>
        </div>
      </section>

      {/* CONTINUOUS DUAL MARQUEE SLIDING STREAM */}
      <section className="py-6 bg-ewa-teal-deep text-white overflow-hidden border-b border-ewa-teal/30 relative">
        <style>{`
          @keyframes gallery-marquee-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes gallery-marquee-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .gallery-track-left {
            animation: gallery-marquee-left 45s linear infinite !important;
          }
          .gallery-track-right {
            animation: gallery-marquee-right 45s linear infinite !important;
          }
          .gallery-track-left:hover,
          .gallery-track-right:hover {
            animation-play-state: paused !important;
          }
        `}</style>

        {/* Row 1: Sliding Left */}
        <div className="flex w-max gallery-track-left py-1.5">
          <div className="flex shrink-0 gap-4 pr-4">
            {MARQUEE_ROW_1.map((imgSrc, idx) => (
              <div
                key={`row1-${idx}-1`}
                onClick={() =>
                  openPhotoLightbox({
                    id: `marquee-1-${idx}-1`,
                    title: `Clinical Transformation #${(idx % MARQUEE_ROW_1.length) + 1}`,
                    category: "all",
                    categoryLabel: "Clinical Transformation",
                    src: imgSrc,
                    timeline: "Verified Case",
                    details: "High-definition documentation recorded at Ewa Derma Clinic Lucknow.",
                    doctorTag: "Ewa Derma Team",
                  })
                }
                className="relative w-64 sm:w-72 h-44 sm:h-48 shrink-0 rounded-2xl overflow-hidden border border-white/15 shadow-md cursor-pointer group bg-black/40 hover:border-ewa-magenta transition-all"
              >
                <Image
                  src={imgSrc}
                  alt="Ewa Derma Transformation"
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                  sizes="300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-3">
                  <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5 text-ewa-magenta-light" /> View Fullscreen
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex shrink-0 gap-4 pr-4" aria-hidden="true">
            {MARQUEE_ROW_1.map((imgSrc, idx) => (
              <div
                key={`row1-${idx}-2`}
                onClick={() =>
                  openPhotoLightbox({
                    id: `marquee-1-${idx}-2`,
                    title: `Clinical Transformation #${(idx % MARQUEE_ROW_1.length) + 1}`,
                    category: "all",
                    categoryLabel: "Clinical Transformation",
                    src: imgSrc,
                    timeline: "Verified Case",
                    details: "High-definition documentation recorded at Ewa Derma Clinic Lucknow.",
                    doctorTag: "Ewa Derma Team",
                  })
                }
                className="relative w-64 sm:w-72 h-44 sm:h-48 shrink-0 rounded-2xl overflow-hidden border border-white/15 shadow-md cursor-pointer group bg-black/40 hover:border-ewa-magenta transition-all"
              >
                <Image
                  src={imgSrc}
                  alt="Ewa Derma Transformation"
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                  sizes="300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-3">
                  <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5 text-ewa-magenta-light" /> View Fullscreen
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Sliding Right */}
        <div className="flex w-max gallery-track-right py-1.5 mt-2">
          <div className="flex shrink-0 gap-4 pr-4">
            {MARQUEE_ROW_2.map((imgSrc, idx) => (
              <div
                key={`row2-${idx}-1`}
                onClick={() =>
                  openPhotoLightbox({
                    id: `marquee-2-${idx}-1`,
                    title: `Clinical Transformation #${(idx % MARQUEE_ROW_2.length) + 1}`,
                    category: "all",
                    categoryLabel: "Clinical Transformation",
                    src: imgSrc,
                    timeline: "Verified Case",
                    details: "High-definition documentation recorded at Ewa Derma Clinic Lucknow.",
                    doctorTag: "Ewa Derma Team",
                  })
                }
                className="relative w-64 sm:w-72 h-44 sm:h-48 shrink-0 rounded-2xl overflow-hidden border border-white/15 shadow-md cursor-pointer group bg-black/40 hover:border-ewa-magenta transition-all"
              >
                <Image
                  src={imgSrc}
                  alt="Ewa Derma Result"
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                  sizes="300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-3">
                  <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5 text-ewa-magenta-light" /> View Fullscreen
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex shrink-0 gap-4 pr-4" aria-hidden="true">
            {MARQUEE_ROW_2.map((imgSrc, idx) => (
              <div
                key={`row2-${idx}-2`}
                onClick={() =>
                  openPhotoLightbox({
                    id: `marquee-2-${idx}-2`,
                    title: `Clinical Transformation #${(idx % MARQUEE_ROW_2.length) + 1}`,
                    category: "all",
                    categoryLabel: "Clinical Transformation",
                    src: imgSrc,
                    timeline: "Verified Case",
                    details: "High-definition documentation recorded at Ewa Derma Clinic Lucknow.",
                    doctorTag: "Ewa Derma Team",
                  })
                }
                className="relative w-64 sm:w-72 h-44 sm:h-48 shrink-0 rounded-2xl overflow-hidden border border-white/15 shadow-md cursor-pointer group bg-black/40 hover:border-ewa-magenta transition-all"
              >
                <Image
                  src={imgSrc}
                  alt="Ewa Derma Result"
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                  sizes="300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-3">
                  <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5 text-ewa-magenta-light" /> View Fullscreen
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clean Category Navigation Filters - Moved below marquees */}
        <div className="pt-10 pb-2 px-4 max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 relative z-10">
          {[
            { id: "all", label: `All (${GALLERY_VIDEOS.length + filteredPhotos.length})` },
            { id: "skin", label: "Skin & Acne" },
            { id: "hair", label: "Hair Restoration" },
            { id: "antiaging", label: "Anti-Aging" },
            { id: "laser", label: "Lasers" },
            { id: "clinic", label: "Clinic Suites" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedMediaType("all");
                setSelectedPhotoCategory(cat.id);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                selectedPhotoCategory === cat.id && selectedMediaType === "all"
                  ? "bg-ewa-magenta text-white shadow-md shadow-ewa-magenta/30 scale-105"
                  : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}

          <button
            onClick={() => setSelectedMediaType("videos")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
              selectedMediaType === "videos"
                ? "bg-ewa-magenta text-white shadow-md shadow-ewa-magenta/30 scale-105"
                : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
            }`}
          >
            <Video className="w-3.5 h-3.5 text-teal-300" /> HD Videos ({GALLERY_VIDEOS.length})
          </button>
        </div>
      </section>

      {/* SECTION 1: GOOGLE DRIVE EMBEDDED VIDEO PROCEDURES */}
      {selectedMediaType === "videos" && (
        <section className="py-12 bg-white border-b border-ewa-line">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Video className="w-5 h-5 text-ewa-teal" />
                <h2 className="text-xl sm:text-2xl font-display font-bold text-ewa-teal-deep">
                  HD In-Clinic Procedure Recordings
                </h2>
              </div>
              <span className="text-xs text-ewa-ink/60 font-medium hidden sm:inline-block">
                5 Direct Video Protocols
              </span>
            </div>

            {/* Video Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {GALLERY_VIDEOS.map((video, idx) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                  className="bg-ewa-mist rounded-2xl border border-ewa-line overflow-hidden shadow-sm hover:shadow-xl hover:border-ewa-magenta/50 transition-all duration-300 flex flex-col group cursor-pointer"
                  onClick={() => openVideoLightbox(video)}
                  onMouseEnter={() => handleVideoHover(video)}
                  onTouchStart={() => handleVideoHover(video)}
                >
                  {/* Video Thumbnail Poster Area */}
                  <div className="relative aspect-video bg-ewa-teal-deep overflow-hidden">
                    <Image
                      src={video.poster}
                      alt={video.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-90"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />

                    {/* Gradient Overlay & Click Handler */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20 group-hover:bg-black/45 transition-colors duration-300 flex flex-col justify-between p-3.5">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded-full bg-ewa-magenta text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                          {video.badge}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-black/60 text-white text-[10px] font-mono flex items-center gap-1 backdrop-blur-sm border border-white/10">
                          <Clock className="w-3 h-3 text-cyan-300" /> {video.duration}
                        </span>
                      </div>

                      {/* Glowing Play Trigger Button */}
                      <div className="self-center flex flex-col items-center gap-1.5 transform group-hover:scale-110 transition-transform duration-300">
                        <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-ewa-magenta text-white flex items-center justify-center shadow-lg shadow-ewa-magenta/50 border-2 border-white/80 group-hover:bg-ewa-magenta-light transition-colors">
                          <Play className="w-6 h-6 fill-white ml-0.5" />
                        </div>
                        <span className="text-[11px] font-bold text-white uppercase tracking-wider drop-shadow-md">
                          Play HD Video
                        </span>
                      </div>

                      <div className="text-white text-[11px] font-medium text-teal-200">
                        {video.doctor}
                      </div>
                    </div>
                  </div>

                  {/* Minimal Video Content Details */}
                  <div className="p-3.5 space-y-1">
                    <h3 className="font-display font-bold text-sm text-ewa-teal-deep group-hover:text-ewa-magenta transition-colors line-clamp-1">
                      {video.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Hidden background pre-render container for zero-delay stream launch */}
            {prewarmedVideo && !activeVideo && (
              <div
                className="fixed -left-[9999px] -top-[9999px] w-1 h-1 opacity-0 pointer-events-none overflow-hidden"
                aria-hidden="true"
              >
                <iframe
                  src={prewarmedVideo.driveEmbedUrl}
                  title="prewarm-stream"
                  className="w-1 h-1"
                  loading="eager"
                />
              </div>
            )}
          </div>
        </section>
      )}

      {/* SECTION 2: CURATED CLINICAL PHOTO GRID */}
      {(selectedMediaType === "all" || selectedMediaType === "photos") && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-ewa-teal" />
                <h2 className="text-xl sm:text-2xl font-display font-bold text-ewa-teal-deep">
                  Clinical Photography & Patient Results
                </h2>
              </div>
              <span className="text-xs text-ewa-ink/60 font-medium">
                {filteredPhotos.length} Documented Outcomes · Click to enlarge
              </span>
            </div>

            {/* Photos Grid: 100% Image-First Layout */}
            <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-5">
              <AnimatePresence>
                {filteredPhotos.map((photo) => (
                  <motion.div
                    key={photo.id}
                    layout
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.25 }}
                    className="group bg-ewa-mist rounded-2xl overflow-hidden border border-ewa-line hover:border-ewa-magenta shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
                    onClick={() => openPhotoLightbox(photo)}
                  >
                    {/* Image Area */}
                    <div className="relative aspect-[4/3] sm:aspect-square bg-black/10 overflow-hidden">
                      <Image
                        src={photo.src}
                        alt={photo.title}
                        fill
                        className="object-cover group-hover:scale-108 transition-transform duration-500"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        loading="lazy"
                      />

                      {/* Hover Overlay with Minimal Caption */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-3">
                        <span className="self-end px-2 py-0.5 rounded-full bg-white/25 backdrop-blur-md text-[10px] text-white font-medium">
                          {photo.timeline || "Verified"}
                        </span>
                        <div className="space-y-1 text-white">
                          <div className="text-xs font-bold leading-tight line-clamp-2">
                            {photo.title}
                          </div>
                          <div className="text-[10px] text-teal-200 font-medium flex items-center gap-1">
                            <Eye className="w-3 h-3 text-ewa-magenta-light" /> Click to Expand Fullscreen
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Minimal Under-Card Caption */}
                    <div className="p-2.5 flex items-center justify-between text-xs">
                      <span className="font-display font-semibold text-ewa-teal-deep truncate text-xs">
                        {photo.title}
                      </span>
                      <span className="text-[10px] text-ewa-teal shrink-0 ml-2 font-mono">
                        {photo.categoryLabel}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA SECTION */}
      <Section variant="dark-teal" spacing="lg" className="border-t border-ewa-teal/30">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <Badge variant="magenta">Begin Your Transformation</Badge>
          <h2 className="text-2xl sm:text-4xl font-display font-black text-white leading-tight">
            Schedule Your Clinical Consultation
          </h2>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg" leftIcon={<Calendar className="w-4 h-4" />}>
                Book Consultation Now
              </Button>
            </Link>
            <a href="tel:+919120854977">
              <Button variant="secondary" size="lg" className="border-white/30 text-white hover:bg-white/10">
                Call: +91 9120854977
              </Button>
            </a>
          </div>
        </div>
      </Section>

      {/* ========================================================================= */}
      {/* LIGHTBOX MODAL: GOOGLE DRIVE VIDEO PLAYER */}
      {/* ========================================================================= */}
      {mounted && createPortal(
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] w-[100vw] h-[100vh] bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
              onClick={() => setActiveVideo(null)}
            >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-ewa-teal-deep rounded-3xl border border-white/20 shadow-2xl overflow-hidden w-full max-w-4xl max-h-[95vh] flex flex-col text-white"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 flex items-center justify-between border-b border-white/10 bg-black/20">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-ewa-magenta text-white text-[11px] font-bold uppercase">
                      {activeVideo.badge}
                    </span>
                    <span className="text-xs text-teal-200 font-medium">{activeVideo.categoryLabel}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-display font-bold text-white line-clamp-1">
                    {activeVideo.title}
                  </h3>
                </div>

                <button
                  onClick={() => setActiveVideo(null)}
                  aria-label="Close video player modal"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Responsive Google Drive Video Player Iframe with Poster Underlay & Smooth Crossfade */}
              <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
                {/* Poster Underlay - Prevents black box flash during video initialization */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={activeVideo.poster}
                    alt={activeVideo.title}
                    fill
                    className="object-cover object-center filter blur-xs brightness-75 scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                </div>

                {/* Instant Animated Luxury Loading Skeleton */}
                {isVideoLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10 space-y-3 bg-[#07242B]/70 backdrop-blur-sm transition-opacity duration-300">
                    <div className="relative flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full border-3 border-ewa-magenta/20 border-t-ewa-magenta animate-spin" />
                      <div className="absolute w-8 h-8 rounded-full bg-ewa-magenta/20 animate-ping" />
                    </div>
                    <div className="text-center space-y-1">
                      <div className="text-xs font-semibold text-white tracking-wide">Connecting to HD Video Stream...</div>
                      <div className="text-[11px] text-teal-300/80">Ewa Derma Clinical Archives</div>
                    </div>
                  </div>
                )}

                <iframe
                  src={activeVideo.driveEmbedUrl}
                  title={activeVideo.title}
                  className={`relative z-20 w-full h-full border-0 transition-opacity duration-500 ${
                    isVideoLoading ? "opacity-0" : "opacity-100"
                  }`}
                  allow="autoplay; encrypted-media; fullscreen; picture-in-picture; accelerometer; gyroscope"
                  allowFullScreen
                  onLoad={() => setIsVideoLoading(false)}
                />
              </div>

              {/* Modal Footer Details & Consultation CTA */}
              <div className="p-4 sm:p-5 bg-ewa-teal-bg space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1 text-xs text-white/90">
                    <p className="font-semibold text-ewa-cyan">Lead Specialist: {activeVideo.doctor}</p>
                    <p className="text-white/70 text-[11px] line-clamp-1">{activeVideo.description}</p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={activeVideo.driveViewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-white/15 hover:bg-ewa-magenta text-xs font-semibold flex items-center gap-1.5 transition-all text-white border border-white/20"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Watch on Drive
                    </a>
                    <Link href="/book" onClick={() => setActiveVideo(null)}>
                      <Button variant="primary" size="sm" leftIcon={<Calendar className="w-4 h-4" />}>
                        Book Consultation
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>,
        document.body
      )}

      {/* ========================================================================= */}
      {/* LIGHTBOX MODAL: PHOTO GALLERY VIEW */}
      {/* ========================================================================= */}
      {mounted && createPortal(
        <AnimatePresence>
          {activePhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] w-[100vw] h-[100vh] bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
              onClick={() => setActivePhoto(null)}
            >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl border border-gray-300 shadow-2xl overflow-hidden w-full max-w-4xl max-h-[95vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-4 flex items-center justify-between border-b border-gray-200 bg-ewa-mist">
                <div>
                  <span className="text-xs font-bold text-ewa-teal uppercase tracking-wider">
                    {activePhoto.categoryLabel}
                  </span>
                  <h3 className="text-base sm:text-lg font-display font-bold text-ewa-teal-deep">
                    {activePhoto.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevPhoto}
                    aria-label="View previous photo"
                    className="w-8 h-8 rounded-full bg-white border border-gray-300 hover:bg-gray-100 flex items-center justify-center transition-colors text-ewa-teal-deep"
                    title="Previous"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextPhoto}
                    aria-label="View next photo"
                    className="w-8 h-8 rounded-full bg-white border border-gray-300 hover:bg-gray-100 flex items-center justify-center transition-colors text-ewa-teal-deep"
                    title="Next"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActivePhoto(null)}
                    aria-label="Close photo preview modal"
                    className="w-8 h-8 rounded-full bg-ewa-teal-deep hover:bg-black flex items-center justify-center transition-colors text-white ml-2"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Photo Display */}
              <div className="relative aspect-[16/10] w-full bg-black/95 flex items-center justify-center overflow-hidden">
                <Image
                  src={activePhoto.src}
                  alt={activePhoto.title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-5 bg-white border-t border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-ewa-teal-deep">{activePhoto.doctorTag || "Ewa Derma Specialist"}</span>
                    {activePhoto.timeline && (
                      <span className="px-2 py-0.5 rounded bg-ewa-teal/10 text-ewa-teal font-medium">
                        Timeline: {activePhoto.timeline}
                      </span>
                    )}
                  </div>
                  <p className="text-ewa-ink/75 max-w-xl">{activePhoto.details}</p>
                </div>

                <Link href="/book" onClick={() => setActivePhoto(null)}>
                  <Button variant="primary" size="sm" leftIcon={<Calendar className="w-4 h-4" />}>
                    Inquire for Treatment
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>,
        document.body
      )}

      <Footer />
      <FloatingActions />
    </div>
  );
}
