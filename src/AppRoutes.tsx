import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider, UserContext } from "./contexts/UserContext";
import { CartProvider, CartContext } from "./contexts/CartContext";
import { useContext } from "react";
import React from "react";

const AppRoutes = () => {
  interface iPrivateProps {
    children: React.ReactNode;
  }

  const Private = ({ children }: iPrivateProps) => {
    const { authenticated } = useContext(UserContext);

    if (!authenticated) {
      return <Navigate to="/" />;
    }

    return <>{children}</>;
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/homepage"
            element={
              <Private>
                <CartProvider>
                  <Home />
                </CartProvider>
              </Private>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
