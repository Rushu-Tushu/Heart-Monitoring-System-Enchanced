// React hooks for managing form data and context
import { useState, useContext } from "react"

// Used for routing (links + redirect after signup)
import { Link, useNavigate } from "react-router-dom"

// AuthContext gives register() function
import { AuthContext } from "../context/AuthContext"

// Icons used in UI
import { Eye, EyeOff, UserPlus, AlertCircle, Check, Heart, Shield, ArrowLeft, CheckCircle2, X } from "lucide-react"

const SignUp = () => {

  // Form input states
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  // Controls password visibility
  const [showPassword, setShowPassword] = useState(false)

  // Stores error message
  const [error, setError] = useState("")

  // Shows loading while API request runs
  const [isLoading, setIsLoading] = useState(false)

  // Getting register function from AuthContext
  const { register } = useContext(AuthContext)

  // Used to redirect after successful signup
  const navigate = useNavigate()

  // Password strength checks using regex
  const passwordRequirements = {
    minLength: password.length >= 8,
    hasUpper: /[A-Z]/.test(password),
    hasLower: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
  }

  // Checks if ALL password rules are satisfied
  const isPasswordStrong = Object.values(passwordRequirements).every(Boolean)

  // Checks if password and confirm password are same
  const passwordsMatch = password && confirmPassword && password === confirmPassword

  // Runs when signup form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault() // prevent page reload

    setError("")

    // Frontend validation before API call
    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (!isPasswordStrong) {
      setError("Please meet all password requirements")
      return
    }

    setIsLoading(true)

    try {
      // Calling backend register through AuthContext
      const result = await register(name, email, password)

      // If registration successful, go to dashboard
      if (result.success) {
        navigate("/monitor")
      } else {
        setError(result.error)
      }

    } catch (err) {
      setError("An unexpected error occurred. Please try again.", err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen ...">

      {/* Signup form */}
      <form onSubmit={handleSubmit}>

        {/* Name input */}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Email input */}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password input */}
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Show / hide password */}
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <EyeOff /> : <Eye />}
        </button>

        {/* Password strength indicators */}
        {password && (
          <div>
            {/* Shows green tick if requirement is met */}
            {passwordRequirements.minLength ? <CheckCircle2 /> : <X />}
            {passwordRequirements.hasUpper ? <CheckCircle2 /> : <X />}
            {passwordRequirements.hasLower ? <CheckCircle2 /> : <X />}
            {passwordRequirements.hasNumber ? <CheckCircle2 /> : <X />}
          </div>
        )}

        {/* Confirm password */}
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {/* Submit button disabled if password weak or mismatch */}
        <button
          type="submit"
          disabled={isLoading || !isPasswordStrong || !passwordsMatch}
        >
          {isLoading ? "Creating account..." : "Create Account"}
        </button>

      </form>
    </div>
  )
}

export default SignUp
