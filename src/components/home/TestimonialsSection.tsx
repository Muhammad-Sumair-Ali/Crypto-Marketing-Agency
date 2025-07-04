
import React, { useRef, useEffect } from "react"
import { motion } from "framer-motion"

// Extended testimonials array for infinite scrolling effect
const testimonials = [
  {
    name: "Charlie Bussat",
    position: "Marketing Director",
    username: "@CharlieBussat",
    text: "Implemented a great marketing strategy with the Coinband team. Their proactive and expert approach is inspiring.",
    profileLink: "https://www.linkedin.com/in/charliebussat/",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg"
  },
  {
    name: "James O Connor",
    position: "Project Lead",
    username: "@JamesOConnor",
    text: "Worked with the Coinband team on promotion through PR. Loved their understanding of the project's business goals.",
    profileLink: "https://www.linkedin.com/in/james-o-connor-963179a4/",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Vitaliy Martynenko",
    position: "Blockchain Developer",
    username: "@VitaliyMartynenko",
    text: "I like Coinband's holistic approach, which enables them to meet the challenges effectively.",
    profileLink: "https://www.facebook.com/vitaliy.martynenko",
    avatar: "https://randomuser.me/api/portraits/men/53.jpg"
  },
  {
    name: "Sarah Johnson",
    position: "CEO at CryptoVentures",
    username: "@SarahJ",
    text: "Coinband helped us increase our market presence by 300%. Their crypto-specific expertise is unmatched in the industry.",
    profileLink: "https://linkedin.com",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Michael Zhang",
    position: "Product Manager",
    username: "@MichaelZ",
    text: "The team at Coinband delivered exceptional results for our token launch. They understood our vision and executed flawlessly.",
    profileLink: "https://linkedin.com",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg"
  },
  {
    name: "Emma Wilson",
    position: "Marketing Strategist",
    username: "@EmmaWilson",
    text: "Coinband's strategic approach to our DeFi project helped us stand out in a crowded market. Highly recommended!",
    profileLink: "https://linkedin.com",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg"
  }
]

// Duplicate testimonials to create seamless infinite scroll effect
const extendedTestimonials = [...testimonials, ...testimonials]

export default function TestimonialsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  
  // Effect to handle the infinite scrolling animation pause on hover
  useEffect(() => {
    const scrollerElement = scrollerRef.current
    if (!scrollerElement) return
    
    const handleMouseEnter = () => {
      scrollerElement.style.animationPlayState = 'paused'
    }
    
    const handleMouseLeave = () => {
      scrollerElement.style.animationPlayState = 'running'
    }
    
    scrollerElement.addEventListener('mouseenter', handleMouseEnter)
    scrollerElement.addEventListener('mouseleave', handleMouseLeave)
    
    return () => {
      scrollerElement.removeEventListener('mouseenter', handleMouseEnter)
      scrollerElement.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section className="py-16 relative bg-gradient-to-b from-black via-coinband-dark to-black overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-48 right-1/4 w-80 h-80 bg-lime-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -right-32 top-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
        
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white inline-block text-transparent bg-clip-text">
            Reviews of <span className="text-lime-500">Coinband's</span> Work
          </h2>
          <motion.p 
            className="text-gray-300 max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Join our satisfied clients who have achieved remarkable success with our Web3 marketing expertise
          </motion.p>
        </motion.div>

        {/* Infinite scrolling testimonials container */}
        <div className="relative w-full max-w-full overflow-hidden pb-2 -mt-8 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 before:bg-gradient-to-r before:from-black before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 after:bg-gradient-to-l after:from-black after:to-transparent">
          {/* First row - scrolling right */}
          <div 
            ref={scrollerRef}
            className="flex gap-4 w-max animate-scroll"
            style={{
              animationDuration: '50s',
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite'
            }}
          >
            {extendedTestimonials.map((testimonial, index) => (
              <div
                key={`row1-${index}`}
                className="w-[350px] flex-shrink-0"
              >
                <div className="relative h-full bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-2xl p-1 group">
                  <div className="h-full flex flex-col border border-gray-800/50 rounded-xl overflow-hidden bg-black/30 hover:border-lime-500/50 transition-all duration-300 p-3 px-6">
                    <div className="flex items-start">
                      <div className="flex-grow">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lime-500/80 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                        <p className="text-gray-300 italic mb-4">"{testimonial.text}"</p>
                      </div>
                    </div>
                    <div className="flex items-center mt-auto pt-4 border-t border-gray-800/30">
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{testimonial.name}</p>
                        <p className="text-gray-400 text-sm">{testimonial.position}</p>
                      </div>
                      <a
                        href={testimonial.profileLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto text-lime-500 hover:text-white transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                  {/* Card glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-lime-500/0 via-lime-500/5 to-blue-500/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Second row - scrolling left */}
          <div 
            className="flex gap-4 w-max animate-scroll-reverse mt-4"
            style={{
              animationDuration: '60s',
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite'
            }}
          >
            {extendedTestimonials.reverse().map((testimonial, index) => (
              <div
                key={`row2-${index}`}
                className="w-[350px] flex-shrink-0"
              >
                <div className="relative h-full bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-2xl p-1 group">
                  <div className="h-full flex flex-col border border-gray-800/50 rounded-xl overflow-hidden bg-black/30 hover:border-lime-500/50 transition-all duration-300 p-3 px-6">
                    <div className="flex items-start ">
                      <div className="flex-grow">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lime-500/80 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                        <p className="text-gray-300 italic mb-4">"{testimonial.text}"</p>
                      </div>
                    </div>
                    <div className="flex items-center mt-auto pt-4 border-t border-gray-800/30">
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                        <img 
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{testimonial.name}</p>
                        <p className="text-gray-400 text-sm">{testimonial.position}</p>
                      </div>
                      <a
                        href={testimonial.profileLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto text-lime-500 hover:text-white transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                  {/* Card glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/5 via-lime-500/5 to-lime-500/0 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-action button */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a 
            href="/testimonials" 
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-500/90 hover:to-lime-600/90 rounded-lg font-medium shadow-lg shadow-lime-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-lime-500/30 text-black"
          >
            View All Reviews
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Add animation keyframes to the global styles */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 16px)); /* Half width + half the gap */
          }
        }
        
        @keyframes scrollReverse {
          0% {
            transform: translateX(calc(-50% - 16px)); /* Half width + half the gap */
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll {
          animation: scroll linear infinite;
        }
        
        .animate-scroll-reverse {
          animation: scrollReverse linear infinite;
        }
      `}</style>
    </section>
  )
}
