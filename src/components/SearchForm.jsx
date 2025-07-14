"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const categories = [
  { id: "all", name: "전체" },
  { id: "wildflower", name: "야생화" },
  { id: "fruit-tree", name: "유실수" },
  { id: "landscape", name: "조경수" },
  { id: "indoor", name: "실내식물" },
];

const priceRanges = [
  { id: "all", name: "전체 가격" },
  { id: "under-20k", name: "20,000원 이하" },
  { id: "20k-30k", name: "20,000원 - 30,000원" },
  { id: "30k-40k", name: "30,000원 - 40,000원" },
  { id: "over-40k", name: "40,000원 이상" },
];

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchParams = new URLSearchParams();

    if (searchTerm.trim()) {
      searchParams.append("q", searchTerm.trim());
    }
    if (selectedCategory !== "all") {
      searchParams.append("category", selectedCategory);
    }
    if (selectedPriceRange !== "all") {
      searchParams.append("price", selectedPriceRange);
    }

    const queryString = searchParams.toString();
          router.push(`/products?${queryString}`);
  };

  const handleClear = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedPriceRange("all");
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mb-4 shadow-lg">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">꽃 검색하기</h2>
        <p className="text-gray-600">원하시는 꽃을 쉽고 빠르게 찾아보세요</p>
      </div>

      <form onSubmit={handleSearch} className="space-y-4">
        {/* 기본 검색 입력 */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="꽃 이름을 입력하세요 (예: 장미, 수국, 튤립...)"
            className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
          />
        </div>

        {/* 고급 검색 토글 */}
        <div className="text-center">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center mx-auto space-x-1 transition-colors duration-300"
          >
            <span>고급 검색 옵션</span>
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {/* 고급 검색 옵션 */}
        {isExpanded && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-xl">
            {/* 카테고리 선택 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                카테고리
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* 가격대 선택 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                가격대
              </label>
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
              >
                {priceRanges.map((range) => (
                  <option key={range.id} value={range.id}>
                    {range.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* 검색 버튼들 */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg
              className="w-5 h-5 mr-2 inline"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            검색하기
          </button>

          <button
            type="button"
            onClick={handleClear}
            className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
          >
            초기화
          </button>
        </div>
      </form>

      {/* 빠른 검색 태그 */}
      <div className="mt-6">
        <p className="text-sm text-gray-600 mb-3">빠른 검색:</p>
        <div className="flex flex-wrap gap-2">
          {["장미", "수국", "튤립", "라벤더", "프리지아", "리시안서스"].map(
            (tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setSearchTerm(tag)}
                className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full hover:bg-blue-200 transition-colors duration-300"
              >
                {tag}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}
