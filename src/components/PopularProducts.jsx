import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const popularProducts = [
  {
    id: 1,
    name: "화이트 튤립 부케",
    price: "18,000원",
    image: "/products/tulip.jpg",
    category: "튤립",
  },
  {
    id: 2,
    name: "안개꽃 믹스",
    price: "15,000원",
    image: "/products/babysbreath.jpg",
    category: "안개꽃",
  },
  {
    id: 3,
    name: "핑크 장미 박스",
    price: "22,000원",
    image: "/products/rosebox.jpg",
    category: "장미",
  },
  {
    id: 4,
    name: "노란 프리지아",
    price: "17,000원",
    image: "/products/freesia.jpg",
    category: "프리지아",
  },
  {
    id: 5,
    name: "라벤더 드라이 플라워",
    price: "19,000원",
    image: "/products/lavender.jpg",
    category: "라벤더",
  },
  {
    id: 6,
    name: "리시안셔스 믹스",
    price: "20,000원",
    image: "/products/lisianthus.jpg",
    category: "리시안셔스",
  },
];

export default function PopularProducts() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const itemsperPage = 3;

  const maxIndex = Math.ceil(popularProducts.length / itemsperPage) - 1;

  const handlePrev = () => {
    setCurrent((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrent((prev) => Math.min(prev + 1, maxIndex));
  };

  const startIndex = current * itemsperPage;
  const visibleProducts = popularProducts.slice(
    startIndex,
    startIndex + itemsperPage
  );

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  useEffect(() => {
    console.log(current);
  }, [current]);

  return (
    <div className="relative">
      {/* 네비게이션 버튼 */}
      <button
        onClick={handlePrev}
        disabled={current === 0}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full flex items-center justify-center hover:bg-white hover:shadow-lg transition-all duration-300 z-10 disabled:opacity-30 disabled:cursor-not-allowed group"
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
        onClick={handleNext}
        disabled={current === maxIndex}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full flex items-center justify-center hover:bg-white hover:shadow-lg transition-all duration-300 z-10 disabled:opacity-30 disabled:cursor-not-allowed group"
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

      {/* 제품 그리드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-16">
        {visibleProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 cursor-pointer"
            onClick={() => handleProductClick(product.id)}
          >
            {/* 이미지 컨테이너 */}
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* 카테고리 배지 */}
              <div className="absolute top-4 left-4">
                <span className="bg-green-500/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
              {/* 호버 오버레이 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* 제품 정보 */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                {product.name}
              </h3>
              <p className="text-2xl font-bold text-green-600 mb-4">
                {product.price}
              </p>

              {/* 장바구니 버튼 */}
              <button
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-3 px-4 rounded-xl hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={(e) => {
                  e.stopPropagation();
                  // 장바구니 로직 추가 예정
                }}
              >
                장바구니에 담기
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 인디케이터 */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: maxIndex + 1 }, (_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === current
                ? "bg-green-500 scale-125 shadow-lg"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
