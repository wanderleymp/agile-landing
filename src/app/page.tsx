import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import CredibilitySection from '@/components/CredibilitySection'
import ColibriSection from '@/components/ColibriSection'
import TrustSection from '@/components/TrustSection'
import ContabilidadeSection from '@/components/ContabilidadeSection'
// import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'
import ContactSection from '@/components/ContactSection'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'
import BlogPreviewSection from '@/components/BlogPreviewSection'
import WhatsAppButton from '@/components/WhatsAppButton'
import SegmentosSection from '@/components/SegmentosSection'
import { getAllBlogPostsServer } from '@/lib/blog-server'

export default async function Home() {
  // Fetch blog posts on the server side
  const allPosts = getAllBlogPostsServer()
  const recentPosts = allPosts.slice(0, 3)

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CredibilitySection />
      <SegmentosSection />
      <ColibriSection />
      <TrustSection />
      <ContabilidadeSection />
      {/* <TestimonialsSection /> */}
      <BlogPreviewSection posts={recentPosts} />
      <CTASection />
      <FAQSection />
      <ContactSection />
      <Footer />
      
      {/* WhatsApp Float Button */}
      <WhatsAppButton />
    </main>
  )
}