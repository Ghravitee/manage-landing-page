const Simplify = () => {
  return (
    <section className=" mt-28 relative bg-Bright-Red">
      <div className="max-w-[1250px] mx-auto py-20 px-4 bg-simplify-mobile lg:bg-simplify-desktop bg-no-repeat lg:bg-cover bg-contain lg:bg-right-top">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="">
            <h2 className="font-bold text-Very-Pale-Red text-[2.5rem] lg:max-w-[25rem] text-center lg:text-left">
              Simplify how your team works today.
            </h2>
          </div>
          <div className="relative">
            <a
              href="#"
              className=" px-6 py-3 rounded-full bg-Very-Pale-Red text-Bright-Red font-bold hover:text-Bright-Red/30"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simplify;
