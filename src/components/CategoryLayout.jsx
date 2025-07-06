import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function CategoryLayout() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart, isInCart } = useCart();

  // 카테고리별 상품 데이터 (실제로는 API에서 가져올 데이터)
  const categoryProducts = {
    야생화: [
      {
        id: 1,
        name: "사계넝쿨장미",
        price: 25000,
        image: "/products/converted/climbing-rose.png",
        description: "사계절 아름다운 꽃을 피우는 넝쿨장미",
        inStock: true,
      },
      {
        id: 2,
        name: "수국",
        price: 18000,
        image: "/products/converted/hydrangea.png",
        description: "우아하고 아름다운 수국",
        inStock: true,
      },
      {
        id: 3,
        name: "유럽목수국",
        price: 22000,
        image: "/products/converted/european-hydrangea2.png",
        description: "유럽풍의 아름다운 목수국",
        inStock: true,
      },
      {
        id: 4,
        name: "외목대목수국",
        price: 28000,
        image: "/products/converted/tree-hydrangea.png",
        description: "외목대 형태의 아름다운 목수국",
        inStock: true,
      },
    ],
    유실수: [
      {
        id: 5,
        name: "꼭지윤노리꽃나무",
        price: 35000,
        image: "/products/converted/cornus-kousa.png",
        description: "아름다운 꽃과 열매를 맺는 윤노리꽃나무",
        inStock: true,
      },
    ],
    조경수: [
      {
        id: 6,
        name: "매자나무",
        price: 32000,
        image: "/products/converted/barberry.png",
        description: "아름다운 잎과 꽃을 가진 매자나무",
        inStock: true,
      },
      {
        id: 7,
        name: "황금조팝",
        price: 38000,
        image: "/products/converted/golden-spirea.png",
        description: "황금빛 잎이 아름다운 조팝나무",
        inStock: true,
      },
    ],
  };

  useEffect(() => {
    // 카테고리에 따른 상품 필터링
    if (category && categoryProducts[category]) {
      setProducts(categoryProducts[category]);
    } else {
      setProducts([]);
    }
    setLoading(false);
  }, [category]);

  const getCategoryInfo = (cat) => {
    const categoryInfo = {
      야생화: {
        title: "야생화",
        subtitle: "자연의 아름다움을 담은 야생화",
        description:
          "태국의 아름다운 야생화들을 만나보세요. 자연 그대로의 아름다움과 향기를 느껴보세요.",
        icon: (
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        ),
      },
      유실수: {
        title: "유실수",
        subtitle: "맛있는 열매를 맺는 과실수",
        description:
          "태국의 다양한 과실수들을 만나보세요. 신선한 과일을 직접 수확할 수 있는 기회입니다.",
        icon: (
          <svg
            className="w-8 h-8"
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
        ),
      },
      조경수: {
        title: "조경수",
        subtitle: "아름다운 정원을 위한 조경수",
        description:
          "태국의 아름다운 조경수들을 만나보세요. 정원을 더욱 아름답게 만들어줄 나무들입니다.",
        icon: (
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z"
            />
          </svg>
        ),
      },
    };
    return categoryInfo[cat] || categoryInfo.야생화;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!category || !categoryProducts[category]) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              카테고리를 찾을 수 없습니다
            </h1>
            <p className="text-gray-600 mb-8">
              올바른 카테고리를 선택해주세요.
            </p>
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition-colors duration-300"
            >
              홈으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const categoryInfo = getCategoryInfo(category);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* 헤더 섹션 */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="text-green-600">{categoryInfo.icon}</div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {categoryInfo.title}
              </h1>
              <p className="text-lg text-gray-600">{categoryInfo.subtitle}</p>
            </div>
          </div>
          <p className="text-gray-700 max-w-3xl">{categoryInfo.description}</p>
        </div>
      </div>

      {/* 상품 목록 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 필터 및 정렬 옵션 */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 font-medium">
              총 {products.length}개 상품
            </span>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">정렬:</span>
              <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>최신순</option>
                <option>가격 낮은순</option>
                <option>가격 높은순</option>
                <option>인기순</option>
              </select>
            </div>
          </div>

          {/* 카테고리 네비게이션 */}
          <div className="flex items-center space-x-2">
            <Link
              to="/products?category=야생화"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                category === "야생화"
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-700 hover:bg-green-50 border border-gray-200"
              }`}
            >
              야생화
            </Link>
            <Link
              to="/products?category=유실수"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                category === "유실수"
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-700 hover:bg-green-50 border border-gray-200"
              }`}
            >
              유실수
            </Link>
            <Link
              to="/products?category=조경수"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                category === "조경수"
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-700 hover:bg-green-50 border border-gray-200"
              }`}
            >
              조경수
            </Link>
          </div>
        </div>

        {/* 상품 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group block"
            >
              {/* 상품 이미지 */}
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    console.error(`이미지 로딩 실패: ${product.image}`);
                    e.target.src =
                      "https://via.placeholder.com/300x200?text=이미지+준비중";
                  }}
                  onLoad={() => {
                    console.log(`이미지 로딩 성공: ${product.image}`);
                  }}
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">품절</span>
                  </div>
                )}
              </div>

              {/* 상품 정보 */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-green-600">
                    {product.price.toLocaleString()}원
                  </span>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (product.inStock && !isInCart(product.id)) {
                        addToCart(product);
                      }
                    }}
                    disabled={!product.inStock || isInCart(product.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                      !product.inStock
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : isInCart(product.id)
                        ? "bg-gray-500 text-white cursor-not-allowed"
                        : "bg-green-600 text-white hover:bg-green-700"
                    }`}
                  >
                    {!product.inStock
                      ? "품절"
                      : isInCart(product.id)
                      ? "담김"
                      : "장바구니"}
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 상품이 없을 때 */}
        {products.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg
                className="w-16 h-16 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              상품이 없습니다
            </h3>
            <p className="text-gray-600">
              이 카테고리에는 아직 상품이 등록되지 않았습니다.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
