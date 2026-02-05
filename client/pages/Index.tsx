import { Link } from "react-router-dom";
import { ShoppingBag, Zap, Shield, Truck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  color: string;
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Classic College Hoodie",
    category: "Hoodies",
    price: 49.99,
    image: "bg-gradient-to-br from-blue-500 to-blue-600",
    color: "blue",
  },
  {
    id: 2,
    name: "Premium T-Shirt",
    category: "T-Shirts",
    price: 24.99,
    image: "bg-gradient-to-br from-orange-400 to-orange-500",
    color: "orange",
  },
  {
    id: 3,
    name: "Athletic Hoodie",
    category: "Hoodies",
    price: 54.99,
    image: "bg-gradient-to-br from-purple-500 to-purple-600",
    color: "purple",
  },
  {
    id: 4,
    name: "Campus Cap",
    category: "Accessories",
    price: 19.99,
    image: "bg-gradient-to-br from-red-500 to-red-600",
    color: "red",
  },
  {
    id: 5,
    name: "Vintage T-Shirt",
    category: "T-Shirts",
    price: 29.99,
    image: "bg-gradient-to-br from-green-500 to-green-600",
    color: "green",
  },
  {
    id: 6,
    name: "Embroidered Hoodie",
    category: "Hoodies",
    price: 59.99,
    image: "bg-gradient-to-br from-pink-500 to-pink-600",
    color: "pink",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight mb-4">
                  Express Your Campus Style
                </h1>
                <p className="text-xl text-muted-foreground">
                  Discover premium college hoodies, t-shirts, and accessories
                  designed for students like you. Show your school spirit with
                  style.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/products" className="btn-primary">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Shop Now
                </Link>
                <Link to="/contact" className="btn-outline">
                  Learn More
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="font-medium text-foreground">
                    Premium Quality
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Truck className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-medium text-foreground">
                    Fast Shipping
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="hidden md:block">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary animate-pulse" />
                <div className="absolute inset-4 bg-background rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <ShoppingBag className="w-20 h-20 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Hero Image Area</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">Featured Products</h2>
            <p className="section-subheading">
              Handpicked items that every student needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Product Image */}
                <div
                  className={`w-full h-64 ${product.image} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  <ShoppingBag className="w-16 h-16 text-white/80 group-hover:w-20 group-hover:h-20 transition-all" />
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-2">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      ${product.price.toFixed(2)}
                    </span>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="p-2 rounded-lg bg-secondary/20 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors"
                    >
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">Shop by Category</h2>
            <p className="section-subheading">
              Find exactly what you're looking for
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Hoodies", icon: "🎓", items: "12 items" },
              { name: "T-Shirts", icon: "👕", items: "18 items" },
              { name: "Accessories", icon: "🧢", items: "24 items" },
            ].map((category) => (
              <Link
                key={category.name}
                to={`/products?category=${category.name.toLowerCase()}`}
                className="bg-gradient-to-br from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10 rounded-xl p-8 text-center transition-all hover:-translate-y-1 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {category.name}
                </h3>
                <p className="text-muted-foreground">{category.items}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">Why ThreadHub?</h2>
            <p className="section-subheading">
              We're here to make your shopping experience amazing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Premium Quality",
                description: "High-quality materials that last",
              },
              {
                icon: Truck,
                title: "Fast Delivery",
                description: "Ships within 2-3 business days",
              },
              {
                icon: ShoppingBag,
                title: "Easy Returns",
                description: "30-day hassle-free return policy",
              },
              {
                icon: Zap,
                title: "Great Prices",
                description: "Student discounts available",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="text-center p-8 rounded-xl hover:bg-white/50 transition-colors"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Exclusive Offers
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Subscribe to our newsletter for student discounts and new arrivals
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:border-white focus:outline-none transition-colors"
            />
            <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
