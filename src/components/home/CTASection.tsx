import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function CTASection() {
  return (
    <section className="py-20 bg-coinband-dark relative">
      <div className="absolute inset-0 grid-pattern opacity-30 z-0"></div>
      <div className="container relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tell us your marketing challenge, and we'll prepare a customized solution for you.
          </h2>
          <p className="text-gray-400 mb-8">
            Select Coinband as your WEB3 digital marketing partner to chart a path for your company's growth in the blockchain, cryptocurrency, and NFT sectors. Click the "Get a proposal" button to get started.
          </p>
          <Button
            size="lg"
            className="bg-coinband-green text-coinband-dark hover:bg-coinband-green/90 font-medium text-lg"
            asChild
          >
            <Link href="/contact-us">Get a Free Proposal</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 