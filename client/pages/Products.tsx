import { Link, useSearchParams } from "react-router-dom";
import { ShoppingBag, Filter } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  color: string;
  image: string;
}

const allProducts: Product[] = [
  // Hoodies
  { id: 1, name: "Classic College Hoodie", category: "hoodies", price: 49.99, color: "blue", image: "bg-gradient-to-br from-blue-500 to-blue-600" },
  { id: 3, name: "Athletic Hoodie", category: "hoodies", price: 54.99, color: "purple", image: "bg-gradient-to-br from-purple-500 to-purple-600" },
  { id: 6, name: "Embroidered Hoodie", category: "hoodies", price: 59.99, color: "pink", image: "bg-gradient-to-br from-pink-500 to-pink-600" },
  { id: 7, name: "Oversized Hoodie", category: "hoodies", price: 54.99, color: "gray", image: "bg-gradient-to-br from-gray-500 to-gray-600" },
  { id: 8, name: "Fitted Campus Hoodie", category: "hoodies", price: 49.99, color: "navy", image: "bg-gradient-to-br from-blue-900 to-blue-800" },
  { id: 9, name: "Premium Fleece Hoodie", category: "hoodies", price: 64.99, color: "teal", image: "bg-gradient-to-br from-teal-500 to-teal-600" },

  // T-Shirts
  { id: 2, name: "Premium T-Shirt", category: "tshirts", price: 24.99, color: "orange", image: "bg-gradient-to-br from-orange-400 to-orange-500" },
  { id: 5, name: "Vintage T-Shirt", category: "tshirts", price: 29.99, color: "green", image: "bg-gradient-to-br from-green-500 to-green-600" },
  { id: 10, name: "Classic Crew Neck", category: "tshirts", price: 22.99, color: "white", image: "bg-gradient-to-br from-gray-100 to-gray-200" },
  { id: 11, name: "Graphic T-Shirt", category: "tshirts", price: 27.99, color: "black", image: "bg-gradient-to-br from-gray-900 to-gray-800" },
  { id: 12, name: "Oversized T-Shirt", category: "tshirts", price: 26.99, color: "brown", image: "bg-gradient-to-br from-amber-600 to-amber-700" },

  // Accessories
  { id: 4, name: "Campus Cap", category: "accessories", price: 19.99, color: "red", image: "bg-gradient-to-br from-red-500 to-red-600" },
  { id: 13, name: "Beanie Hat", category: "accessories", price: 17.99, color: "black", image: "bg-gradient-to-br from-gray-900 to-gray-800" },
  { id: 14, name: "College Socks Pack", category: "accessories", price: 14.99, color: "multi", image: "bg-gradient-to-br from-yellow-400 to-red-500" },
  { id: 15, name: "Campus Tote Bag", category: "accessories", price: 34.99, color: "navy", image: "bg-gradient-to-br from-blue-900 to-blue-800" },
  { id: 16, name: "Embroidered Belt", category: "accessories", price: 29.99, color: "brown", image: "bg-gradient-to-br from-amber-600 to-amber-700" },
  { id: 17, name: "Varsity Scarf", category: "accessories", price: 24.99, color: "multi", image: "bg-gradient-to-br from-red-500 to-blue-500" },
];

export default function Products() {
  const [searchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(true);
  const categoryFilter = searchParams.get("category") || "";

  const categories = ["hoodies", "tshirts", "accessories"];
  const filteredProducts = categoryFilter
    ? allProducts.filter(
        (p) => p.category === categoryFilter.toLowerCase()
      )
    : allProducts;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Shop Our Collection
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Browse through our carefully curated selection of college apparel and accessories.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="hidden lg:block w-64">
            <div className="sticky top-20 space-y-6">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filters
              </h3>

              {/* Category Filter */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Category</h4>
                <div className="space-y-3">
                  <Link
                    to="/products"
                    className={`block px-4 py-2 rounded-lg transition-colors ${
                      !categoryFilter
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    All Products
                  </Link>
                  {categories.map((cat) => (
                    <Link
                      key={cat}
                      to={`/products?category=${cat}`}
                      className={`block px-4 py-2 rounded-lg capitalize transition-colors ${
                        categoryFilter === cat
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Price Range</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    Under $25
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    $25 - $50
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    $50 - $75
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    Over $75
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden mb-6 flex items-center gap-2 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors"
            >
              <Filter className="w-5 h-5" />
              Toggle Filters
            </button>

            <div>
              <p className="text-muted-foreground mb-6">
                Showing {filteredProducts.length} products
                {categoryFilter && ` in ${categoryFilter}`}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Product Image */}
                    <div className={`w-full h-64 ${product.image} flex items-center justify-center relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                      <ShoppingBag className="w-16 h-16 text-white/80 group-hover:w-20 group-hover:h-20 transition-all" />
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-2 capitalize">
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
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
