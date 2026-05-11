import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { Solutions } from "@/components/landing/solutions";
import { AIMatching } from "@/components/landing/ai-matching";
import { LetAIHandle } from "@/components/landing/let-ai-handle";
import { Stats } from "@/components/landing/stats";
import { Testimonials } from "@/components/landing/testimonials";
import { Analytics } from "@/components/landing/analytics";
import { BlogSection } from "@/components/landing/blog-section";
import { FAQSection } from "@/components/landing/faq-section";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Solutions />
      <AIMatching />
      <LetAIHandle />
      <Features />
      <Stats />
      <Analytics />
      <Testimonials />
      <BlogSection />
      <FAQSection />
      <CTA />
      <Footer />
    </main>
  );
}
