import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Heart, ShoppingBag, Minus, Plus, ChevronDown, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import productHero from "@/assets/product-hero.jpg";
import productHero1 from "@/assets/product-hero1.jpg";
import productHero2 from "@/assets/product-hero2.jpg";
import header from "@/assets/8fda66fed2981eee6fd686ea590da5dff43f7b58.jpg";
import similar1 from "@/assets/similar-1.jpg";
import similar2 from "@/assets/similar-2.jpg";
import similar3 from "@/assets/similar-3.jpg";
import similar4 from "@/assets/similar-4.jpg";

const COLORS = [
  { name: "Red", color: "bg-red-500" },
  { name: "Beige", color: "bg-amber-200" },
  { name: "Blue", color: "bg-blue-400", selected: true },
  { name: "Navy", color: "bg-blue-800" },
  { name: "Charcoal", color: "bg-gray-700" },
];

const REVIEWS = [
  { name: "Alex Daewn", rating: 4, time: "4 months ago", text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed" },
  { name: "Alex Daewn", rating: 4, time: "4 months ago", text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed" },
  { name: "Alex Daewn", rating: 5, time: "4 months ago", text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed" },
  { name: "Alex Daewn", rating: 4, time: "4 months ago", text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed" },
];

const SIMILAR = [
  { img: similar1, category: "Dresses", rating: 4.5, reviews: 1390, title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ...", price: "AED 900", oldPrice: null, discount: null, colors: 3 },
  { img: similar2, category: "Dresses", rating: 4.5, reviews: 1390, title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ...", price: "AED 900", oldPrice: "AED 1000", discount: "20% OFF", colors: 3 },
  { img: similar3, category: "Dresses", rating: 4.5, reviews: 1390, title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ...", price: "AED 900", oldPrice: null, discount: null, colors: 2 },
  { img: similar4, category: "Dresses", rating: 4.5, reviews: 1210, title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ...", price: "AED 900", oldPrice: "AED 1200", discount: "25% OFF", colors: 3 },
];

const RATINGS_DATA = [
  { stars: 5, percent: 67 },
  { stars: 4, percent: 15 },
  { stars: 3, percent: 6 },
  { stars: 2, percent: 3 },
  { stars: 1, percent: 9 },
];

const StarRating = ({ rating, size = 16 }: { rating: number; size?: number }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => (
      <Star key={s} className={s <= rating ? "fill-primary text-primary" : "text-border"} style={{ width: size, height: size }} />
    ))}
  </div>
);

const Index = () => {
  const [selectedColor, setSelectedColor] = useState(1); // Default to Blue/Light Blue
  const [quantity, setQuantity] = useState(1);
  const [imgIdx, setImgIdx] = useState(0);
  // Using the requested hero images and some placeholders for the gallery
  const images = [productHero1, productHero2, productHero, productHero, productHero];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <div className="relative w-full h-[180px] md:h-[250px] bg-gray-50 overflow-hidden flex items-center justify-center">

        {/* Background Pattern */}
        <img
          src={header}
          alt="Background Pattern"
          className="absolute inset-0 w-full h-full object-cover opacity-5"
        />

        {/* Shadow Text */}
        <h1 
          className="absolute text-[40px] sm:text-[60px] md:text-[80px] font-bold text-transparent select-none pointer-events-none whitespace-nowrap uppercase tracking-wider"
          style={{ WebkitTextStroke: '1px #E5E7EB' }}
        >
          Product Details
        </h1>

        {/* Main Title */}
        <h2 className="relative text-2xl md:text-3xl font-semibold text-foreground">
          Product Details
        </h2>

      </div>


      {/* Breadcrumb */}
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-sm bg-muted/40 px-6 py-4 rounded-xl w-full">
          <span className="font-semibold text-foreground hover:text-primary cursor-pointer transition-colors">Home</span>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span className="font-semibold text-foreground hover:text-primary cursor-pointer transition-colors">Our Category</span>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground font-normal">Product Details</span>
        </div>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery - Left Side */}
          <div className="space-y-4">
            <div className="relative bg-muted/20 rounded-3xl overflow-hidden aspect-[4/5] group">
              {/* Progress Indicators */}
              <div className="absolute top-4 left-0 right-0 flex justify-center gap-2 z-10 px-4">
                {images.slice(0, 3).map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full transition-colors ${i === imgIdx ? 'bg-primary' : 'bg-white/50'}`}
                  />
                ))}
              </div>

              <img
                src={images[imgIdx]}
                alt="Product View"
                className="w-full h-full object-cover"
              />

              {/* Navigation Arrows */}
              <button
                onClick={() => setImgIdx((p) => Math.max(0, p - 1))}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 text-white flex items-center justify-center hover:bg-black/40 transition-colors"
                disabled={imgIdx === 0}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => setImgIdx((p) => Math.min(images.length - 1, p + 1))}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/80 text-white flex items-center justify-center hover:bg-primary transition-colors"
                disabled={imgIdx === images.length - 1}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {images.slice(0, 3).map((img, i) => (
                <button
                  key={i}
                  onClick={() => setImgIdx(i)}
                  className={`relative aspect-square rounded-2xl overflow-hidden border-0 ${imgIdx === i ? "ring-2 ring-primary ring-offset-2" : ""}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-foreground/90 flex items-center justify-center text-background font-bold text-xl cursor-pointer hover:bg-foreground">
                +2
              </div>
            </div>
          </div>

          {/* Product Info - Right Side */}
          <div className="space-y-8">
            {/* Header: Badge & Actions */}
            <div className="flex items-center justify-between">
              <span className="px-4 py-1.5 rounded-full border border-border text-sm font-medium text-muted-foreground">
                T-Shirt
              </span>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-muted text-muted-foreground transition-colors">
                  <ShoppingBag className="h-5 w-5" />
                </button>
                <button className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-muted text-muted-foreground transition-colors">
                  <Heart className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Title & Price */}
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-foreground leading-tight">
                J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue
              </h1>

              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-2xl font-bold text-foreground">$300.00</span>
                  <span className="text-lg text-muted-foreground line-through">$360.00</span>
                </div>
                <p className="text-xs text-muted-foreground">This price is exclusive of taxes.</p>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit , consectetuer adipiscing elit, sed diam nonummy lorem ipsum dolor sit amet, diam nonummy
                Lorem ipsum dolor sit amet, diam nonummy
              </p>
            </div>

            {/* Selectors */}
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-foreground mb-2 block">Type</label>
                <div className="relative w-[300px]">
                  <select className="w-full h-12 rounded-xl border border-input bg-background px-4 text-sm appearance-none focus:ring-1 focus:ring-primary outline-none">
                    <option>Cotton</option>
                    <option>Velvet</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-foreground mb-2 block">Size</label>
                <div className="relative w-[300px]">
                  <select className="w-full h-12 rounded-xl border border-input bg-background px-4 text-sm appearance-none focus:ring-1 focus:ring-primary outline-none">
                    <option>2XI</option>
                    <option>XL</option>
                    <option>L</option>
                    <option>M</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Colors */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Colors</h4>
              <div className="flex gap-4">
                {[
                  { name: "Red", class: "bg-red-600" },
                  { name: "Blue", class: "bg-blue-200" }, // Selected in design
                  { name: "Gold", class: "bg-[#8B8000]" },
                  { name: "Light Blue", class: "bg-blue-500" },
                  { name: "Grey", class: "bg-gray-600" }
                ].map((c, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <button
                      onClick={() => setSelectedColor(i)}
                      className={`w-10 h-10 rounded-full ${c.class} ${selectedColor === i ? "ring-2 ring-offset-2 ring-primary" : ""}`}
                      title={c.name}
                    />
                    {selectedColor === i && <span className="text-[10px] text-muted-foreground">{c.name}</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity & Cart */}
            <div className="pt-4 space-y-4">
              <span className="text-sm text-foreground font-medium">Quantity <span className="text-muted-foreground font-normal">($300.00 for Piece)</span></span>

              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 bg-muted/30 rounded-lg p-1">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 flex items-center justify-center bg-white rounded-md shadow-sm hover:bg-gray-50 text-foreground">
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center font-semibold text-lg">{String(quantity).padStart(2, "0")}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 flex items-center justify-center bg-white rounded-md shadow-sm hover:bg-gray-50 text-foreground">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <div className="text-xl font-bold text-foreground">
                  ${(300 * quantity).toFixed(2)}
                </div>

                <Button className="flex-1 h-12 bg-[#BE968E] hover:bg-[#967259] text-white rounded-xl text-base font-semibold shadow-none">
                  Add To Cart <ShoppingBag className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rating & Reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-lg md:text-xl font-serif font-bold text-foreground mb-4 md:mb-6 border-b border-foreground pb-1 inline-block">
          Rating & Reviews
        </h2>

        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-between mb-4">
          {/* Rating Number */}
          <div className="flex items-end gap-1">
            <span className="text-5xl md:text-6xl font-bold text-foreground leading-none">4,5</span>
            <span className="text-xl md:text-2xl text-muted-foreground mb-1">/5</span>
          </div>

          {/* Bars */}
          <div className="flex-1 space-y-2 max-w-xs md:max-w-sm">
            {RATINGS_DATA.map((r) => (
              <div key={r.stars} className="flex items-center gap-2">
                <Star className="h-4 w-4 text-primary fill-primary" />
                <span className="text-sm w-3">{r.stars}</span>
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: `${r.percent}%` }}
                  />
                </div>
                <span className="text-sm text-muted-foreground w-10 text-right">%{r.percent}</span>
              </div>
            ))}
          </div>

          {/* Total Reviews */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-sm text-muted-foreground">Total Reviews</p>
            <p className="text-3xl md:text-4xl font-bold text-foreground">3.0K</p>
            <Button className="mt-2 md:mt-3 bg-primary text-primary-foreground hover:bg-copper-dark gap-1 md:gap-2 px-3 py-1.5 text-sm md:text-base">
              Add Comment <MessageSquare className="h-4 w-4" />
            </Button>
          </div>
        </div>


        {/* Review List */}
        <div className="space-y-6">
          {REVIEWS.map((review, i) => (
            <div key={i} className="border-b border-border pb-6 last:border-0">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-foreground">{review.name}</span>
                  <StarRating rating={review.rating} size={14} />
                </div>
                <span className="text-sm text-muted-foreground">{review.time}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <Button variant="outline" className="border-border text-[#BE968E]">
            View More Comments
          </Button>
        </div>
      </section>

      {/* Similar Items */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Similar Items</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SIMILAR.map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative bg-muted rounded-lg overflow-hidden aspect-square mb-3">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                {item.discount && (
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs">{item.discount}</Badge>
                )}
                <div className="absolute top-3 right-3 flex gap-1.5">
                  <button className="w-8 h-8 rounded-full bg-card/80 flex items-center justify-center">
                    <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-card/80 flex items-center justify-center">
                    <Heart className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{item.category}</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    <span className="text-xs text-muted-foreground">{item.rating} ({item.reviews})</span>
                  </div>
                </div>
                <p className="text-sm text-foreground font-medium line-clamp-2">{item.title}</p>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-foreground">{item.price}</span>
                  {item.oldPrice && <span className="text-xs text-muted-foreground line-through">{item.oldPrice}</span>}
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 rounded-full bg-foreground" />
                  <div className="w-4 h-4 rounded-full bg-copper" />
                  <span className="text-xs text-muted-foreground">+{item.colors}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-8">
          <button className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center hover:opacity-80">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-copper-dark">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
