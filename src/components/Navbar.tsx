import { Link } from "react-router-dom";
import { Home, ShoppingBag, Info, Phone, HelpCircle, Bell, Heart, User, Menu, X, ChevronDown, Grid2x2  } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/Layer_1.png";
import aboutIcon from "@/assets/interactive.jpg";
import homeIcon from "@/assets/home 04.png";
import categoryIcon from "@/assets/Vector.png";
import contactIcon from "@/assets/id card.png";
import FAQsIcon from "@/assets/chat-information.png";
import cartIcon from "@/assets/shopping bag.png";


const navItems = [
  { label: "Home", href: "/", icon: homeIcon },
  { label: "Our Category", href: "#", icon: categoryIcon },
  { label: "About Us", href: "#", icon: aboutIcon },
  { label: "Contact Us", href: "#", icon: contactIcon },
  { label: "FAQs", href: "#", icon: FAQsIcon },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">


        {/* Left Section */}
        <div className="flex items-center gap-6">

          {/* Logo - ALWAYS visible */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-8 w-8 object-cover" />
          </Link>

          {/* Links - Desktop only */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className="h-4 w-4 object-contain opacity-70 hover:opacity-100 transition"
                />
                {item.label}
              </Link>
            ))}
          </div>

        </div>


          {/* Right Icons */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
            <img
              src={cartIcon}
              alt="cartIcon"
              className="h-5 w-5 object-contain"
            />
              <Bell className="h-5 w-5  cursor-pointer" />
              <Heart className="h-5 w-5  cursor-pointer" />
              <span className="flex items-center gap-1 text-sm">EN <ChevronDown className="h-3 w-3" /></span>
              <Link to="/login"
                onClick={() => {
                  localStorage.removeItem("token");
                }}
              >
                <User className="h-5 w-5" />
              </Link>
            </div>
            <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card px-4 py-4 space-y-3 animate-fade-in">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground py-2"
              onClick={() => setMobileOpen(false)}
            >
              <img
                src={item.icon}
                alt={item.label}
                className="h-4 w-4 object-contain opacity-70 hover:opacity-100 transition"
              />
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 pt-3 border-t border-border">
            <img
              src={cartIcon}
              alt="cartIcon"
              className="h-5 w-5 object-contain"
            />
            <Bell className="h-5 w-5" />
            <Heart className="h-5 w-5" />
            <Link to="/login"><User className="h-5 w-5" /></Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
