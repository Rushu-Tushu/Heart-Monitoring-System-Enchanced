import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { Eye, EyeOff, LogIn, AlertCircle, Heart, Shield, ArrowLeft } from "lucide-react"

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const result = await login(email, password)
      if (result.success) {
        navigate("/monitor")
      } else {
        setError(result.error)
      }
    } catch (err) {
      setError("An unexpected error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-sky-100/40 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-100/40 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="relative min-h-screen flex items-center justify-center p-4 md:p-6">
        <div className="w-full max-w-md">
          {/* Back to Home Button */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-slate-600 hover:text-sky-600 font-medium mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Main Card */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl border border-slate-200/50 p-8 md:p-10 shadow-2xl shadow-slate-300/50">
            {/* Header with Logo */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl shadow-lg shadow-sky-500/30 mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                Welcome Back
              </h1>
              <p className="text-slate-600">
                Sign in to access your health dashboard
              </p>
            </div>

            {/* Error Alert */}
            {error && (
              <div className="mb-6 p-4 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-3 text-rose-800">
                <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Sign in failed</p>
                  <p className="text-sm text-rose-700 mt-0.5">{error}</p>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white border-2 border-slate-200 focus:border-sky-400 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-sky-500/10 transition-all"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-semibold text-slate-700">
                    Password
                  </label>
                  <button
                    type="button"
                    className="text-sm font-medium text-sky-600 hover:text-sky-700 transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full bg-white border-2 border-slate-200 focus:border-sky-400 rounded-xl px-4 py-3 pr-12 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-sky-500/10 transition-all"
                    placeholder="••••••••"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3.5 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-lg ${
                  isLoading
                    ? "bg-slate-300 text-slate-500 cursor-not-allowed shadow-slate-200/50"
                    : "bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/30 transform hover:scale-[1.02]"
                }`}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-slate-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Signing in...
                  </>
                ) : (
                  <>
                    <LogIn className="w-5 h-5" />
                    Sign In to Dashboard
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-slate-500 font-medium">New to PulseNecklace?</span>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 bg-white border-2 border-slate-200 hover:border-sky-300 text-slate-700 hover:text-sky-700 font-semibold rounded-xl transition-all hover:bg-slate-50"
              >
                Create an Account
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-slate-200">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <Shield className="w-5 h-5 text-emerald-600" />
                  </div>
                  <p className="text-xs text-slate-600 font-medium">HIPAA Compliant</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center">
                    <Heart className="w-5 h-5 text-sky-600" />
                  </div>
                  <p className="text-xs text-slate-600 font-medium">Medical Grade</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Text */}
          <p className="text-center text-sm text-slate-500 mt-8">
            By signing in, you agree to our{" "}
            <a href="#" className="text-sky-600 hover:text-sky-700 font-medium">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-sky-600 hover:text-sky-700 font-medium">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignIn