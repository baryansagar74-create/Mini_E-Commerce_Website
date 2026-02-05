import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <div className="flex-1 flex items-center justify-center py-20">
        <div className="text-center px-4">
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-primary/20 mb-4">
              404
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Oops! Page not found
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
              Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary">
              Back to Home
            </Link>
            <Link to="/products" className="btn-outline">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
