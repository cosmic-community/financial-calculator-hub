import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Calculator, 
  TrendingUp, 
  PieChart, 
  Target, 
  Wallet,
  BarChart3,
  ChevronRight,
  Sparkles
} from 'lucide-react'

interface CalculatorType {
  id: string
  title: string
  icon: React.ReactNode
  description: string
  color: string
}

const calculators: CalculatorType[] = [
  {
    id: 'sip',
    title: 'SIP Calculator',
    icon: <Calculator className="w-6 h-6" />,
    description: 'Calculate your SIP returns',
    color: 'from-blue-500 to-purple-600'
  },
  {
    id: 'lumpsum',
    title: 'Lumpsum Calculator',
    icon: <Wallet className="w-6 h-6" />,
    description: 'Plan your one-time investment',
    color: 'from-green-500 to-teal-600'
  },
  {
    id: 'swp',
    title: 'SWP Calculator',
    icon: <TrendingUp className="w-6 h-6" />,
    description: 'Systematic withdrawal planning',
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 'mf',
    title: 'MF Calculator',
    icon: <PieChart className="w-6 h-6" />,
    description: 'Mutual fund return estimator',
    color: 'from-pink-500 to-rose-600'
  },
  {
    id: 'goal',
    title: 'Goal Planning',
    icon: <Target className="w-6 h-6" />,
    description: 'Achieve your financial goals',
    color: 'from-indigo-500 to-blue-600'
  },
  {
    id: 'comparison',
    title: 'Fund Comparison',
    icon: <BarChart3 className="w-6 h-6" />,
    description: 'Compare mutual funds',
    color: 'from-cyan-500 to-blue-600'
  }
]

function App() {
  const [selectedDesign, setSelectedDesign] = useState<number>(1)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Design Selector */}
      <div className="fixed top-4 right-4 z-50 bg-white shadow-lg rounded-lg p-4">
        <h3 className="text-sm font-semibold mb-2 text-gray-700">Select Design:</h3>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              onClick={() => setSelectedDesign(num)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                selectedDesign === num
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      {/* Design 1: Gradient Glassmorphism */}
      {selectedDesign === 1 && <Design1 calculators={calculators} />}
      
      {/* Design 2: Minimalist Grid */}
      {selectedDesign === 2 && <Design2 calculators={calculators} />}
      
      {/* Design 3: Bold Modern 3D */}
      {selectedDesign === 3 && <Design3 calculators={calculators} />}
      
      {/* Design 4: Corporate Professional */}
      {selectedDesign === 4 && <Design4 calculators={calculators} />}
      
      {/* Design 5: Contemporary Gradient Mesh */}
      {selectedDesign === 5 && <Design5 calculators={calculators} />}
    </div>
  )
}

// Design 1: Gradient Glassmorphism with Floating Animation
function Design1({ calculators }: { calculators: CalculatorType[] }) {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-purple-600" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
              Financial Calculators
            </h1>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Make informed investment decisions with our comprehensive suite of financial calculation tools
          </p>
        </motion.div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {calculators.map((calc, index) => (
            <motion.div
              key={calc.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative h-full backdrop-blur-xl bg-white/40 border border-white/60 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${calc.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`} />
                
                {/* Icon Container */}
                <div className={`relative w-16 h-16 mb-6 bg-gradient-to-br ${calc.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  {calc.icon}
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                    {calc.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {calc.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                    Calculate Now
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Design 2: Minimalist Grid with Clean Typography
function Design2({ calculators }: { calculators: CalculatorType[] }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <h1 className="text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Financial Calculators
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Precision tools for your investment planning and wealth management journey
          </p>
          <div className="mt-6 flex items-center gap-2">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" />
            <div className="h-1 w-12 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full" />
            <div className="h-1 w-8 bg-blue-200 rounded-full" />
          </div>
        </motion.div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {calculators.map((calc, index) => (
            <motion.div
              key={calc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="relative h-full bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-300">
                {/* Small Badge */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Icon */}
                <div className="w-14 h-14 mb-6 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600 transition-all duration-300">
                  {calc.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {calc.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {calc.description}
                </p>
                <div className="flex items-center text-sm font-medium text-blue-600 group-hover:gap-1 transition-all">
                  Start Calculating
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Design 3: Bold Modern with 3D Effect
function Design3({ calculators }: { calculators: CalculatorType[] }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4 px-6 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium"
          >
            ✨ Premium Financial Tools
          </motion.div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Smart Calculators
            </span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Powerful tools to optimize your investment strategy and maximize returns
          </p>
        </motion.div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {calculators.map((calc, index) => (
            <motion.div
              key={calc.id}
              initial={{ opacity: 0, rotateY: -20 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="group cursor-pointer perspective-1000"
            >
              <div className="relative h-full bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/30 rounded-3xl p-8 shadow-2xl group-hover:shadow-purple-500/20 transition-all duration-500"
                   style={{ transform: 'translateZ(0)' }}>
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${calc.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500`} />
                
                {/* Icon Container with 3D Effect */}
                <div className={`relative w-20 h-20 mb-8 bg-gradient-to-br ${calc.color} rounded-2xl flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                     style={{ transformStyle: 'preserve-3d' }}>
                  <div className="transform group-hover:translateZ(20px)">
                    {calc.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {calc.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {calc.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-400 font-semibold group-hover:text-purple-300 transition-colors">
                      Launch Tool
                    </span>
                    <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:bg-purple-500/40 transition-colors">
                      <ChevronRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Design 4: Corporate Professional
function Design4({ calculators }: { calculators: CalculatorType[] }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header with Professional Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">
                    Financial Planning Tools
                  </h1>
                  <p className="text-blue-600 font-medium">Investment Calculator Suite</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
                Professional-grade calculators designed to help you make data-driven investment decisions and achieve your financial objectives with confidence.
              </p>
            </div>
          </div>
          
          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 p-6 bg-blue-50 rounded-xl border border-blue-100">
            <div>
              <div className="text-2xl font-bold text-blue-600">6+</div>
              <div className="text-sm text-gray-600">Calculator Types</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">100%</div>
              <div className="text-sm text-gray-600">Accurate Results</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">Free</div>
              <div className="text-sm text-gray-600">To Use</div>
            </div>
          </div>
        </motion.div>

        {/* Calculator Grid - Structured Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {calculators.map((calc, index) => (
              <motion.div
                key={calc.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="group cursor-pointer"
              >
                <div className="h-full bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all duration-300">
                  {/* Number Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs font-bold text-gray-400">
                      0{index + 1}
                    </div>
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      {calc.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {calc.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {calc.description}
                  </p>
                  
                  {/* Action */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                      Open Calculator
                    </span>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Design 5: Contemporary Gradient Mesh
function Design5({ calculators }: { calculators: CalculatorType[] }) {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, rgba(168, 85, 247, 0.4) 0%, transparent 50%)
            `,
            backgroundSize: '200% 200%',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full shadow-lg"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Premium Financial Suite
            </span>
          </motion.div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Investment
            </span>
            <br />
            <span className="text-gray-900">Calculators</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Empower your financial decisions with our suite of intelligent calculation tools
          </p>
        </motion.div>

        {/* Calculator Grid with Glass Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {calculators.map((calc, index) => (
            <motion.div
              key={calc.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="group cursor-pointer"
            >
              <div className="relative h-full backdrop-blur-2xl bg-white/70 border border-white/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 -translate-x-full"
                  animate={{
                    translateX: ['100%', '-100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 5,
                    ease: "linear"
                  }}
                >
                  <div className={`h-full w-1/2 bg-gradient-to-r ${calc.color} opacity-20 blur-xl`} />
                </motion.div>

                {/* Icon with Gradient Border */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${calc.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-6`}>
                    {calc.icon}
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${calc.color} rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity`} />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                    {calc.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {calc.description}
                  </p>
                  
                  {/* CTA Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200/50">
                    <span className="text-sm font-semibold text-purple-600 group-hover:text-purple-700">
                      Get Started
                    </span>
                    <div className={`w-10 h-10 bg-gradient-to-br ${calc.color} rounded-full flex items-center justify-center text-white shadow-md group-hover:shadow-lg transition-all`}>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-4">Need help choosing the right calculator?</p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Talk to an Expert
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default App