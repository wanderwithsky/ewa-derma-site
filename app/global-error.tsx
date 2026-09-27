"use client";

import React, { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global application error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F7FAF9] text-[#14262B] flex items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full p-8 rounded-3xl bg-white border border-[#146A80]/20 shadow-2xl text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-[#E31C79]/10 text-[#E31C79] flex items-center justify-center mx-auto text-2xl font-bold">
            !
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-black text-[#0D4A5A]">
              Application Error
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              A critical error occurred while rendering the page layout.
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={() => reset()}
              className="px-6 py-3 rounded-full bg-[#E31C79] text-white font-bold text-sm hover:opacity-90 transition-opacity shadow-lg"
            >
              Refresh Application
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
