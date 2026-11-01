
import ImageGallery from '../components/ImageGalary';
import StoreBenefits from '../components/StoreBenefits';
import FreshPick from '../components/FreshPick';
import Banner from '../components/Banner';
import WeekendofferSection from '../components/WeekendofferSection';
import StoryBanner from '../components/StoryBanner';
import InspirationSection from '../components/InspirationSection';
import CustomerReviews from '../components/Testimonial';

function HomePage() {
  return (
    <div className="bg-gray-100">
      <ImageGallery />
      <StoreBenefits />
      <FreshPick />
      <Banner />
      <FreshPick />
      <WeekendofferSection />
      <StoryBanner />
      <InspirationSection />
      <CustomerReviews />
    </div>
  );
}

export default HomePage
