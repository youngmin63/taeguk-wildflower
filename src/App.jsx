import Footer from "./layout/Footer.jsx";
import Header from "./layout/Header.jsx";
import AppRouter from "./AppRouter.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { useCart } from "./context/useCart.js";
import Toast from "./components/Toast.jsx";

function AppContent() {
  const { toast, hideToast } = useCart();

  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
