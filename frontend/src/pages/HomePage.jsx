
import ImageGallery from '../components/ImageGalary';
import StoreBenefits from '../components/StoreBenefits';
import FreshPick from '../components/FreshPick';
import Banner from '../components/Banner';
import WeekendofferSection from '../components/WeekendofferSection';
import StoryBanner from '../components/StoryBanner';
import InspirationSection from '../components/InspirationSection';
import CustomerReviews from '../components/Testimonial';
import CategorySection from '../components/CategorySection';
import BestSeller from '../components/BestSeller';

function HomePage() {
  return (
    <div className="bg-[#F1F8EC]">
      <ImageGallery />
      <StoreBenefits />
      <CategorySection />
      <FreshPick />
      <Banner />
      <WeekendofferSection />
      <BestSeller />
      <StoryBanner />
      <InspirationSection />
      <CustomerReviews />
    </div>
  );
}

export default HomePage
