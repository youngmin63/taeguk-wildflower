"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/useCart";

const productData = [
  {
    id: 1,
    name: "화이트 튤립 부케",
    price: "18,000원",
    image: "/products/tulip.jpg",
    category: "튤립",
    description:
      "신선한 화이트 튤립으로 만든 아름다운 부케입니다. 특별한 날을 더욱 특별하게 만들어줄 최고의 선물이에요!",
    detailImage: "/products/tulip.jpg",
  },
  {
    id: 2,
    name: "안개꽃 믹스",
    price: "15,000원",
    image: "/products/babysbreath.jpg",
    category: "안개꽃",
    description:
      "부드럽고 우아한 안개꽃으로 구성된 믹스 부케입니다. 순수하고 깨끗한 느낌을 선사합니다.",
    detailImage: "/products/babysbreath.jpg",
  },
  {
    id: 3,
    name: "핑크 장미 박스",
    price: "22,000원",
    image: "/products/rosebox.jpg",
    category: "장미",
    description:
      "로맨틱한 핑크 장미로 만든 특별한 박스 부케입니다. 사랑을 전하는 가장 완벽한 방법입니다.",
    detailImage: "/products/rosebox.jpg",
  },
  {
    id: 4,
    name: "노란 프리지아",
    price: "17,000원",
    image: "/products/freesia.jpg",
    category: "프리지아",
    description:
      "향기로운 노란 프리지아로 만든 부케입니다. 밝고 경쾌한 에너지를 전달합니다.",
    detailImage: "/products/freesia.jpg",
  },
  {
    id: 5,
    name: "라벤더 드라이 플라워",
    price: "19,000원",
    image: "/products/lavender.jpg",
    category: "라벤더",
    description:
      "진정 효과가 있는 라벤더로 만든 드라이 플라워입니다. 오랫동안 보관할 수 있습니다.",
    detailImage: "/products/lavender.jpg",
  },
  {
    id: 6,
    name: "리시안셔스 믹스",
    price: "20,000원",
    image: "/products/lisianthus.jpg",
    category: "리시안셔스",
    description:
      "우아하고 고급스러운 리시안셔스로 만든 믹스 부케입니다. 특별한 순간을 위한 완벽한 선택입니다.",
    detailImage: "/products/lisianthus.jpg",
  },
];

function ProductDetail() {
  const router = useRouter();
  const { addToCart, isInCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  // 임시로 첫 번째 상품을 사용 (실제로는 params에서 가져와야 함)
  const product = productData[0];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            상품을 찾을 수 없습니다
          </h1>
          <button
            onClick={() => router.push("/")}
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-200 font-medium"
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 상품 요약 섹션 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* 상품 이미지 */}
            <div className="relative h-96 lg:h-full">
              <img
                className="w-full h-full object-cover"
                src={product.image}
                alt={product.name}
              />
              <div className="absolute top-4 left-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </span>
              </div>
            </div>

            {/* 상품 정보 */}
            <div className="p-8 flex flex-col justify-center">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                <p className="text-2xl font-semibold text-green-600 mb-6">
                  {product.price}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="space-y-4">
                {/* 수량 선택 */}
                <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
                  <span className="font-medium text-gray-700">수량</span>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-medium">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button className="w-full bg-green-500 text-white py-4 px-6 rounded-xl hover:bg-green-600 transition-colors duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  구매하기
                </button>

                <button
                  className={`w-full py-3 px-6 rounded-xl font-medium transition-colors duration-200 ${
                    isInCart(product.id)
                      ? "bg-gray-500 text-white cursor-not-allowed"
                      : "border-2 border-green-500 text-green-500 hover:bg-green-50"
                  }`}
                  onClick={() => {
                    if (!isInCart(product.id)) {
                      addToCart(product, quantity);
                    }
                  }}
                  disabled={isInCart(product.id)}
                >
                  {isInCart(product.id) ? "이미 담긴 상품" : "장바구니 담기"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 상품 상세 설명 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="w-1 h-8 bg-green-500 rounded-full mr-4"></span>
            상품 상세 설명
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {product.description}
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">신선한 꽃으로 제작</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">전문 플로리스트가 제작</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">고급 포장재 사용</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                className="w-full h-80 object-cover rounded-xl shadow-lg"
                src={product.detailImage}
                alt="상세 이미지"
              />
            </div>
          </div>
        </div>

        {/* 배송 및 판매자 정보 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 배송 안내 */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <svg
                className="w-6 h-6 text-green-500 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
              배송 안내
            </h3>
            <div className="space-y-3 text-gray-600">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span>주문 후 2~3일 이내 전국 택배 배송</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span>오전 10시 이전 주문 시 당일 출고</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span>배송비 무료 (3만원 이상 구매 시)</span>
              </div>
            </div>
          </div>

          {/* 판매자 정보 */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <svg
                className="w-6 h-6 text-green-500 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              판매자 정보
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold text-lg">G</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">태국야생화</p>
                  <p className="text-sm text-gray-500">
                    신뢰할 수 있는 꽃 농원
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-gray-200">
                <div className="flex items-center text-sm text-gray-600">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>충청북도 청주시 청원구</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
