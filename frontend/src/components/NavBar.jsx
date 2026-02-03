import { useState, useEffect, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Menu, X, Heart, LogIn, UserPlus, Activity } from "lucide-react"
import { AuthContext } from "../context/AuthContext"

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { isAuthenticated, currentUser, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogout = () => {
    logout()
    navigate("/signin")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-slate-200/50 border-b border-slate-200/50" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isScrolled 
                ? "bg-gradient-to-br from-sky-500 to-blue-600 shadow-lg shadow-sky-500/30" 
                : "bg-white/10 backdrop-blur-sm border border-white/20"
            }`}>
              <Heart className={`w-6 h-6 transition-colors duration-300 ${
                isScrolled ? "text-white" : "text-white"
              }`} />
            </div>
            <span className={`font-bold text-xl transition-colors duration-300 ${
              isScrolled ? "text-slate-900" : "text-white"
            }`}>
              PulseNecklace
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors duration-300 hover:text-sky-600 ${
                isScrolled ? "text-slate-700" : "text-white/90 hover:text-white"
              }`}
            >
              Home
            </Link>
            {isAuthenticated && (
              <Link 
                to="/monitor" 
                className={`font-medium transition-colors duration-300 hover:text-sky-600 flex items-center gap-2 ${
                  isScrolled ? "text-slate-700" : "text-white/90 hover:text-white"
                }`}
              >
                <Activity className="w-4 h-4" />
                Dashboard
              </Link>
            )}
            <a 
              href="#features" 
              className={`font-medium transition-colors duration-300 hover:text-sky-600 ${
                isScrolled ? "text-slate-700" : "text-white/90 hover:text-white"
              }`}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className={`font-medium transition-colors duration-300 hover:text-sky-600 ${
                isScrolled ? "text-slate-700" : "text-white/90 hover:text-white"
              }`}
            >
              How It Works
            </a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <span className={`font-medium ${isScrolled ? "text-slate-700" : "text-white/90"}`}>
                  {currentUser?.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold py-2.5 px-6 rounded-xl shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/signin"
                  className={`flex items-center gap-2 font-medium transition-colors duration-300 px-4 py-2.5 rounded-xl ${
                    isScrolled 
                      ? "text-slate-700 hover:text-sky-600 hover:bg-slate-100" 
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <LogIn className="w-4 h-4" />
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold py-2.5 px-6 rounded-xl shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 transform hover:scale-[1.02] flex items-center gap-2"
                >
                  <UserPlus className="w-4 h-4" />
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button 
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? "text-slate-900" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-slate-200/50 shadow-lg">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <Link
              to="/"
              className="text-slate-700 hover:text-sky-600 font-medium py-3 px-4 rounded-xl hover:bg-slate-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            {isAuthenticated && (
              <Link
                to="/monitor"
                className="text-slate-700 hover:text-sky-600 font-medium py-3 px-4 rounded-xl hover:bg-slate-50 transition-colors flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Activity className="w-4 h-4" />
                Dashboard
              </Link>
            )}
            <a
              href="#features"
              className="text-slate-700 hover:text-sky-600 font-medium py-3 px-4 rounded-xl hover:bg-slate-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-slate-700 hover:text-sky-600 font-medium py-3 px-4 rounded-xl hover:bg-slate-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            
            <div className="pt-4 border-t border-slate-200/50 space-y-3">
              {isAuthenticated ? (
                <>
                  <div className="text-slate-600 font-medium px-4 py-2">
                    Welcome, {currentUser?.name}
                  </div>
                  <button
                    onClick={() => {
                      handleLogout()
                      setIsMenuOpen(false)
                    }}
                    className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-sky-500/25"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/signin"
                    className="flex items-center justify-center gap-2 text-slate-700 hover:text-sky-600 font-medium py-3 px-4 rounded-xl hover:bg-slate-50 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <LogIn className="w-4 h-4" />
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-sky-500/25"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <UserPlus className="w-4 h-4" />
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
