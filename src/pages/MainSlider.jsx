import { useState, useEffect } from "react";

const images = [
  "/slider/slider1.png",
  "/slider/slider2.png",
  "/slider/slider3.png",
];

export default function MainSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto aspect-[16/9] overflow-hidden rounded-xl shadow-lg relative">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`슬라이드 이미지 ${idx + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
