"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/context/useCart";

export default function Toast() {
  const { toast, hideToast } = useCart();

  useEffect(() => {
    if (toast.isVisible) {
      const timer = setTimeout(() => {
        hideToast();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [toast.isVisible, hideToast]);

  if (!toast.isVisible) return null;

  const bgColor = toast.type === "success" ? "bg-green-500" : "bg-red-500";
  const icon =
    toast.type === "success" ? (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    ) : (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    );

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in">
      <div
        className={`${bgColor} text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 max-w-sm`}
      >
        <div className="flex-shrink-0">{icon}</div>
        <div className="flex-1">
          <p className="text-sm font-medium">{toast.message}</p>
        </div>
        <button
          onClick={hideToast}
          className="flex-shrink-0 text-white hover:text-gray-200 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
