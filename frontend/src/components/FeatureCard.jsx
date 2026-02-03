import { motion } from "framer-motion"

export default function FeatureCard({ icon, title, description, delay = 0, accent = "sky" }) {
  // Define accent color classes for different feature types
  const accentColors = {
    rose: {
      iconBg: "bg-rose-100",
      iconText: "text-rose-600",
      borderHover: "hover:border-rose-200",
      shadowHover: "hover:shadow-rose-100/50"
    },
    sky: {
      iconBg: "bg-sky-100",
      iconText: "text-sky-600",
      borderHover: "hover:border-sky-200",
      shadowHover: "hover:shadow-sky-100/50"
    },
    emerald: {
      iconBg: "bg-emerald-100",
      iconText: "text-emerald-600",
      borderHover: "hover:border-emerald-200",
      shadowHover: "hover:shadow-emerald-100/50"
    },
    amber: {
      iconBg: "bg-amber-100",
      iconText: "text-amber-600",
      borderHover: "hover:border-amber-200",
      shadowHover: "hover:shadow-amber-100/50"
    },
    violet: {
      iconBg: "bg-violet-100",
      iconText: "text-violet-600",
      borderHover: "hover:border-violet-200",
      shadowHover: "hover:shadow-violet-100/50"
    },
    blue: {
      iconBg: "bg-blue-100",
      iconText: "text-blue-600",
      borderHover: "hover:border-blue-200",
      shadowHover: "hover:shadow-blue-100/50"
    }
  }

  const colors = accentColors[accent] || accentColors.sky

  return (
    <motion.div
      className={`bg-white rounded-2xl p-8 border border-slate-200/50 h-full shadow-md ${colors.shadowHover} ${colors.borderHover} transition-all duration-300 hover:shadow-xl group`}
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {/* Icon container with gradient background */}
      <div className={`mb-6 w-16 h-16 rounded-2xl ${colors.iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
        {icon}
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-bold mb-3 text-slate-900 leading-tight">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-slate-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}