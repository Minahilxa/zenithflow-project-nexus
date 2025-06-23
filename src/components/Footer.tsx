
import { Link } from "react-router-dom";
import { Zap, MapPin, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zenith-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white/10 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">ZenithFlow</span>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Project Clarity from Ground to Sky. Build, manage, and deliver projects at scale 
              with Gulf-ready workflows, stunning visuals, and AI-assisted insights.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-white/80">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Doha | Dubai | Riyadh</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Mail className="h-4 w-4" />
                <span className="text-sm">hello@zenithflow.io</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <MessageCircle className="h-4 w-4" />
                <span className="text-sm">WhatsApp: +974-XXXX-XXXX</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-white/80 hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-white/80 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/industries" className="text-white/80 hover:text-white transition-colors">Industries</Link></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">API</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-white/80 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2024 ZenithFlow. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Terms</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Privacy</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
