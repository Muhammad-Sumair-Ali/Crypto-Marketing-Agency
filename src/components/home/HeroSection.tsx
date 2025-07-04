import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"


const fromLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
}


const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
}



// Background grid animation
const gridVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 0.25, transition: { duration: 2 } }
}

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Pre-generate random values for particle animations
  const particles = Array.from({ length: 20 }).map(() => ({
    initialX: Math.random() * 400 - 200,
    initialY: Math.random() * 400 - 200,
    duration: 4 + Math.random() * 3,
    delay: Math.random() * 2
  }));

  // These would normally be imported from your assets
  const cryptoIcons = [
    { name: "BTC", color: "bg-[#F7931A]" },
    { name: "ETH", color: "bg-[#627EEA]" },
    { name: "SOL", color: "bg-gradient-to-r from-[#9945FF] to-[#14F195]" },
    { name: "AVAX", color: "bg-[#E84142]" },
    { name: "DOT", color: "bg-[#E6007A]" },
  ];
  
  return (
    <section className=" px-3 md:px-4 py-16 md:py-20 relative overflow-hidden flex items-center">
      {/* Animated Background Effects - Only visible after client-side hydration */}
      <div className="absolute inset-0 bg-black bg-opacity-80 z-0">
        {isMounted && (
          <motion.div 
            className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-0"
            variants={gridVariants}
            initial="initial"
            animate="animate"
          />
        )}
      </div>
      
      {/* Glowing gradient orbs - Only visible after client-side hydration */}
      {isMounted && (
        <>
          <motion.div 
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-coinband-green/10 rounded-full blur-[130px] z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 2 }}
          />
          
          <motion.div 
            className="absolute bottom-1/4 right-1/4 translate-x-1/4 translate-y-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 2, delay: 0.3 }}
          />
        </>
      )}

      {/* Main content */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* LEFT TEXT SIDE - Always render the same structure */}
          <div className="text-center lg:text-left">
            {isMounted ? (
              <motion.div
                initial="initial"
                animate="animate"
                variants={staggerContainer}
              >
                <motion.div variants={fromLeft} className="inline-block mb-4 py-1 px-3 rounded-full bg-coinband-green/20 border border-coinband-green/30">
                  <span className="text-coinband-green text-sm font-medium">Leading Web3 Marketing Solutions</span>
                </motion.div>
                
                <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-coinband-green to-blue-400" variants={fromLeft}>
                  Web <span className="text-lime-500">3.0</span> Marketing Agency
                </motion.h1>
                
                <motion.p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-xl" variants={fromLeft}>
                  Driving adoption for crypto, blockchain, and web3 projects with data-driven strategies and innovative campaigns
                </motion.p>
                
                <motion.div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8" variants={fromLeft}>
                  <Button
                    size="lg"
                    className="bg-lime-500 text-black hover:bg-lime-600 hover:text-white  font-medium text-lg px-8"
                    asChild
                  >
                    <Link href="/contact-us">Get a Free Proposal</Link>
                  </Button>
                  
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-lime-600 text-coinband-green hover:bg-coinband-green/10 hover:text-lime-500 hover:border-white font-medium text-lg px-8"
                    asChild
                  >
                    <Link href="/services">Our Services</Link>
                  </Button>
                </motion.div>
              </motion.div>
            ) : (
              // Static version that matches motion.div structure for hydration
              <div>
                <div className="inline-block mb-4 py-1 px-3 rounded-full bg-coinband-green/20 border border-coinband-green/30">
                  <span className="text-coinband-green text-sm font-medium">Leading Web3 Marketing Solutions</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-coinband-green to-blue-400">
                  Web <span className="text-lime-500">3.0</span> Marketing Agency
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-xl">
                  Driving adoption for crypto, blockchain, and web3 projects with data-driven strategies and innovative campaigns
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                  <Button
                    size="lg"
                    className="bg-lime-500 text-black hover:bg-coinband-green/80 font-medium text-lg px-8"
                    asChild
                  >
                    <Link href="/contact-us">Get a Free Proposal</Link>
                  </Button>
                  
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-lime-600 text-coinband-green hover:bg-coinband-green/10 font-medium text-lg px-8"
                    asChild
                  >
                    <Link href="/services">Our Services</Link>
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT SIDE - ANIMATED 3D CRYPTO VISUALIZATION */}
          <div className="relative h-[500px] flex items-center justify-center">
            {!isMounted ? (
              // Static placeholder with matching structure for hydration
              <div className="w-full h-full" />
            ) : (
              <>
                {/* Central Orb */}
                <motion.div
                  className="absolute w-[200px] h-[200px] rounded-full bg-gradient-to-br from-coinband-green via-emerald-400 to-blue-600 z-10 flex items-center justify-center shadow-[0_0_100px_rgba(0,255,170,0.3)]"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    boxShadow: [
                      "0 0 60px rgba(0,255,170,0.2)",
                      "0 0 100px rgba(0,255,170,0.4)",
                      "0 0 60px rgba(0,255,170,0.2)"
                    ]
                  }}
                  transition={{
                    opacity: { duration: 0.8 },
                    boxShadow: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <motion.div
                    className="w-[180px] h-[180px] rounded-full bg-gradient-to-br from-emerald-300 to-blue-400 opacity-90"
                    animate={{
                      scale: [0.8, 0.9, 0.8]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                {/* Orbiting Crypto Icons */}
                <div className="absolute w-[400px] h-[400px] flex items-center justify-center">
                  {cryptoIcons.map((icon, i) => {
                    // Calculate position on the circle
                    const angle = (2 * Math.PI * i) / cryptoIcons.length;
                    const radius = 180; // Distance from center
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    
                    return (
                      <motion.div
                        key={icon.name}
                        className={`absolute w-14 h-14 rounded-full ${icon.color} shadow-lg flex items-center justify-center font-bold text-white z-20`}
                        initial={{ 
                          opacity: 0,
                          x: 0,
                          y: 0,
                          scale: 0.5
                        }}
                        animate={{ 
                          opacity: 1,
                          x: x,
                          y: y,
                          scale: 1
                        }}
                        transition={{
                          duration: 1,
                          delay: 0.3 + i * 0.1
                        }}
                      >
                        <motion.div
                          animate={{
                            y: [-5, 5, -5],
                          }}
                          transition={{
                            duration: 3 + i,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          {icon.name}
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Floating connection lines */}
                <svg className="absolute inset-0 w-full h-full z-10">
                  <motion.path
                    d={cryptoIcons.map((_, i) => {
                      const angle = (2 * Math.PI * i) / cryptoIcons.length;
                      const radius = 180;
                      const x = Math.cos(angle) * radius + 200;
                      const y = Math.sin(angle) * radius + 200;
                      return `M200,200 L${x},${y}`;
                    }).join(' ')}
                    stroke="url(#lineGradient)"
                    strokeWidth="1.5"
                    strokeDasharray="5,5"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ duration: 2, delay: 1.2 }}
                  />
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Particle effects */}
                <motion.div
                  className="absolute inset-0 mt-8 z-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                >
                  {particles.map((particle, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full bg-lime-500/80"
                      initial={{
                        x: particle.initialX,
                        y: particle.initialY,
                        scale: 0
                      }}
                      animate={{
                        x: particle.initialX,
                        y: particle.initialY,
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay
                      }}
                    />
                  ))}
                </motion.div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}