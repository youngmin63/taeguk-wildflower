"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/useCart";

const popularProducts = [
  {
    id: 1,
    name: "사계넝쿨장미",
    price: "25,000원",
    image: "/products/converted/climbing-rose.png",
    category: "야생화",
  },
  {
    id: 2,
    name: "수국",
    price: "18,000원",
    image: "/products/converted/hydrangea.png",
    category: "야생화",
  },
  {
    id: 3,
    name: "유럽목수국",
    price: "22,000원",
    image: "/products/converted/european-hydrangea2.png",
    category: "야생화",
  },
  {
    id: 4,
    name: "외목대목수국",
    price: "28,000원",
    image: "/products/converted/tree-hydrangea.png",
    category: "야생화",
  },
  {
    id: 5,
    name: "꼭지윤노리꽃나무",
    price: "35,000원",
    image: "/products/converted/cornus-kousa.png",
    category: "유실수",
  },
  {
    id: 6,
    name: "매자나무",
    price: "32,000원",
    image: "/products/converted/barberry.png",
    category: "조경수",
  },
  {
    id: 7,
    name: "황금조팝",
    price: "38,000원",
    image: "/products/converted/golden-spirea.png",
    category: "조경수",
  },
];

export default function PopularProducts() {
  const [current, setCurrent] = useState(0);
  const router = useRouter();
  const { addToCart, isInCart } = useCart();
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
    router.push(`/product/${productId}`);
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
                className={`w-full font-semibold py-3 px-4 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl ${
                  isInCart(product.id)
                    ? "bg-gray-500 text-white cursor-not-allowed"
                    : "bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  if (!isInCart(product.id)) {
                    addToCart(product);
                  }
                }}
                disabled={isInCart(product.id)}
              >
                {isInCart(product.id) ? "이미 담긴 상품" : "장바구니에 담기"}
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
