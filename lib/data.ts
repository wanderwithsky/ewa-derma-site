export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: "skin" | "hair" | "antiaging" | "body" | "laser";
  categoryName: string;
  tagline: string;
  description: string;
  downtime: string;
  duration: string;
  resultsTimeline: string;
  benefits: string[];
  faqs: { question: string; answer: string }[];
}

export interface DoctorProfile {
  id: string;
  name: string;
  designation: string;
  specialty: string;
  experience: string;
  registrationNo: string;
  qualifications: string[];
  bio: string;
  specializations: string[];
}

export const CLINIC_INFO = {
  name: "Ewa Derma Clinic",
  tagline: "Where Science Meets Artistry",
  phone: "+91 9120854977",
  whatsapp: "+919120854977",
  email: "care@ewaderma.com",
  hours: "Mon–Sun, 10:00 AM – 7:00 PM",
  address: "6th floor, unit no. 10, The Millennium Place, near Lulu Mall, Golf City, Sector B Ansal API, Lucknow, Uttar Pradesh 226030",
  city: "Lucknow",
  state: "Uttar Pradesh",
  pincode: "226030",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.5303640248464!2d80.9959649760777!3d26.79122396531393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be32c7e0c4a45%3A0x8e87878848a608fa!2sThe%20Millennium%20Place!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
};

export interface ServiceCategoryItem {
  id: string;
  name: string;
  heading: string;
  tagline: string;
  description: string;
  image: string;
  accent: string;
  badgeVariant: "skin" | "magenta" | "hair" | "teal";
  checklist: string[];
  treatments: string[];
  procedureSteps: { step: string; title: string; desc: string }[];
}

export const SERVICE_CATEGORIES: ServiceCategoryItem[] = [
  {
    id: "skin",
    name: "Clinical Dermatology",
    heading: "Expert dermatology care for healthy, radiant skin",
    tagline: "From preventive care to specialized treatments, our wide range of services is designed to support your skin health at every stage.",
    description: "We treat complex dermatological conditions using root-cause diagnostics, dermoscopy, and advanced medical protocols to restore skin barrier health and clarity.",
    image: "/images/services/service_skin.jpg",
    accent: "cyan",
    badgeVariant: "skin",
    checklist: [
      "Certified Dermatologists",
      "Personalized Care",
      "Advanced Technology",
      "Comprehensive Services",
      "Effective Solutions",
      "Comfortable Environment",
    ],
    treatments: [
      "Acne & Scar Treatment",
      "Vitiligo (Safed Dag)",
      "Pigmentation Removal",
      "Psoriasis Treatment",
      "Rosacea Treatment",
      "Allergy & Eczema",
      "Mole & Skin Tag Removal",
      "Melasma (Under Eye)",
    ],
    procedureSteps: [
      { step: "01", title: "Digital Dermoscopy", desc: "High-magnification subsurface skin imaging to identify melanin depth and vascularity." },
      { step: "02", title: "Personalized Protocol", desc: "Formulation of target medical laser, chemical peel, or subcision plan." },
      { step: "03", title: "Clinical Execution", desc: "Painless procedure administered in sterilized clinical suites." },
      { step: "04", title: "Post-Care & Follow-Up", desc: "Tailored barrier recovery routine and scheduled clinical milestone reviews." },
    ],
  },
  {
    id: "antiaging",
    name: "Anti-Aging & Aesthetics",
    heading: "Turn back the clock with precision anti-aging aesthetics",
    tagline: "Experience natural, harmonious facial rejuvenation designed to lift, tighten, and restore youthful collagen contours.",
    description: "Our aesthetic medicine specialists utilize US-FDA approved dermal fillers, botulinum neuromodulators, and autologous Vampire Facelifts (PRP) for graceful age reversal.",
    image: "/images/services/service_antiaging.jpg",
    accent: "magenta",
    badgeVariant: "magenta",
    checklist: [
      "Certified Aesthetic Injectors",
      "Natural-Looking Results",
      "US-FDA Approved Fillers",
      "Non-Surgical Face Lift",
      "Zero/Minimal Downtime",
      "Luxury Private Suites",
    ],
    treatments: [
      "Botox Injections",
      "Dermal Fillers & Threads",
      "Vampire Facelift (PRP)",
      "Non-Surgical Face Lift",
      "Micro-Derma Polishing",
      "Oxygen Face Therapies",
      "Skin Toning by Thermage",
      "Wrinkle Laser Treatment",
      "Double Chin Removal",
    ],
    procedureSteps: [
      { step: "01", title: "Facial Symmetry Mapping", desc: "Golden ratio assessment of dynamic expressions and volume loss." },
      { step: "02", title: "Precision Micro-Injection", desc: "Administering premium FDA-cleared fillers or neuromodulators." },
      { step: "03", title: "Sculpting & Integration", desc: "Gentle contour refinement for imperceptible, youthful harmony." },
      { step: "04", title: "Long-Term Radiance", desc: "Collagen preservation timeline and periodic maintenance checks." },
    ],
  },
  {
    id: "hair",
    name: "Hair Restoration",
    heading: "Natural hairline design & permanent hair restoration",
    tagline: "Regain your crown of confidence with our world-class hair solutions, from microsurgical Bio-FUE transplants to regenerative growth therapies.",
    description: "Led by certified hair restoration surgeons, our clinic delivers maximum graft viability, natural hairline aesthetics, and autologous GFC (Growth Factor Concentrate) therapy.",
    image: "/images/services/service_hair.jpg",
    accent: "green",
    badgeVariant: "hair",
    checklist: [
      "Senior Hair Surgeons",
      "Natural Hairline Angle",
      "Bio-FUE Micro-Grafts",
      "Autologous GFC Therapy",
      "Painless Local Anesthesia",
      "Lifetime Growth Support",
    ],
    treatments: [
      "Hair Transplant",
      "PRP / GFC Therapy",
      "Hair Growth Treatments",
      "Beard Transplant",
      "Alopecia Treatment",
    ],
    procedureSteps: [
      { step: "01", title: "Trichoscopic Scalp Scan", desc: "Evaluation of donor follicular density and scalp micro-circulation." },
      { step: "02", title: "Artistic Hairline Design", desc: "Custom hairline planning customized to facial proportions and age." },
      { step: "03", title: "Micro-FUE Extraction", desc: "Gentle single and double graft harvesting with minimal transection." },
      { step: "04", title: "High-Density Implantation", desc: "Precision graft placement at natural growth angles for thick coverage." },
    ],
  },
  {
    id: "body",
    name: "Body Shaping & Surgery",
    heading: "Sculpt your ideal silhouette with medical precision",
    tagline: "Explore our surgical and non-surgical body contouring options engineered to eliminate stubborn fat and tone muscle contours.",
    description: "From non-invasive radiofrequency body sculpting (Exilis) to targeted surgical aesthetic procedures, we provide safe body transformations with lasting outcomes.",
    image: "/images/services/service_body.jpg",
    accent: "teal",
    badgeVariant: "teal",
    checklist: [
      "Board-Certified Surgeons",
      "Non-Invasive Options",
      "Targeted Fat Reduction",
      "Skin Tightening & Tone",
      "Customized Body Plan",
      "Dedicated Recovery Care",
    ],
    treatments: [
      "Liposuction (Fat Loss)",
      "Abdominoplasty (Tummy Tuck)",
      "Breast Lifting / Implant",
      "Gynecomastia (Male Breast)",
      "Body Detox (Panchakarma)",
      "Exilis For Body Shaping",
      "Neck & Jaw Line Shaping",
      "Lip/Nose Surgery",
    ],
    procedureSteps: [
      { step: "01", title: "Body Composition Analysis", desc: "Precise measurement of subcutaneous fat deposits and skin laxity." },
      { step: "02", title: "Targeted Energy Delivery", desc: "Application of therapeutic radiofrequency/ultrasound to induce lipolysis." },
      { step: "03", title: "Collagen Remodeling", desc: "Deep tissue heating promoting collagen contraction and skin firming." },
      { step: "04", title: "Post-Sculpt Monitoring", desc: "Guidance on hydration, lymphatic drainage, and result tracking." },
    ],
  },
  {
    id: "laser",
    name: "Laser & Intimate Care",
    heading: "US-FDA approved lasers & specialized aesthetic care",
    tagline: "High-tech laser solutions for permanent hair reduction, scar revision, and specialized intimate rejuvenation therapies.",
    description: "Equipped with gold-standard triple-wavelength lasers and contact cooling chill-tips, our procedures ensure maximum comfort and efficacy across sensitive areas.",
    image: "/images/services/service_laser.jpg",
    accent: "teal-deep",
    badgeVariant: "teal",
    checklist: [
      "Triple-Wavelength Laser",
      "Pain-Free Chilled Tip",
      "Safe for All Indian Skin",
      "Permanent Reduction",
      "Strict Privacy Protocols",
      "Certified Laser Operators",
    ],
    treatments: [
      "Laser Hair Removal",
      "Tattoo Removal",
      "Laser Stretch Mark Removal",
      "Vaginal Rejuvenation",
      "Vaginal Tightening",
      "P-Shot / G-Shot Therapy",
      "Permanent Makeup",
      "Full Body Whitening",
    ],
    procedureSteps: [
      { step: "01", title: "Patch Test & Parameter Setting", desc: "Calibrating fluence and pulse duration to your exact skin phototype." },
      { step: "02", title: "Chilled Surface Application", desc: "Active sapphire cooling protecting the epidermal layer." },
      { step: "03", title: "Targeted Photothermolysis", desc: "Deep follicular or pigment destruction with pinpoint precision." },
      { step: "04", title: "Calming Post-Laser Care", desc: "Application of medical soothing gels and sun-protection advisories." },
    ],
  },
];

// COMPLIANCE: verify these names, qualifications, and registration numbers with the client before public launch. Unverified medical credentials are a legal/ethical risk under the Medical Council of India's advertising regulations.
export const DOCTORS: DoctorProfile[] = [
  {
    id: "dr-ananya-sharma",
    name: "Dr. Ananya Sharma",
    designation: "Chief Consultant Dermatologist & Aesthetic Physician",
    specialty: "Clinical Dermatology, Vitiligo & Laser Surgery",
    experience: "14+ Years Clinical Experience",
    registrationNo: "UPMC-74892 (Medical Council of India)",
    qualifications: ["MBBS", "MD (Dermatology, Venereology & Leprosy)", "Fellow in Aesthetic Medicine (FAM)"],
    bio: "Specializing in complex pigmentary disorders, vitiligo management, and precision laser skin resurfacing with clinical credibility.",
    specializations: ["Vitiligo Protocols", "Acne Scar Subcision", "Medical Lasers", "Under Eye Melasma"],
  },
  {
    id: "dr-rohit-verma",
    name: "Dr. Rohit Verma",
    designation: "Senior Hair Restoration Surgeon & Trichologist",
    specialty: "Bio-FUE Hair Transplant & GFC Therapies",
    experience: "12+ Years Experience",
    registrationNo: "UPMC-82194 (Medical Council of India)",
    qualifications: ["MBBS", "MS (Surgery)", "Certified Hair Transplant Specialist (ISHRS Member)"],
    bio: "Pioneer in natural-line hairline design, high-density Bio-FUE transplants, beard reconstruction, and autologous growth factor concentrate therapy.",
    specializations: ["Bio-FUE Transplant", "Beard Restoration", "Alopecia Areata", "GFC Growth Therapy"],
  },
  {
    id: "dr-priya-saxena",
    name: "Dr. Priya Saxena",
    designation: "Aesthetic Medicine Specialist & Facial Sculptor",
    specialty: "Anti-Aging, Botox, Fillers & Non-Surgical Face Lift",
    experience: "10+ Years Experience",
    registrationNo: "UPMC-65910 (Medical Council of India)",
    qualifications: ["MBBS", "Diploma in Aesthetic Medicine (Germany)", "Advanced Injector Certification"],
    bio: "Passionate about natural, harmonious facial rejuvenation using FDA-approved dermal fillers, threads, and regenerative Vampire Facelifts.",
    specializations: ["Dermal Fillers", "Botulinum Toxin", "Thermage Skin Toning", "Thread Lifts"],
  },
];

export interface GalleryCaseItem {
  id: string;
  title: string;
  category: "skin" | "hair" | "antiaging" | "body" | "laser";
  categoryLabel: string;
  timeline: string;
  details: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  authorUrl: string;
  avatarColor: string;
  localGuide?: boolean;
  reviewCount?: string;
  photoCount?: string;
  rating: number;
  timeAgo: string;
  treatment: string;
  text: string;
  ownerResponse?: {
    date: string;
    text: string;
  };
}

export const GALLERY_CASES: GalleryCaseItem[] = [
  {
    id: "1",
    title: "Severe Acne & Scar Laser Revision",
    category: "skin",
    categoryLabel: "Clinical Dermatology",
    timeline: "4 Sessions (12 Weeks)",
    details: "Targeted dermatological laser protocol and subcision eliminating active acne lesions, reducing erythema, and smoothing dermal texture.",
    beforeImage: "/images/results/acne_before.jpg",
    afterImage: "/images/results/acne_after.jpg",
    beforeLabel: "Before Protocol",
    afterLabel: "After 12 Weeks",
  },
  {
    id: "2",
    title: "Anti-Aging & Fractional Laser Skin Resurfacing",
    category: "antiaging",
    categoryLabel: "Aesthetics & Anti-Aging",
    timeline: "3 Sessions (8 Weeks)",
    details: "Collagen-stimulating fractional laser resurfacing softening periorbital fine lines, fading sunspots, and restoring skin elasticity.",
    beforeImage: "/images/results/aging_before.jpg",
    afterImage: "/images/results/aging_after.jpg",
    beforeLabel: "Baseline Condition",
    afterLabel: "Post-Laser Result",
  },
  {
    id: "3",
    title: "Bio-FUE Hair Restoration & GFC Density Boost",
    category: "hair",
    categoryLabel: "Hair Restoration",
    timeline: "9 Months Post-Procedure",
    details: "Meticulous microsurgical graft placement of 3,200 follicles paired with autologous growth factor concentrate (GFC) therapy.",
    beforeImage: "/images/results/hair_before.jpg",
    afterImage: "/images/results/hair_after.jpg",
    beforeLabel: "Grade 4 Thinning",
    afterLabel: "Full Density Restored",
  },
];

// COMPLIANCE: Static snapshot of verified Google Reviews. Confirm with client if live Google Places API integration is required for automatic sync or if this curated snapshot is approved for launch (with a documented manual refresh process).
export const GOOGLE_REVIEWS: ReviewItem[] = [
  {
    id: "review-1",
    author: "Akash Bhattacharya",
    authorUrl: "https://www.google.com/maps/contrib/116597785375003627057/reviews?hl=en-GB",
    avatarColor: "#4285F4",
    localGuide: true,
    reviewCount: "13 reviews",
    photoCount: "2 photos",
    rating: 5,
    timeAgo: "9 weeks ago",
    treatment: "Skin Care & Hair Rejuvenation",
    text: "best dermatologist in lucknow, must visit if you're going for skin care, hair rejuvenation, or any other skin or hair problems.",
    ownerResponse: {
      date: "9 weeks ago",
      text: "Thank you so much, Akash! We're delighted that you loved your experience at Ewa Derma Clinic. We strive to provide the highest standard of skin and hair care in Lucknow.",
    },
  },
  {
    id: "review-2",
    author: "Sneha Sahu",
    authorUrl: "https://www.google.com/maps/contrib/118078844130821883579/reviews?hl=en-GB",
    avatarColor: "#EA4335",
    localGuide: false,
    reviewCount: "1 review",
    photoCount: "0 photos",
    rating: 5,
    timeAgo: "13 weeks ago",
    treatment: "Clinical Dermatology Consultation",
    text: "I recently consulted doctor for a skin related issue I must say , the experience was excellent. Doctor was extremely knowledgeable, patient and talk the time to to thoroughly understand my concerns. The consultation was very detailed,",
    ownerResponse: {
      date: "13 weeks ago",
      text: "Dear Sneha Sahu, thank you for trusting Ewa Derma Clinic with your skin health. We are glad our doctor's in-depth consultation brought you comfort and clarity.",
    },
  },
  {
    id: "review-3",
    author: "Vipin Sahu",
    authorUrl: "https://www.google.com/maps/contrib/102133994624392188796/reviews?hl=en-GB",
    avatarColor: "#FBBC05",
    localGuide: false,
    reviewCount: "1 review",
    photoCount: "0 photos",
    rating: 5,
    timeAgo: "15 weeks ago",
    treatment: "Dermatological Treatment",
    text: "Exceptional clinical care and warm hospitality. The dermatologist explained the root cause of my condition clearly and the results have been remarkable.",
    ownerResponse: {
      date: "14 weeks ago",
      text: "Dear Vipin Sahu, thank you for your kind 5-star review! We are always committed to root-cause diagnosis and patient satisfaction.",
    },
  },
  {
    id: "review-4",
    author: "muskan gupta",
    authorUrl: "https://www.google.com/maps/contrib/108441036047633623565/reviews?hl=en-GB",
    avatarColor: "#34A853",
    localGuide: false,
    reviewCount: "2 reviews",
    photoCount: "0 photos",
    rating: 5,
    timeAgo: "29 weeks ago",
    treatment: "Clinic Care & Medical Assistance",
    text: "Good staff and good treatment and very helf full doctors",
    ownerResponse: {
      date: "29 weeks ago",
      text: "Dear Muskan, Thank you so much for this 5-star review. We appreciate you helping to spread the word about us. We are here for you at any time. Thank you, Ewa Derma Clinic",
    },
  },
  {
    id: "review-5",
    author: "Saumitra Tiwari",
    authorUrl: "https://www.google.com/maps/contrib/104951607384794652240/reviews?hl=en-GB",
    avatarColor: "#8E24AA",
    localGuide: false,
    reviewCount: "4 reviews",
    photoCount: "0 photos",
    rating: 5,
    timeAgo: "33 weeks ago",
    treatment: "Skin Treatment & Therapy",
    text: "Very Nice experience for skin treatment",
    ownerResponse: {
      date: "32 weeks ago",
      text: "Dear Saumitra, thank you for your valuable feedback. We're glad you had a wonderful experience with our skin treatment services.",
    },
  },
  {
    id: "review-6",
    author: "Roli Yadav",
    authorUrl: "https://www.google.com/maps/contrib/101325205541929503848/reviews?hl=en-GB",
    avatarColor: "#E31C79",
    localGuide: false,
    reviewCount: "1 review",
    photoCount: "0 photos",
    rating: 5,
    timeAgo: "33 weeks ago",
    treatment: "Doctor Consultation & Clinical Care",
    text: "Excellent clinic with very polite Doctor and cooperative staff Doctor ka behaviour bahut friendly Hai aur staff bhi kaafi Helpful hai . Overall experience bahut achha Raha. Highly recommended 👍",
    ownerResponse: {
      date: "33 weeks ago",
      text: "Dear Roli, thank you so much for your wonderful words and warm recommendation! Our entire team at Ewa Derma is thrilled to have served you.",
    },
  },
];

export const REVIEWS = GOOGLE_REVIEWS;

