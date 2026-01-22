"use client";

import { useAnimationFrame } from "motion/react";
import { useRef } from "react";

export default function CubeAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useAnimationFrame((t) => {
    if (!ref.current) return;

    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -50;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <div className="container flex justify-center">
      <div className="cube w-50 h-50 relative" ref={ref}>
        <div className="absolute w-full h-full opacity-60 bg-teal-500 transform translate-z-25 front" />
        <div className="absolute w-full h-full opacity-60 bg-teal-500 transform translate-z-25 left" />
        <div className="absolute w-full h-full opacity-60 bg-teal-500 transform translate-z-25 right" />
        <div className="absolute w-full h-full opacity-60 bg-teal-500 transform translate-z-25 top" />
        <div className="absolute w-full h-full opacity-60 bg-teal-500 transform translate-z-25 bottom" />
        <div className="absolute w-full h-full opacity-60 bg-teal-500 transform translate-z-25 back" />
      </div>
    </div>
  );
}
