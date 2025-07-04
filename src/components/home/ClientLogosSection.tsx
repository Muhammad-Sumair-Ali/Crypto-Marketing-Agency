import Image from "next/image"
import { motion } from "framer-motion"

const clientLogos = [
  { src: "https://ext.same-assets.com/2987606905/769025214.webp", alt: "Client Logo 1" },
  { src: "https://ext.same-assets.com/2987606905/640233095.webp", alt: "Client Logo 2" },
  { src: "https://ext.same-assets.com/2987606905/3401123268.svg", alt: "Client Logo 3" },
  { src: "https://ext.same-assets.com/2987606905/3189940448.webp", alt: "Client Logo 4" },
  { src: "https://ext.same-assets.com/2987606905/689923609.avif", alt: "Client Logo 5" }
]

const zoomIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
}

export default function ClientLogosSection() {
  return (
    <section className="py-12 md:py-16 bg-coinband-dark">
      <div className="container">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-2">
            Our <span className="text-lime-500">Crypto Marketing</span>  Agency Attracts Over <span className="text-lime-500">100,000</span> New Token Holders Per Month
          </h2>
          <p className="text-gray-400">
            Experience in promoting 90+ Crypto, NFT and Web3 projects
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {clientLogos.map((logo, index) => (
            <motion.div
              key={index}
              className="h-16 w-auto"
              variants={zoomIn}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={48}
                className="object-contain h-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 