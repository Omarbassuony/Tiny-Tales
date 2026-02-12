import { ShoppingBag, Facebook, Twitter, Instagram, Linkedin, MessageCircle, Send as SendIcon, MapPin, Phone, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import header from "@/assets/8fda66fed2981eee6fd686ea590da5dff43f7b58.jpg";
import logo from "@/assets/Group.png";

const Footer = () => {
  return (
    <footer className="relative bg-[#4A4036] text-white overflow-hidden">
      {/* Background Image Overlay */}
      {/* <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img src={header} alt="" className="w-full h-full object-cover grayscale" />
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

          {/* Brand & Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              {/* <div className="relative">
                <ShoppingBag className="h-8 w-8 text-white" />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
              </div> */}
              <div className="flex flex-col">
                {/* <span className="font-serif font-bold text-xl leading-none">TinyTales</span> */}
                <img src={logo} alt="logo" className="h-12 w-12 object-cover" />
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
              Ipsum in eos qui consequatur ab cum maxime. Soluta dolor quae ipsum in eos qui consequatur ab. Soluta dolor quae ipsum in eos quconsequatur ab cum maxime. Soluta dolor quae
            </p>
          </div>

          {/* Contact Us (Mobile Optimization: often shown prominently) or Let Us Help */}
          {/* For Desktop/Tablet matching the first image: Let Us Help | Policies | Send Email */}

          {/* Let Us Help */}
          <div>
            <h4 className="font-bold text-lg mb-6">Let Us Help</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="hover:text-white transition-colors cursor-pointer">My Account</li>
              <li className="hover:text-white transition-colors cursor-pointer">FAQs</li>
              <li className="hover:text-white transition-colors cursor-pointer">Categories</li>
              <li className="hover:text-white transition-colors cursor-pointer">All Products</li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-bold text-lg mb-6">Policies</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="hover:text-white transition-colors cursor-pointer">Refund Policy</li>
              <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-white transition-colors cursor-pointer">Cancellation Policy</li>
              <li className="hover:text-white transition-colors cursor-pointer">Terms and Conditions</li>
              <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* Send Email & Follow Us */}
          <div className="space-y-8">
            <div>
              <h4 className="font-bold text-lg mb-6">Send Email</h4>
              <div className="relative bg-white rounded-lg p-1 flex items-center">
                <Input
                  placeholder="Email address"
                  className="border-0 bg-transparent text-gray-800 placeholder:text-gray-400 focus-visible:ring-0 h-11"
                />
                <Button className="bg-[#BE968E] hover:bg-[#A68078] text-white px-6 h-10 rounded-md">
                  Send
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <Facebook className="h-5 w-5 text-white hover:text-[#BE968E] cursor-pointer transition-colors" />
                <Twitter className="h-5 w-5 text-white hover:text-[#BE968E] cursor-pointer transition-colors" />
                <Instagram className="h-5 w-5 text-white hover:text-[#BE968E] cursor-pointer transition-colors" />
                <Linkedin className="h-5 w-5 text-white hover:text-[#BE968E] cursor-pointer transition-colors" />
                <MessageCircle className="h-5 w-5 text-white hover:text-[#BE968E] cursor-pointer transition-colors" />
                <SendIcon className="h-5 w-5 text-white hover:text-[#BE968E] cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Additional Contact Info for Mobile/Tablet context if space allows or requested */}
            <div className="pt-4 lg:hidden space-y-3 border-t border-white/10 mt-8">
              <h4 className="font-bold text-lg mb-2">Contact Us</h4>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Phone className="h-4 w-4" />
                <span>+87 01928491</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Mail className="h-4 w-4" />
                <span>Named@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>381, cairo, egypt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
