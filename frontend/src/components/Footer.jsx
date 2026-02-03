import { Link } from "react-router-dom"
import { Heart, Mail, Phone, MapPin, Instagram, Twitter, Facebook, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-8 relative overflow-hidden">
      {/* Decorative gradient background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-emerald-500" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-sky-500/30">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl">PulseNecklace</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Advanced wearable technology for continuous heart rate and blood oxygen monitoring. Your health, always at hand.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-gradient-to-br hover:from-sky-500 hover:to-blue-600 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-gradient-to-br hover:from-sky-500 hover:to-blue-600 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-gradient-to-br hover:from-sky-500 hover:to-blue-600 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-gradient-to-br hover:from-sky-500 hover:to-blue-600 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/" 
                  className="text-slate-400 hover:text-sky-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-sky-400 transition-all duration-200" />
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/monitor" 
                  className="text-slate-400 hover:text-sky-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-sky-400 transition-all duration-200" />
                  Dashboard
                </Link>
              </li>
              <li>
                <a 
                  href="#features" 
                  className="text-slate-400 hover:text-sky-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-sky-400 transition-all duration-200" />
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#how-it-works" 
                  className="text-slate-400 hover:text-sky-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-sky-400 transition-all duration-200" />
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Legal & Support</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="#" 
                  className="text-slate-400 hover:text-sky-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-sky-400 transition-all duration-200" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-slate-400 hover:text-sky-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-sky-400 transition-all duration-200" />
                  Terms of Service
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-slate-400 hover:text-sky-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-sky-400 transition-all duration-200" />
                  HIPAA Compliance
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-slate-400 hover:text-sky-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-sky-400 transition-all duration-200" />
                  Support Center
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 group hover:text-sky-400 transition-colors duration-200">
                <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-sky-500 group-hover:to-blue-600 transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-1">Email</div>
                  <a href="mailto:info@pulsenecklace.com" className="hover:underline">
                    info@pulsenecklace.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-400 group hover:text-sky-400 transition-colors duration-200">
                <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-sky-500 group-hover:to-blue-600 transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-1">Phone</div>
                  <a href="tel:+15551234567" className="hover:underline">
                    1520-123-4567
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-400 group hover:text-sky-400 transition-colors duration-200">
                <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-sky-500 group-hover:to-blue-600 transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-1">Address</div>
                  <address className="not-italic">
                    123 Health Tech Street<br />
                    Pune, Maharashtra
                  </address>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} PulseNecklace. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-slate-500 hover:text-sky-400 transition-colors duration-200">
                Accessibility
              </a>
              <a href="#" className="text-slate-500 hover:text-sky-400 transition-colors duration-200">
                Sitemap
              </a>
              <a href="#" className="text-slate-500 hover:text-sky-400 transition-colors duration-200">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>

        {/* Medical disclaimer */}
        <div className="mt-8 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
          <p className="text-xs text-slate-400 text-center leading-relaxed">
            <strong className="text-slate-300">Medical Disclaimer:</strong> PulseNecklace is designed for wellness monitoring and is not intended to diagnose, treat, cure, or prevent any disease. Always consult with a healthcare professional for medical advice.
          </p>
        </div>
      </div>
    </footer>
  )
}