// React hooks for managing state and accessing context
import { useState, useContext } from "react"

// React Router helpers for navigation and links
import { Link, useNavigate } from "react-router-dom"

// AuthContext gives access to login function
import { AuthContext } from "../context/AuthContext"

// Icons used in UI
import { Eye, EyeOff, LogIn, AlertCircle, Heart, Shield, ArrowLeft } from "lucide-react"

const SignIn = () => {

  // Stores email entered by user
  const [email, setEmail] = useState("")

  // Stores password entered by user
  const [password, setPassword] = useState("")

  // Controls password visibility (show / hide)
  const [showPassword, setShowPassword] = useState(false)

  // Stores error message if login fails
  const [error, setError] = useState("")

  // Used to show loading state while API request is happening
  const [isLoading, setIsLoading] = useState(false)

  // Getting login function from AuthContext
  const { login } = useContext(AuthContext)

  // Used to redirect user after successful login
  const navigate = useNavigate()

  // Runs when form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault() // prevents page reload

    setError("")       // clear previous error
    setIsLoading(true) // start loading spinner

    try {
      // Calling backend login through AuthContext
      const result = await login(email, password)

      // If login successful, redirect to dashboard
      if (result.success) {
        navigate("/monitor")
      } 
      // If backend returns error
      else {
        setError(result.error)
      }

    } catch (err) {
      // For unexpected frontend errors
      console.error("Login error:", err)
      setError("An unexpected error occurred")
    } finally {
      // Stop loading in both success & failure
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen ...">

      {/* UI background shapes - only for design */}
      <div className="fixed ..."/>
      <div className="fixed ..."/>

      <div className="relative min-h-screen flex items-center justify-center">

        <div className="w-full max-w-md">

          {/* Navigate back to home */}
          <Link to="/" className="inline-flex ...">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Main Login Card */}
          <div className="bg-white ...">

            {/* Top logo + heading */}
            <div className="text-center mb-8">
              <div className="inline-flex ...">
                <Heart className="w-8 h-8 text-white" />
              </div>

              <h1>Welcome Back</h1>
              <p>Sign in to access your health dashboard</p>
            </div>

            {/* Shows error message if login fails */}
            {error && (
              <div className="mb-6 p-4 bg-rose-50 ...">
                <AlertCircle />
                <div>
                  <p>Sign in failed</p>
                  <p>{error}</p>
                </div>
              </div>
            )}

            {/* Login form */}
            <form onSubmit={handleSubmit}>

              {/* Email Input */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              {/* Password Input */}
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              {/* Toggle password visibility */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>

              {/* Submit Button */}
              <button type="submit" disabled={isLoading}>

                {/* Loading spinner */}
                {isLoading ? "Signing in..." : "Sign In to Dashboard"}

              </button>

            </form>

            {/* Redirect to signup */}
            <Link to="/signup">
              Create an Account
            </Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
