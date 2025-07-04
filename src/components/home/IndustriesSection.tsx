
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const industries = [
  {
    title: "ICO Marketing",
    description: "Providing ROI-oriented marketing solutions for a successful ICO of your Crypto project. Coinband is a leading ICO marketing agency.",
    image: "https://cdn.prod.website-files.com/650b98c87c6a1115054ef3d1/65159798758d3a29c9ffb863_2.webp",
    href: "/industries/ico-marketing",
    icon: "🚀"
  },
  {
    title: "IDO Marketing",
    description: "Providing ROI-oriented marketing solutions for a successful ICO of your Crypto project. Coinband is a leading ICO marketing agency.",
    image: "https://cdn.prod.website-files.com/650b98c87c6a1115054ef3d1/6515a3f17552283e40380c75_02.webp",
    href: "/industries/ido-marketing-services",
    icon: "💎"
  },
  {
    title: "IEO Marketing",
    description: "Energise your IEO using Web 3.0 marketing tools that ensure the success of your token sale.",
    image: "https://cdn.prod.website-files.com/650b98c87c6a1115054ef3d1/6515a3f66c08fa7a3504466d_03.webp",
    href: "/industries/ieo-marketing",
    icon: "📈"
  }
]

export default function IndustriesSection() {
  return (
    <section className="py-16 relative bg-gradient-to-b from-black via-coinband-dark to-black overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 grid-pattern opacity-10 z-0"></div>
        <div className="absolute top-44 right-28 w-96 h-96 bg-lime-950 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block text-white bg-clip-text">
            Our <span className="text-lime-500">Industries</span>
          </h2>
          <motion.p 
            className="text-gray-300 max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Our premier cryptocurrency marketing firm has assisted a wide array of companies and groups in reaching their promotional goals. With extensive knowledge in advancing diverse Web 3.0 initiatives, we possess the understanding and proficiency to guide you.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="group relative h-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative z-10 h-full bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-2xl p-1">
                <div className="h-full flex flex-col border border-gray-800/50 rounded-xl overflow-hidden bg-black/30 hover:border-lime-500/50 transition-all duration-300">
                  <div className="h-44 sm:h-48 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center bg-lime-500/20 backdrop-blur-md rounded-lg z-20">
                      <span className="text-xl">{industry.icon}</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-lime-500 transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-gray-400 mb-5 flex-grow">
                      {industry.description}
                    </p>
                    <Link
                      href={industry.href}
                      className="inline-flex items-center font-medium text-lime-500 hover:text-white mt-auto group/link"
                    >
                      <span className="group-hover/link:mr-2 transition-all">Learn more</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="ml-1 w-0 group-hover/link:w-4 opacity-0 group-hover/link:opacity-100 transition-all"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Card glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-lime-500/0 via-lime-500/5 to-blue-500/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button
            variant="outline"
            className="border-lime-500 text-lime-500 hover:bg-lime-500 hover:text-black shadow-lg shadow-lime-500/10 transition-all duration-300 hover:shadow-lime-500/20"
            asChild
          >
            <Link href="/industries" className="font-medium flex items-center gap-2">
              See All Industries
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
