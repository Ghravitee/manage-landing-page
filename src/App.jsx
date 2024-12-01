import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Simplify from "./sections/Simplify";
import Testimonial from "./sections/Testimonial";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Testimonial />
      <Simplify />
      <Footer />
    </div>
  );
};

export default App;
