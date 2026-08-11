"use client";

import { useState, useEffect } from "react";

const words = [
  "Financial",
  "Professional",
  "Ethical",
  "Strategic",
  "Reliable",
  "Accounting",
];

export default function RotatingText() {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block relative">
      <span
        className={`gradient-text inline-block transition-all duration-500 ease-in-out ${
          isAnimating
            ? "opacity-0 translate-y-4 blur-[2px]"
            : "opacity-100 translate-y-0 blur-0"
        }`}
      >
        {words[index]}
      </span>
    </span>
  );
}
