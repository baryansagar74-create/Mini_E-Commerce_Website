import { Link, useParams } from "react-router-dom";
import { ShoppingBag, Heart, Share2, ChevronLeft, Star } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  description: string;
  sizes: string[];
  colors: string[];
  inStock: boolean;
}

const productDatabase: Record<number, Product> = {
  1: {
    id: 1,
    name: "Classic College Hoodie",
    category: "Hoodies",
    price: 49.99,
    image: "bg-gradient-to-br from-blue-500 to-blue-600",
    rating: 4.8,
    reviews: 234,
    description:
      "The perfect college hoodie featuring premium comfort and durability. Made from high-quality cotton blend fabric that keeps you warm and cozy. Perfect for late-night study sessions or casual campus walks.",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: ["Blue", "Black", "Navy", "Gray"],
    inStock: true,
  },
  2: {
    id: 2,
    name: "Premium T-Shirt",
    category: "T-Shirts",
    price: 24.99,
    image: "bg-gradient-to-br from-orange-400 to-orange-500",
    rating: 4.6,
    reviews: 156,
    description:
      "A versatile everyday t-shirt crafted from premium cotton. Available in multiple colors to match your personal style. Great for layering or wearing on its own.",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: ["Orange", "White", "Black", "Navy"],
    inStock: true,
  },
  3: {
    id: 3,
    name: "Athletic Hoodie",
    category: "Hoodies",
    price: 54.99,
    image: "bg-gradient-to-br from-purple-500 to-purple-600",
    rating: 4.9,
    reviews: 189,
    description:
      "Designed for active students. Features moisture-wicking technology and ergonomic fit. Perfect for workouts, sports, or just looking sporty on campus.",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: ["Purple", "Black", "Gray", "White"],
    inStock: true,
  },
};

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const productId = id ? parseInt(id) : 1;
  const product = productDatabase[productId];

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "");
  const [cartAdded, setCartAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Product Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              Sorry, we couldn't find that product.
            </p>
            <Link to="/products" className="btn-primary">
              Back to Products
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    setCartAdded(true);
    setTimeout(() => setCartAdded(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link
          to="/products"
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Products
        </Link>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div>
            <div
              className={`w-full h-96 md:h-[32rem] ${product.image} rounded-2xl flex items-center justify-center relative overflow-hidden shadow-lg`}
            >
              <ShoppingBag className="w-24 h-24 text-white/80" />

              {/* Stock Badge */}
              {product.inStock && (
                <div className="absolute top-6 right-6 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  In Stock
                </div>
              )}
            </div>

            {/* Image Gallery Thumbnails */}
            <div className="grid grid-cols-4 gap-4 mt-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`h-24 ${product.image} rounded-lg cursor-pointer hover:opacity-80 transition-opacity ${
                    i === 1 ? "ring-2 ring-primary" : ""
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            {/* Header */}
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                {product.category}
              </span>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-secondary text-secondary"
                          : "text-muted"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold text-primary">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-lg text-muted-foreground line-through">
                  ${(product.price * 1.2).toFixed(2)}
                </span>
              </div>
              <p className="text-sm text-green-600 font-semibold mt-2">
                Save ${((product.price * 0.2).toFixed(2))} (17% off)
              </p>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-lg mb-8">
              {product.description}
            </p>

            {/* Options */}
            <div className="space-y-6 mb-8">
              {/* Size Selection */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Size
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 rounded-lg font-semibold transition-all ${
                        selectedSize === size
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground hover:bg-muted/80"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Color: {selectedColor}
                </label>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-12 h-12 rounded-lg border-2 transition-all ${
                        selectedColor === color
                          ? "border-primary ring-2 ring-primary"
                          : "border-muted"
                      }`}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              {/* Quantity Selection */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 rounded-lg bg-muted text-foreground hover:bg-muted/80 transition-colors"
                  >
                    −
                  </button>
                  <span className="text-xl font-semibold text-foreground w-8 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 rounded-lg bg-muted text-foreground hover:bg-muted/80 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                className={`flex-1 btn-primary transition-all ${
                  cartAdded ? "bg-green-600" : ""
                }`}
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                {cartAdded ? "Added to Cart!" : "Add to Cart"}
              </button>
              <button className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Additional Info */}
            <div className="bg-muted/50 rounded-lg p-6 space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Free Shipping
                  </span>{" "}
                  on orders over $50
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Easy Returns
                  </span>{" "}
                  within 30 days
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Quality Guarantee
                  </span>{" "}
                  - Premium materials
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 pt-12 border-t border-border">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((relatedId) => {
              const relatedProduct = productDatabase[relatedId];
              if (relatedProduct && relatedProduct.id !== productId) {
                return (
                  <Link
                    key={relatedId}
                    to={`/product/${relatedId}`}
                    className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    <div className={`w-full h-64 ${relatedProduct.image} flex items-center justify-center`}>
                      <ShoppingBag className="w-16 h-16 text-white/80" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-primary font-semibold">
                        ${relatedProduct.price.toFixed(2)}
                      </p>
                    </div>
                  </Link>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
