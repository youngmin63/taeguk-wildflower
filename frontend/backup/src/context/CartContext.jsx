import { createContext, useReducer, useEffect } from "react";

// 장바구니 상태 타입 정의
const CartContext = createContext();

// 액션 타입 정의
const CART_ACTIONS = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  UPDATE_QUANTITY: "UPDATE_QUANTITY",
  CLEAR_CART: "CLEAR_CART",
  LOAD_CART: "LOAD_CART",
  SHOW_TOAST: "SHOW_TOAST",
  HIDE_TOAST: "HIDE_TOAST",
};

// 리듀서 함수
const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM: {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // 이미 존재하는 상품이면 수량만 증가
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  quantity: item.quantity + (action.payload.quantity || 1),
                }
              : item
          ),
        };
      } else {
        // 새로운 상품이면 추가
        return {
          ...state,
          items: [
            ...state.items,
            { ...action.payload, quantity: action.payload.quantity || 1 },
          ],
        };
      }
    }

    case CART_ACTIONS.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case CART_ACTIONS.UPDATE_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item
        ),
      };

    case CART_ACTIONS.CLEAR_CART:
      return {
        ...state,
        items: [],
      };

    case CART_ACTIONS.LOAD_CART:
      return {
        ...state,
        items: action.payload,
      };

    case CART_ACTIONS.SHOW_TOAST:
      return {
        ...state,
        toast: {
          isVisible: true,
          message: action.payload.message,
          type: action.payload.type || "success",
        },
      };

    case CART_ACTIONS.HIDE_TOAST:
      return {
        ...state,
        toast: {
          ...state.toast,
          isVisible: false,
        },
      };

    default:
      return state;
  }
};

// 초기 상태
const initialState = {
  items: [],
  toast: {
    isVisible: false,
    message: "",
    type: "success",
  },
};

// CartProvider 컴포넌트
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // 로컬 스토리지에서 장바구니 데이터 로드
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: CART_ACTIONS.LOAD_CART, payload: parsedCart });
      } catch (error) {
        console.error("장바구니 데이터 로드 실패:", error);
      }
    }
  }, []);

  // 장바구니 상태가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.items));
  }, [state.items]);

  // 장바구니에 상품 추가
  const addToCart = (product, quantity = 1) => {
    dispatch({
      type: CART_ACTIONS.ADD_ITEM,
      payload: { ...product, quantity },
    });

    // 토스트 메시지 표시
    dispatch({
      type: CART_ACTIONS.SHOW_TOAST,
      payload: {
        message: `${product.name}이(가) 장바구니에 추가되었습니다.`,
        type: "success",
      },
    });
  };

  // 장바구니에서 상품 제거
  const removeFromCart = (productId) => {
    dispatch({
      type: CART_ACTIONS.REMOVE_ITEM,
      payload: productId,
    });
  };

  // 상품 수량 업데이트
  const updateQuantity = (productId, quantity) => {
    dispatch({
      type: CART_ACTIONS.UPDATE_QUANTITY,
      payload: { id: productId, quantity },
    });
  };

  // 장바구니 비우기
  const clearCart = () => {
    dispatch({ type: CART_ACTIONS.CLEAR_CART });
  };

  // 장바구니 아이템 수 계산
  const getCartItemCount = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  // 장바구니 총액 계산
  const getCartTotal = () => {
    return state.items.reduce((total, item) => {
      const price =
        typeof item.price === "string"
          ? parseInt(item.price.replace(/[^\d]/g, ""))
          : item.price;
      return total + price * item.quantity;
    }, 0);
  };

  // 상품이 장바구니에 있는지 확인
  const isInCart = (productId) => {
    return state.items.some((item) => item.id === productId);
  };

  // 토스트 숨기기
  const hideToast = () => {
    dispatch({ type: CART_ACTIONS.HIDE_TOAST });
  };

  const value = {
    items: state.items,
    toast: state.toast,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartItemCount,
    getCartTotal,
    isInCart,
    hideToast,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// CartContext만 export
export { CartContext };
