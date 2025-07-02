import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto ml-10 flex items-center justify-between px-1 py-4 ">
        {/* 로고 */}
        <Link
          to="/"
          className=" text-3xl font-bold text-green-700 tracking-tight whitespace-nowrap"
        >
          태국야생화
        </Link>

        {/* 메뉴 */}
        <nav className="hidden md:flex gap-12  text-gray-700 text-xl font-medium">
          <Link
            to="/products?category=야생화"
            className="hover:text-green-600 transition"
          >
            야생화
          </Link>
          <Link
            to="/products?category=조경수"
            className="hover:text-green-600 transition"
          >
            조경수
          </Link>
          <Link
            to="/products?category=정원수"
            className="hover:text-green-600 transition"
          >
            정원수
          </Link>
          <Link to="/inquiry" className="hover:text-green-600 transition">
            문의하기
          </Link>
        </nav>

        {/* 우측 아이콘 */}
        <div className="flex items-center gap-10 text-l text-gray-600">
          <button aria-label="검색" className="hover:text-green-700 transition">
            🔍 상품 검색
          </button>
          <Link
            to="/cart"
            aria-label="장바구니"
            className="hover:text-green-700 transition"
          >
            🛒 장바구니
          </Link>
        </div>
      </div>
    </header>
  );
}
