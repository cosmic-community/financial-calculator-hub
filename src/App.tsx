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
  Sparkles,
  ArrowRight
} from 'lucide-react'

interface CalculatorType {
  id: string
  title: string
  icon: React.ReactNode
  description: string
  color: string
  image: string
}

const calculators: CalculatorType[] = [
  {
    id: 'sip',
    title: 'SIP Calculator',
    icon: <Calculator className="w-5 h-5" />,
    description: 'Calculate your SIP returns',
    color: 'from-blue-500 to-purple-600',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format,compress&fit=crop'
  },
  {
    id: 'lumpsum',
    title: 'Lumpsum Calculator',
    icon: <Wallet className="w-5 h-5" />,
    description: 'Plan your one-time investment',
    color: 'from-green-500 to-teal-600',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&auto=format,compress&fit=crop'
  },
  {
    id: 'swp',
    title: 'SWP Calculator',
    icon: <TrendingUp className="w-5 h-5" />,
    description: 'Systematic withdrawal planning',
    color: 'from-orange-500 to-red-600',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format,compress&fit=crop'
  },
  {
    id: 'mf',
    title: 'MF Calculator',
    icon: <PieChart className="w-5 h-5" />,
    description: 'Mutual fund return estimator',
    color: 'from-pink-500 to-rose-600',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format,compress&fit=crop'
  },
  {
    id: 'goal',
    title: 'Goal Planning',
    icon: <Target className="w-5 h-5" />,
    description: 'Achieve your financial goals',
    color: 'from-indigo-500 to-blue-600',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format,compress&fit=crop'
  },
  {
    id: 'comparison',
    title: 'Fund Comparison',
    icon: <BarChart3 className="w-5 h-5" />,
    description: 'Compare mutual funds',
    color: 'from-cyan-500 to-blue-600',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&auto=format,compress&fit=crop'
  }
]

function App() {
  const [selectedDesign, setSelectedDesign] = useState<number>(1)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Design Selector */}
      <div className="fixed top-4 right-4 z-50 bg-white shadow-lg rounded-lg p-3">
        <h3 className="text-xs font-semibold mb-2 text-gray-700">Design:</h3>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              onClick={() => setSelectedDesign(num)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
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

      {/* Design 1: Horizontal Split Cards */}
      {selectedDesign === 1 && <Design1 calculators={calculators} />}
      
      {/* Design 2: Vertical Compact List */}
      {selectedDesign === 2 && <Design2 calculators={calculators} />}
      
      {/* Design 3: Image Background Cards */}
      {selectedDesign === 3 && <Design3 calculators={calculators} />}
      
      {/* Design 4: Side-by-Side Grid */}
      {selectedDesign === 4 && <Design4 calculators={calculators} />}
      
      {/* Design 5: Asymmetric Layout */}
      {selectedDesign === 5 && <Design5 calculators={calculators} />}
    </div>
  )
}

// Design 1: Horizontal Split Cards - Image Left, Content Right
function Design1({ calculators }: { calculators: CalculatorType[] }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Financial Calculators</h1>
          <p className="text-gray-600">Smart tools for better investment decisions</p>
        </motion.div>

        {/* Calculator Cards */}
        <div className="space-y-4 max-w-5xl">
          {calculators.map((calc, index) => (
            <motion.div
              key={calc.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex">
                {/* Image Side */}
                <div className="w-48 flex-shrink-0 relative overflow-hidden">
                  <img 
                    src={calc.image} 
                    alt={calc.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${calc.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                </div>

                {/* Content Side */}
                <div className="flex-1 p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${calc.color} rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
                      {calc.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{calc.title}</h3>
                      <p className="text-sm text-gray-600">{calc.description}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Design 2: Vertical Compact List with Small Images
function Design2({ calculators }: { calculators: CalculatorType[] }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-3xl mb-10"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Investment Tools</h1>
          <p className="text-gray-600">Choose the right calculator for your needs</p>
        </motion.div>

        {/* Calculator List */}
        <div className="max-w-3xl space-y-3">
          {calculators.map((calc, index) => (
            <motion.div
              key={calc.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ x: 4 }}
              className="group cursor-pointer"
            >
              <div className="bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-xl p-4 transition-all duration-300 flex items-center gap-4">
                {/* Small Image */}
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={calc.image} 
                    alt={calc.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Icon Badge */}
                <div className={`w-10 h-10 bg-gradient-to-br ${calc.color} rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                  {calc.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-0.5">{calc.title}</h3>
                  <p className="text-sm text-gray-600 truncate">{calc.description}</p>
                </div>

                {/* Arrow */}
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Design 3: Image Background with Overlay
function Design3({ calculators }: { calculators: CalculatorType[] }) {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-10 text-center"
        >
          <h1 className="text-4xl font-bold text-white mb-2">Financial Calculators</h1>
          <p className="text-gray-400">Professional tools for smart investing</p>
        </motion.div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {calculators.map((calc, index) => (
            <motion.div
              key={calc.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                {/* Background Image */}
                <img 
                  src={calc.image} 
                  alt={calc.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent`} />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className={`w-12 h-12 bg-gradient-to-br ${calc.color} rounded-xl flex items-center justify-center text-white mb-3`}>
                    {calc.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{calc.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{calc.description}</p>
                  <div className="flex items-center text-white font-medium group-hover:gap-2 transition-all">
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

// Design 4: Side-by-Side Grid Layout
function Design4({ calculators }: { calculators: CalculatorType[] }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-10 text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Calculator Suite</h1>
          <p className="text-gray-600">Comprehensive financial planning tools</p>
        </motion.div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {calculators.map((calc, index) => (
            <motion.div
              key={calc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="flex">
                  {/* Image Side */}
                  <div className="w-40 flex-shrink-0 relative">
                    <img 
                      src={calc.image} 
                      alt={calc.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${calc.color} opacity-30`} />
                  </div>

                  {/* Content Side */}
                  <div className="flex-1 p-5">
                    <div className={`inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br ${calc.color} rounded-lg text-white mb-3`}>
                      {calc.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{calc.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{calc.description}</p>
                    <div className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 group-hover:gap-2 transition-all">
                      Get Started
                      <ArrowRight className="w-4 h-4" />
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

// Design 5: Asymmetric Layout with Larger Cards
function Design5({ calculators }: { calculators: CalculatorType[] }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-10"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-3">
            Financial <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Calculators</span>
          </h1>
          <p className="text-lg text-gray-600">Power tools for investment planning</p>
        </motion.div>

        {/* Asymmetric Grid */}
        <div className="max-w-6xl space-y-6">
          {calculators.map((calc, index) => (
            <motion.div
              key={calc.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`group cursor-pointer ${index % 2 === 0 ? '' : 'ml-auto'}`}
              style={{ maxWidth: index % 3 === 0 ? '100%' : '85%' }}
            >
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className={`flex ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                  {/* Image Side */}
                  <div className="w-64 flex-shrink-0 relative">
                    <img 
                      src={calc.image} 
                      alt={calc.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${calc.color} opacity-20`} />
                  </div>

                  {/* Content Side */}
                  <div className="flex-1 p-8 flex flex-col justify-center">
                    <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${calc.color} rounded-2xl text-white mb-4 self-start`}>
                      {calc.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{calc.title}</h3>
                    <p className="text-gray-600 mb-4">{calc.description}</p>
                    <div className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${calc.color} text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all self-start group-hover:gap-3`}>
                      Launch Calculator
                      <ArrowRight className="w-5 h-5" />
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

export default App