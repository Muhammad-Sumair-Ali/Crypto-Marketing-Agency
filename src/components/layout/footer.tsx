"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, MessageSquare } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-coinband-dark pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto">
        {/* Contact Section */}
        <div className="grid-pattern mb-16">
          <div className="container py-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in touch with us</h2>
              <p className="text-gray-400 mb-8">
                You will feel confident in your choice from the first minutes of communication with Coinband.
              </p>
              <Link
                href="/contact-us"
                className="inline-block bg-coinband-green text-coinband-dark px-6 py-3 rounded-md font-medium hover:bg-coinband-green/80 transition-all"
              >
                Get a Free Proposal
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo and Social */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <div className="h-12 w-40 relative">
                {/* <Image
                  src="https://ext.same-assets.com/2987606905/2028481047.svg"
                  alt="Coinband Crypto Marketing Agency"
                  fill
                  className="object-contain"
                /> */}
                <h3>Logo Here</h3>
              </div>
            </Link>
            <div className="flex space-x-3">
              <Link href="https://twitter.com/coinband_io" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-coinband-green hover:text-coinband-dark transition-colors">
                <Twitter size={16} />
              </Link>
              <Link href="https://www.facebook.com/coinband.io" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-coinband-green hover:text-coinband-dark transition-colors">
                <Facebook size={16} />
              </Link>
              <Link href="https://www.instagram.com/coinband.io/" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-coinband-green hover:text-coinband-dark transition-colors">
                <Instagram size={16} />
              </Link>
              <Link href="https://t.me/coinband_agency" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-coinband-green hover:text-coinband-dark transition-colors">
                <MessageSquare size={16} />
              </Link>
              <Link href="https://www.linkedin.com/company/coinband/" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-coinband-green hover:text-coinband-dark transition-colors">
                <Linkedin size={16} />
              </Link>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/smm" className="text-gray-400 hover:text-coinband-green text-sm">Social media marketing (SMM)</Link>
              </li>
              <li>
                <Link href="/services/community" className="text-gray-400 hover:text-coinband-green text-sm">Community management</Link>
              </li>
             
             
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Industries</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/industries/ico-marketing" className="text-gray-400 hover:text-coinband-green text-sm">ICO marketing</Link>
              </li>
              <li>
                <Link href="/industries/ido-marketing-services" className="text-gray-400 hover:text-coinband-green text-sm">IDO marketing</Link>
              </li>
              <li>
                <Link href="/industries/ieo-marketing" className="text-gray-400 hover:text-coinband-green text-sm">IEO marketing</Link>
              </li>
              
            </ul>
          </div>

          {/* Company and Contact Column */}
          <div>
            <div className="mb-8">
              <h3 className="text-white font-medium text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-coinband-green text-sm">Blog</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-medium text-lg mb-4">Contacts</h3>
              <p className="text-gray-400 text-sm mb-2">
                <a href="mailto:commercial@coinband.io" className="hover:text-coinband-green">name of website .. </a>
              </p>
            </div>
          </div>
        </div>

        {/* Offices Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="flex items-start space-x-3">
            <div className="shrink-0 w-5 h-5">
              <Image
                src="https://ext.same-assets.com/2987606905/3807292839.webp"
                alt="New York"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-white font-medium mb-1">New York</p>
              <p className="text-gray-400 text-sm">
                Flatbush Avenue 41,<br />
                New York City, 11217, USA
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="shrink-0 w-5 h-5">
              <Image
                src="https://ext.same-assets.com/2987606905/2233775146.webp"
                alt="Hong Kong"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-white font-medium mb-1">Hong Kong</p>
              <p className="text-gray-400 text-sm">
                7/F, MW Tower, 111 Bonham Strand,<br />
                Sheung Wan, Hong Kong
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="shrink-0 w-5 h-5">
              <Image
                src="https://ext.same-assets.com/2987606905/2718261566.webp"
                alt="Dubai"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-white font-medium mb-1">Dubai</p>
              <p className="text-gray-400 text-sm">
                King Salman Bin Abdulaziz<br />
                Al Saud St, Dubai, UAE
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between pt-6 border-t border-gray-800 text-sm text-gray-500">
          <div className="mb-4 md:mb-0">
            <Link href="/privacy" className="hover:text-coinband-green mr-6">Privacy policy</Link>
            <Link href="/public-offer" className="hover:text-coinband-green">Public offer</Link>
          </div>
          <div className="flex flex-col md:flex-row md:items-center">
            <p className="mb-2 md:mb-0 md:mr-6">All rights reserved</p>
            <p>Copyright © 2025 xyz.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
