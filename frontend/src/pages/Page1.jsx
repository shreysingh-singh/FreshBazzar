import React from 'react'
import ImageGallery from '../components/ImageGalary';
import StoreBenefits from '../components/StoreBenefits';
import Footer from '../components/Footer';
import FreshPick from '../components/FreshPick';
import Banner from '../components/Banner';

function Page1() {
  return (
    <div>
      <ImageGallery />
      <StoreBenefits />
      <FreshPick />
      <Banner />
      <Footer />
    </div>
  );
}

export default Page1
