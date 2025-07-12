import { useState, useEffect } from "react";

// 반복문을 사용해서 activity 이미지 배열 생성
const images = Array.from(
  { length: 8 },
  (_, index) => `/slider/activity${index + 1}.png`
);

export default function MainSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto aspect-[16/7] overflow-hidden rounded-3xl shadow-2xl">
      {/* 슬라이드 이미지들 */}
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out ${
            idx === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <img
            src={img}
            alt={`슬라이드 이미지 ${idx + 1}`}
            className="w-full h-full object-cover"
          />
          {/* 그라데이션 오버레이 */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/10"></div>
        </div>
      ))}

      {/* 네비게이션 버튼 */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group z-10"
      >
        <svg
          className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group z-10"
      >
        <svg
          className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* 인디케이터 */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === current
                ? "bg-white scale-125 shadow-lg"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* 슬라이드 콘텐츠 */}
      <div className="absolute bottom-8 left-8 right-8 z-10">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md">
          <h2 className="text-3xl font-bold text-white mb-2">태국의 활동 </h2>
          <p className="text-white/90 text-lg">꽃과 함께하는 특별한 순간들</p>
        </div>
      </div>
    </div>
  );
}
