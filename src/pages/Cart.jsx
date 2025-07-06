import { useState } from "react";
import { Link } from "react-router-dom";
import OrderForm from "../components/OrderForm";
import { useCart } from "../context/CartContext.jsx";

export default function Cart() {
  const {
    items: cartItems,
    updateQuantity,
    removeFromCart,
    getCartTotal,
    clearCart,
  } = useCart();

  const [showOrderForm, setShowOrderForm] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  // 수량 증가
  const increaseQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      updateQuantity(id, item.quantity + 1);
    }
  };

  // 수량 감소
  const decreaseQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      updateQuantity(id, item.quantity - 1);
    }
  };

  // 상품 삭제
  const removeItem = (id) => {
    removeFromCart(id);
  };

  // 총 금액 계산
  const totalAmount = getCartTotal();

  // 주문 완료 처리
  const handleOrderComplete = () => {
    setOrderComplete(true);
    setShowOrderForm(false);
    clearCart(); // 장바구니 비우기
  };

  // 주문 완료 화면
  if (orderComplete) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            주문이 완료되었습니다!
          </h1>
          <p className="text-gray-600 mb-8">
            주문해주셔서 감사합니다. 빠른 시일 내에 배송해드리겠습니다.
          </p>
          <Link
            to="/"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  // 장바구니가 비어있는 경우
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🛒</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              장바구니가 비어있습니다
            </h1>
            <p className="text-gray-600 mb-8">
              원하는 상품을 장바구니에 담아보세요!
            </p>
            <Link
              to="/"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition"
            >
              쇼핑 계속하기
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* 페이지 제목 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">장바구니</h1>
          <p className="text-gray-600 mt-2">
            총 {cartItems.length}개의 상품이 담겨있습니다
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 장바구니 상품 목록 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  상품 목록
                </h2>
              </div>

              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-6 flex items-center gap-4">
                    {/* 상품 이미지 */}
                    <div className="flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                    </div>

                    {/* 상품 정보 */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-medium text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500">{item.category}</p>
                      <p className="text-lg font-semibold text-green-600 mt-1">
                        {item.price.toLocaleString()}원
                      </p>
                    </div>

                    {/* 수량 조절 */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="w-12 text-center font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition"
                      >
                        +
                      </button>
                    </div>

                    {/* 상품별 총액 */}
                    <div className="text-right">
                      <p className="text-lg font-semibold text-gray-900">
                        {(item.price * item.quantity).toLocaleString()}원
                      </p>
                    </div>

                    {/* 삭제 버튼 */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 transition p-2"
                      aria-label="상품 삭제"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 주문 요약 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm sticky top-24">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  주문 요약
                </h2>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>상품 금액</span>
                  <span>{totalAmount.toLocaleString()}원</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>배송비</span>
                  <span>{totalAmount >= 50000 ? "무료" : "3,000원"}</span>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-lg font-semibold text-gray-900">
                    <span>총 결제금액</span>
                    <span>
                      {totalAmount >= 50000
                        ? totalAmount.toLocaleString()
                        : (totalAmount + 3000).toLocaleString()}
                      원
                    </span>
                  </div>
                  {totalAmount < 50000 && (
                    <p className="text-sm text-gray-500 mt-1">
                      {((50000 - totalAmount) / 1000).toFixed(0)}천원 더
                      구매하면 무료배송!
                    </p>
                  )}
                </div>

                <button
                  onClick={() => setShowOrderForm(true)}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  주문하기
                </button>

                <Link
                  to="/"
                  className="block w-full text-center text-gray-600 py-3 rounded-xl border border-gray-300 hover:bg-gray-50 transition"
                >
                  쇼핑 계속하기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 주문 폼 모달 */}
      {showOrderForm && (
        <OrderForm
          cartItems={cartItems}
          totalAmount={totalAmount}
          onClose={() => setShowOrderForm(false)}
          onOrderComplete={handleOrderComplete}
        />
      )}
    </div>
  );
}
