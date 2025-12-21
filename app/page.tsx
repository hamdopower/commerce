
import HeroCarousel from './components/HeroCarousel';
import SaleCountdownBar from './components/SaleCountdownBar';
import FeatureBanner from './components/FeatureBanner';
import ProductShowcase from './components/ProductShowcase';
import LookbookSection from './components/LookbookSection';
import FeaturedCollections from './components/FeaturedCollections';
import CustomerReviews from './components/CustomerReviews';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <SaleCountdownBar />
      <HeroCarousel />
      <FeatureBanner />
      <ProductShowcase />
      <FeaturedCollections />
      <LookbookSection />
      <CustomerReviews />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
