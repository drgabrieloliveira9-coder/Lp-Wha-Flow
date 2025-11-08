import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AnimatedBackground from "@/components/AnimatedBackground";
import WhatsAppButton from "@/components/WhatsAppButton";
import SchemaMarkup from "@/components/SchemaMarkup";

// Lazy load componentes below the fold
const AboutSection = lazy(() => import("@/components/AboutSection"));
const FeaturesSection = lazy(() => import("@/components/FeaturesSection"));
const HowItWorksSection = lazy(() => import("@/components/HowItWorksSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));
const ScrollAnimation3D = lazy(() => import("@/components/ScrollAnimation3D"));

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <SchemaMarkup />
      <AnimatedBackground />
      <div className="relative z-10">
        <Navigation />
        <main>
          <HeroSection />
          <Suspense fallback={<div className="min-h-screen" />}>
            <ScrollAnimation3D />
            <AboutSection />
            <FeaturesSection />
            <HowItWorksSection />
            <PricingSection />
            <TestimonialsSection />
            <FAQSection />
            <CTASection />
            <ContactSection />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
      <WhatsAppButton />
    </div>
  );
}
