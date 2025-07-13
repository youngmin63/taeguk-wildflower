import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/useCart";

export default function TopHeader() {
  const { getCartItemCount } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // 실제 검색 로직을 여기에 구현
      console.log("검색어:", searchQuery);
      // 예: 검색 결과 페이지로 이동
      // navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <Link to="/" className="flex items-center space-x-1 group">
            <span className="text-xl ml-2 font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent tracking-tight">
              태국 야생화
            </span>
          </Link>

          {/* 우측 영역 - 검색, 장바구니, 내정보 */}
          <div className="flex items-center space-x-6">
            {/* 검색 입력창 */}
            <div className="relative">
              <input
                type="text"
                placeholder="검색어를 입력하세요..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch(e)}
                className={`w-48 px-3 py-2 pr-10 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 ${
                  isSearchFocused ? "border-green-500" : "border-gray-300"
                }`}
              />
              <button
                type="button"
                onClick={handleSearch}
                aria-label="검색"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-green-600 transition-colors duration-200"
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            {/* 카트 */}
            <Link
              to="/cart"
              aria-label="카트"
              className="flex flex-col items-center p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300 group"
            >
              <div className="relative">
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
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                {/* 카트 아이템 수 표시 */}
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                  {getCartItemCount()}
                </span>
              </div>
              <span className="text-xs mt-1 font-medium">장바구니</span>
            </Link>

            {/* 마이페이지 */}
            <Link
              to="/mypage"
              aria-label="마이페이지"
              className="flex flex-col items-center p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300 group"
            >
              <div className="relative">
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <span className="text-xs mt-1 font-medium">마이페이지</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
