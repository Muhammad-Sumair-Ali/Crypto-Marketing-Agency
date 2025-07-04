"use client"


import HeroSection from "@/components/home/HeroSection"
import ClientLogosSection from "@/components/home/ClientLogosSection"
import ServicesSection from "@/components/home/ServicesSection"
import IndustriesSection from "@/components/home/IndustriesSection"
import TestimonialsSection from "@/components/home/TestimonialsSection"
import CTASection from "@/components/home/CTASection"





export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ClientLogosSection />
      <ServicesSection />
      <IndustriesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}
