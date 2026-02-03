import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import FeatureCard from "../components/FeatureCard"
import { 
  ArrowRight, 
  Heart, 
  Activity, 
  Droplet, 
  Shield, 
  Smartphone, 
  Bell,
  LineChart,
  Clock,
  CheckCircle2
} from "lucide-react"

export default function LandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Subtle parallax effect for background
  const gradientStyle = {
    background: `radial-gradient(
      circle at ${mousePosition.x}px ${mousePosition.y}px,
      rgba(14, 165, 233, 0.08),
      rgba(34, 197, 94, 0.05) 40%,
      transparent 70%
    )`,
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/20 text-slate-900 overflow-hidden">
      {/* Subtle interactive background */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700" 
        style={gradientStyle} 
      />

      {/* Decorative background elements */}
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-sky-100/40 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-100/40 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <NavBar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100/80 backdrop-blur-sm rounded-full mb-6 border border-sky-200/50">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-sky-900">Medical-Grade Monitoring</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  Your Heart,
                </span>
                <br />
                <span className="text-slate-900">Always Monitored</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
                Experience the future of personal health monitoring. Our elegantly designed wearable necklace tracks your vital signs with medical-grade accuracy—keeping you informed, healthy, and empowered.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/monitor"
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  View Dashboard
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm border-2 border-slate-200 hover:border-sky-300 text-slate-700 hover:text-sky-700 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:bg-white"
                >
                  Learn More
                </a>
              </div>

              {/* Trust indicators */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-sky-600 mb-1">24/7</div>
                  <div className="text-xs md:text-sm text-slate-600">Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-1">99.9%</div>
                  <div className="text-xs md:text-sm text-slate-600">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">10K+</div>
                  <div className="text-xs md:text-sm text-slate-600">Users</div>
                </div>
              </div>
            </motion.div>

            {/* Right content - Product showcase */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <div className="relative">
                {/* Main product card */}
                <div className="relative bg-white rounded-3xl shadow-2xl shadow-slate-300/50 overflow-hidden border border-slate-200/50 p-8">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-sky-50 to-blue-50 mb-6">
                    <img
                      src="https://www.researchgate.net/publication/341909859/figure/fig3/AS:898708992442369@1591280329308/Smart-Heart-cardiac-monitor-necklace-by-Leah-Heiss-2016-in-collaboration-with-St.png"
                      alt="Heart Pulse Monitoring Necklace"
                      className="object-cover w-full h-full mix-blend-multiply"
                    />
                  </div>

                  {/* Live metrics display */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-5 border border-rose-100">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
                          <Heart className="w-5 h-5 text-rose-600" />
                        </div>
                        <span className="text-sm font-medium text-slate-600">Heart Rate</span>
                      </div>
                      <div className="text-3xl font-bold text-slate-900 mb-1">72</div>
                      <div className="text-xs text-slate-500">BPM · Normal</div>
                    </div>

                    <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-5 border border-sky-100">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center">
                          <Droplet className="w-5 h-5 text-sky-600" />
                        </div>
                        <span className="text-sm font-medium text-slate-600">SpO₂</span>
                      </div>
                      <div className="text-3xl font-bold text-slate-900 mb-1">98</div>
                      <div className="text-xs text-slate-500">% · Optimal</div>
                    </div>
                  </div>
                </div>

                {/* Floating status badge */}
                <div className="absolute -top-4 -right-4 bg-emerald-500 text-white px-4 py-2 rounded-full shadow-lg shadow-emerald-500/30 flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span className="text-sm font-semibold">Live</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-28 relative z-10">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100/80 backdrop-blur-sm rounded-full mb-6 border border-sky-200/50">
              <span className="text-sm font-medium text-sky-900">Comprehensive Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
              Everything You Need for <span className="bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">Better Health</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our advanced wearable technology combines clinical accuracy with everyday comfort, giving you complete control over your cardiovascular health.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <FeatureCard
              icon={<Heart className="w-8 h-8 text-rose-600" />}
              title="Continuous Heart Monitoring"
              description="Medical-grade PPG sensors track your heart rate 24/7 with 99.9% accuracy. Get instant alerts for irregular rhythms or concerning patterns."
              delay={0.1}
              accent="rose"
            />
            <FeatureCard
              icon={<Droplet className="w-8 h-8 text-sky-600" />}
              title="Blood Oxygen Tracking"
              description="Monitor your SpO₂ levels in real-time to ensure optimal oxygen saturation. Perfect for fitness, altitude, or general wellness."
              delay={0.2}
              accent="sky"
            />
            <FeatureCard
              icon={<LineChart className="w-8 h-8 text-emerald-600" />}
              title="AI-Powered Insights"
              description="Advanced algorithms analyze your health trends and provide personalized recommendations to improve your cardiovascular wellness."
              delay={0.3}
              accent="emerald"
            />
            <FeatureCard
              icon={<Bell className="w-8 h-8 text-amber-600" />}
              title="Smart Notifications"
              description="Receive intelligent alerts for abnormal readings, medication reminders, and wellness tips directly on your smartphone."
              delay={0.4}
              accent="amber"
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-violet-600" />}
              title="Medical-Grade Security"
              description="Your health data is encrypted end-to-end and HIPAA-compliant. We never share your information without your explicit consent."
              delay={0.5}
              accent="violet"
            />
            <FeatureCard
              icon={<Smartphone className="w-8 h-8 text-blue-600" />}
              title="Seamless Connectivity"
              description="Instant WiFi sync to your dashboard. Access your health data anywhere, anytime, across all your devices."
              delay={0.6}
              accent="blue"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 md:py-28 bg-white/60 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100/80 backdrop-blur-sm rounded-full mb-6 border border-sky-200/50">
              <span className="text-sm font-medium text-sky-900">Simple Setup</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
              How It <span className="bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our technology seamlessly bridges the gap between medical-grade hardware and user-friendly software.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative">
            {/* Connection line for desktop */}
            <div className="hidden lg:block absolute top-24 left-[16.67%] right-[16.67%] h-1 bg-gradient-to-r from-sky-200 via-blue-200 to-emerald-200" />

            {/* Step 1 */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-200/50 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-sky-50 to-transparent rounded-bl-3xl" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-sky-500/30">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div className="inline-block px-3 py-1 bg-sky-100 rounded-full text-sky-700 text-sm font-semibold mb-4">
                    Step 1
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">Wear the Device</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Put on the elegant, lightweight necklace featuring an ESP32 microcontroller and MAX30102 sensor. The medical-grade sensors continuously measure your heart rate and blood oxygen levels.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Comfortable all-day wear</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-200/50 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-3xl" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                    <Activity className="w-8 h-8 text-white" />
                  </div>
                  <div className="inline-block px-3 py-1 bg-blue-100 rounded-full text-blue-700 text-sm font-semibold mb-4">
                    Step 2
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">Secure Transmission</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    The ESP32 securely transmits your health data to our HIPAA-compliant cloud platform via encrypted WiFi connection. Data is synced in real-time for instant access.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Military-grade encryption</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-200/50 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-50 to-transparent rounded-bl-3xl" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30">
                    <LineChart className="w-8 h-8 text-white" />
                  </div>
                  <div className="inline-block px-3 py-1 bg-emerald-100 rounded-full text-emerald-700 text-sm font-semibold mb-4">
                    Step 3
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">Monitor & Analyze</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    View your comprehensive health dashboard with real-time metrics, historical trends, and AI-powered insights. Make informed decisions about your cardiovascular wellness.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Actionable insights daily</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 relative z-10">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-3xl md:rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl shadow-sky-500/30">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Why Choose PulseNecklace?
                </h2>
                <p className="text-lg md:text-xl text-sky-50 mb-8 leading-relaxed">
                  Join thousands of users who have taken control of their heart health with our innovative wearable technology.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Clinical-Grade Accuracy</h4>
                      <p className="text-sky-50/90">FDA-approved sensors deliver hospital-quality measurements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Elegant & Discreet</h4>
                      <p className="text-sky-50/90">Beautifully designed to complement any style</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Long Battery Life</h4>
                      <p className="text-sky-50/90">Up to 7 days of continuous monitoring on a single charge</p>
                    </div>
                  </div>
                </div>

                <Link
                  to="/monitor"
                  className="inline-flex items-center justify-center gap-2 bg-white text-sky-600 hover:bg-sky-50 font-semibold py-4 px-8 rounded-2xl shadow-lg shadow-black/20 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Start Monitoring Today
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Clock className="w-10 h-10 text-white mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-sky-50">Continuous Monitoring</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Shield className="w-10 h-10 text-white mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">100%</div>
                  <div className="text-sky-50">HIPAA Compliant</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Activity className="w-10 h-10 text-white mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                  <div className="text-sky-50">Accuracy Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Heart className="w-10 h-10 text-white mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">10K+</div>
                  <div className="text-sky-50">Happy Users</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 relative z-10">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100/80 backdrop-blur-sm rounded-full mb-6 border border-sky-200/50">
              <span className="text-sm font-medium text-sky-900">Get Started Today</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
              Ready to Take Control of Your <span className="bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">Heart Health</span>?
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Join thousands of people who trust PulseNecklace for accurate, real-time cardiovascular monitoring. Start your journey to better health today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/monitor"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 transform hover:scale-[1.02]"
              >
                Access Your Dashboard
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm border-2 border-slate-200 hover:border-sky-300 text-slate-700 hover:text-sky-700 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:bg-white"
              >
                Explore Features
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}