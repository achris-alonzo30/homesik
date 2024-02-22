import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";
import { Heading } from "./_components/heading";


const MarketingPage = () => {
  return (
    <div className="flex flex-col flex-1 h-full bg-light-color dark:bg-dark-color">
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <Heading />
      </div>
      <Footer />
    </div>
  );
};

export default MarketingPage;
