import illustration from "../assets/illustration-intro.svg";

const Hero = () => {
  return (
    <section className="max-w-[1250px] mx-auto py-6 lg:py-8 px-4">
      <div className="flex flex-col-reverse lg:grid grid-cols-[.5fr_.5fr] justify-between items-center ">
        <div className="lg:mt-0">
          <h1 className="text-Dark-Blue font-bold text-center lg:text-left text-[2.5rem] lg:text-[3rem] leading-tight mb-6 mx-auto lg:mx-0 max-w-[22rem] lg:max-w-[25rem]">
            Bring everyone together to build better products.
          </h1>
          <p className="text-Dark-Grayish-Blue max-w-[27rem] lg:max-w-[20rem] mb-6 lg:mb-8 text-center lg:text-left">
            Manange makes it simple for software teams to plan day-to-day task
            while keeping the larger team goals in view
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href="#"
              className="px-6 py-2 rounded-full bg-Bright-Red text-Very-Light-Gray box hover:opacity-40 hover:cursor-pointer"
            >
              Get Started
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            src={illustration}
            alt="The image of the hero section"
            className="w-full"
          />
          <div className="-rotate-45 absolute -z-10 -right-[30.5%] md:-right-[40%] -top-[20%] md:bottom-[40%] min-w-[130%] md:min-w-[135%] h-[80%] bg-Bright-Red opacity-10 rounded-l-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
