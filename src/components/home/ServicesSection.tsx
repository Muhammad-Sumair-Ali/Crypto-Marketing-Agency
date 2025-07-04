
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const services = [
  {
    title: "Social Media Marketing",
    description: "We assist in increasing brand awareness on social media. You will attract new audiences and investors by ordering the SMM service.",
    image: "https://ext.same-assets.com/1503069216/16279297.avif",
    href: "/services/smm",
    icon: "📱"
  },
  {
    title: "Community Management",
    description: "Community is one of the most important resources of any Web3 project. This service is aimed at creating communities.",
    image: "https://ext.same-assets.com/1503069216/144136906.webp",
    href: "/services/community",
    icon: "👥"
  },
  {
    title: "PR (Public Relations)",
    description: "Public relations distinguish a project from the crowd. Web3 agency uses media relations to create a positive image.",
    image: "https://ext.same-assets.com/1503069216/4049249504.webp",
    href: "/services/pr",
    icon: "🔊"
  },
  {
    title: "Influencer Marketing",
    description: "This is a way to quickly and loyally attract an audience through opinion leaders. Our database has 1000+ proven crypto-influencers.",
    image: "https://ext.same-assets.com/1503069216/659263367.webp",
    href: "/services/influencer",
    icon: "⭐"
  },
  {
    title: "Paid Ads (PPC)",
    description: "PPC advertising for crypto projects is an important tool in promoting events such as IDO / ICO, listing or to attract users of your product.",
    image: "https://ext.same-assets.com/1503069216/3069670042.avif",
    href: "/services/ppc",
    icon: "💰"
  },
  {
    title: "SEO Promotion",
    description: "Search engine optimisation can boost your website to the top positions in organic search results, which will provide significant traffic.",
    image: "https://ext.same-assets.com/1503069216/3735942608.avif",
    href: "/services/seo",
    icon: "🔍"
  }
]

export default function ServicesSection() {
  return (
    <section className="py-10 relative bg-gradient-to-b from-coinband-dark via-black to-coinband-dark overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-24 left-20 w-64 h-64 bg-lime-950 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-32 w-96 h-96 bg-lime-900 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
         
          <h2 className="text-3xl md:text-4xl font-bold inline-block py-2">
            Full-Service Crypto <span className="text-lime-500">Marketing</span> Agency
          </h2>
          <motion.p 
            className="text-gray-300 max-w-5xl m-auto  text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Coinband was founded in 2022 by crypto marketing experts with 4 years of experience. We have quickly established ourselves as industry leaders in Web3 marketing and the cryptocurrency and blockchain sectors.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative h-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative z-10 h-full bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-2xl p-1 text-white">
                <div className="h-full flex flex-col border border-gray-800/50 rounded-xl overflow-hidden bg-black/30 hover:border-lime-600 hover:text-lime-500 transition-all duration-300">
                  <div className="h-44 sm:h-48 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center bg-coinband-green/20 backdrop-blur-md rounded-lg z-20">
                      <span className="text-xl">{service.icon}</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-3 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-5 flex-grow">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center font-medium text-coinband-green hover:text-white mt-auto group/link"
                    >
                      <span className="group-hover/link:mr-2 text-lime-500 transition-all">Learn more</span>
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
              <div className="absolute -inset-0.5 bg-gradient-to-r from-coinband-green/0 via-coinband-green/5 to-lime-500/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
          <Link 
            href="/services" 
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-medium shadow-lg bg-lime-600 text-black hover:bg-coinband-green/80  transition-all duration-300 hover:shadow-xl hover:shadow-coinband-green/30"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
