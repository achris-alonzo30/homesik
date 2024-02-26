import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";
import { Heading } from "./_components/heading";
import { RoleFeatures } from "./_components/role-features";
import { ShuffleHero } from "./_components/shuffle-hero";


const MarketingPage = () => {
  return (
    <div className="flex flex-col flex-1 h-full bg-light-color dark:bg-dark-color">
      <Navbar />
      <div className="flex flex-col items-center justify-center space-y-6 md:space-y-20 bg-light-color dark:bg-dark-color">
        <ShuffleHero />
        <div className="sm:flex items-center justify-center">
          <RoleFeatures />
        </div>
        <Heading />
      </div>
      
      <Footer />
    </div>
  );
};

export default MarketingPage;
