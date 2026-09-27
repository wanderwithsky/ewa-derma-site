"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error caught by boundary:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-ewa-mist text-ewa-ink flex flex-col items-center justify-center p-6 selection:bg-ewa-magenta selection:text-white">
      <div className="max-w-md w-full p-8 rounded-3xl glass-card border-ewa-teal/20 text-center space-y-6 shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-ewa-magenta/10 border border-ewa-magenta/20 flex items-center justify-center text-ewa-magenta mx-auto shadow-sm">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <Badge variant="magenta" size="sm">
            Temporary Notice
          </Badge>
          <h1 className="text-2xl font-display font-black text-ewa-teal-deep">
            Something went wrong
          </h1>
          <p className="text-xs sm:text-sm text-ewa-ink/75 leading-relaxed">
            We encountered an unexpected condition while loading this view. You can reload the page or return to the home screen.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button
            variant="primary"
            size="md"
            onClick={() => reset()}
            leftIcon={<RefreshCw className="w-4 h-4" />}
            className="w-full sm:w-auto"
          >
            Try Again
          </Button>

          <Link href="/" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="md"
              leftIcon={<Home className="w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
