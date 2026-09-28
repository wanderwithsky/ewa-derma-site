"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Quote,
  MapPin,
  Sparkles,
  ExternalLink,
  CheckCircle,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Pause,
  Play,
} from "lucide-react";
import { GOOGLE_REVIEWS, ReviewItem } from "@/lib/data";
import { cn } from "@/lib/utils";

// Google G Icon Component
const GoogleIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

const ReviewCard: React.FC<{
  review: ReviewItem;
}> = ({ review }) => {
  const [showResponse, setShowResponse] = useState(false);

  return (
    <div className="review-card w-[340px] sm:w-[380px] shrink-0 bg-white rounded-3xl p-6 border border-[#146A80]/15 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group/card select-none text-left">
      <div className="space-y-4">
        {/* Reviewer Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            {/* Google Colorful Avatar */}
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-base shadow-sm shrink-0 uppercase"
              style={{ backgroundColor: review.avatarColor }}
            >
              {review.author.charAt(0)}
            </div>

            <div>
              <a
                href={review.authorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-bold text-sm text-[#0D4A5A] hover:text-[#E31C79] transition-colors flex items-center gap-1.5 group/link"
              >
                <span>{review.author}</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity text-gray-400" />
              </a>

              <div className="flex items-center gap-1.5 text-[11px] text-gray-500 mt-0.5">
                {review.localGuide ? (
                  <span className="inline-flex items-center gap-1 font-semibold text-orange-600 bg-orange-50 px-1.5 py-0.2 rounded">
                    ★ Local Guide
                  </span>
                ) : (
                  <span>Verified Patient</span>
                )}
                <span>•</span>
                <span>{review.reviewCount}</span>
              </div>
            </div>
          </div>

          {/* Google G Logo Badge */}
          <div className="p-1.5 rounded-full bg-gray-50 border border-gray-100 shrink-0">
            <GoogleIcon className="w-4 h-4" />
          </div>
        </div>

        {/* Rating Stars & Timestamp */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-0.5">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-[11px] font-mono text-gray-400">
            {review.timeAgo}
          </span>
        </div>

        {/* Treatment Tag */}
        <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#146A80]/10 text-[#0D4A5A]">
          {review.treatment}
        </div>

        {/* Review Text */}
        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic line-clamp-4">
          &ldquo;{review.text}&rdquo;
        </p>
      </div>

      {/* Owner Response Accordion / Footer */}
      {review.ownerResponse && (
        <div className="mt-4 pt-3 border-t border-gray-100">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowResponse(!showResponse);
            }}
            className="w-full flex items-center justify-between text-[11px] font-semibold text-[#146A80] hover:text-[#0D4A5A] transition-colors py-1 focus:outline-none"
          >
            <span className="flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-[#E31C79]" />
              Response from Ewa Derma Clinic
            </span>
            {showResponse ? (
              <ChevronUp className="w-3.5 h-3.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" />
            )}
          </button>

          {showResponse && (
            <div className="mt-2 p-3 rounded-xl bg-[#F0F7F7] border border-[#146A80]/15 text-[11px] text-[#0D4A5A] leading-relaxed space-y-1 animate-fadeIn">
              <div className="font-bold flex items-center gap-1 text-[10px] text-gray-500 uppercase tracking-wider">
                <span>Ewa Derma Clinic (Owner)</span>
                <span>•</span>
                <span>{review.ownerResponse.date}</span>
              </div>
              <p>{review.ownerResponse.text}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const TestimonialCarousel: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="space-y-8 w-full">
      {/* Top Google Trust Bar */}
      <div className="max-w-xl mx-auto flex flex-wrap items-center justify-center gap-4 sm:gap-8 p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-[#146A80]/20 shadow-sm text-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shadow-sm border border-gray-100">
            <GoogleIcon className="w-5 h-5" />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1">
              <span className="font-display font-black text-lg text-[#0D4A5A]">5.0</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <span className="text-[11px] text-gray-500 font-medium">
              100% Genuine Google Reviews
            </span>
          </div>
        </div>

        <div className="h-8 w-[1px] bg-gray-200 hidden sm:block" />

        <div className="flex items-center gap-3">
          <a
            href="https://www.google.com/maps/place/Ewa+Derma+Clinic/@26.791224,80.995965,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-[#0D4A5A] bg-[#146A80]/10 hover:bg-[#0D4A5A] hover:text-white transition-all shadow-sm"
          >
            <span>Read on Google Maps</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          {/* Pause / Play Toggle Button */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
            title={isPaused ? "Resume Autoplay" : "Pause Autoplay"}
            aria-label={isPaused ? "Resume Autoplay" : "Pause Autoplay"}
          >
            {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
      <style>{`
        @keyframes custom-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .testimonial-track {
          animation: custom-marquee 40s linear infinite !important;
        }
        .testimonial-track:has(.review-card:hover),
        .testimonial-track.force-pause {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* Infinite Moving Marquee Track */}
      <div className="relative w-[100vw] left-1/2 -translate-x-1/2 overflow-hidden py-4">
        {/* Animated Marquee Row */}
        <div
          className={`flex w-max testimonial-track ${isPaused ? 'force-pause' : ''}`}
        >
          {/* First Set */}
          <div className="flex shrink-0 gap-6 px-3">
            {GOOGLE_REVIEWS.map((review, index) => (
              <ReviewCard key={`${review.id}-${index}-1`} review={review} />
            ))}
          </div>

          {/* Second Set (Duplicate for seamless looping) */}
          <div className="flex shrink-0 gap-6 px-3" aria-hidden="true">
            {GOOGLE_REVIEWS.map((review, index) => (
              <ReviewCard key={`${review.id}-${index}-2`} review={review} />
            ))}
          </div>
          </div>
      </div>


    </div>
  );
};

