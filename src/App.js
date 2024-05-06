import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import ProductDetail from "./Pages/ProductDetail";
import Dashboard from "./Pages/Dashboard";
import OrderDetail from "./Pages/OrderDetail";
import AppLayout from "./ui/AppLayout";
import { GlobalStyles } from "./Styles/GlobalStyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ShoppingProvider from "./contexts/ShoppingContext";
import { Toaster } from "react-hot-toast";
import Orders from "./Pages/Orders";
import Admin from "./Pages/Admin";
import ProtectedRoute from "./ui/ProtectedRoute";
function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });
  return (
    <ShoppingProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "38px" }}
          toasterOptions={{
            success: { duration: 3000 },
            error: { duration: 5000 },
          }}
        />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route
                path="/orders"
                element={
                  <ProtectedRoute>
                    <Orders />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="/orders/:orderId" element={<OrderDetail />} />
              <Route path="/login" element={<Admin />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ShoppingProvider>
  );
}

export default App;
