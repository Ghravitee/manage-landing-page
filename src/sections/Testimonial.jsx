import TestimonialSlider from "../components/TestimonialSlider";

const Testimonial = () => {
  return (
    <section>
      <TestimonialSlider />

      <div className="flex justify-center items-center mt-2">
        <a
          href="#"
          className=" px-6 py-2 rounded-full bg-Bright-Red text-Very-Light-Gray mx-auto box hover:opacity-40 hover:cursor-pointer"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Testimonial;
