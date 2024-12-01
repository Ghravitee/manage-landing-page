const Features = () => {
  return (
    <section className="max-w-[1250px] mx-auto py-20 lg:py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-start relative">
        {/* Left section */}
        {/* Left section */}
        <div className="">
          <h2 className="text-Dark-Blue font-bold text-[2rem] mb-6 max-w-[25rem] mx-auto lg:mx-0 text-center lg:text-left">
            What&apos;s different about Manage?
          </h2>
          <p className="text-Dark-Grayish-Blue mb-6 lg:mb-8 max-w-[25rem] text-center lg:text-left">
            Manange provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        {/* Right section */}
        {/* Right section */}
        <div className="flex flex-col gap-10 pl-4 lg:pl-0">
          {/* First-mobile */}
          <div className="flex flex-col lg:hidden gap-6 items-start">
            <div className="flex items-center bg-Bright-Red/10 relative w-full rounded-l-3xl">
              <div className="bg-Bright-Red rounded-3xl flex justify-center items-center px-5 py-1 absolute">
                <h3 className="text-Very-Pale-Red">01</h3>
              </div>
              <h3 className="text-Dark-Blue font-bold py-1 ml-16 ">
                Track company-wide progress
              </h3>
            </div>
            <div className="mt-4">
              <p className="text-Dark-Grayish-Blue max-w-[25rem]">
                See how your day-to-day task fit into your wider vision. Go from
                tracking progress at the milestone level all the way down to the
                smallest of detail. Never lose sight of the bigger picture again
              </p>
            </div>
          </div>

          {/* first-desktop */}
          <div className="hidden lg:flex gap-6 items-start">
            <div className="bg-Bright-Red rounded-3xl flex justify-center items-center px-5 py-1">
              <h3 className="text-Very-Pale-Red">01</h3>
            </div>
            <div>
              <h3 className="text-Dark-Blue font-bold mb-4">
                Track company-wide progress
              </h3>
              <p className="text-Dark-Grayish-Blue max-w-[25rem]">
                See how your day-to-day task fit into your wider vision. Go from
                tracking progress at the milestone level all the way down to the
                smallest of detail. Never lose sight of the bigger picture again
              </p>
            </div>
          </div>

          {/* Second-mobile */}
          <div className="flex flex-col lg:hidden gap-6 items-start">
            <div className="flex items-center bg-Bright-Red/10 relative w-full rounded-l-3xl">
              <div className="bg-Bright-Red rounded-3xl flex justify-center items-center px-5 py-1 absolute">
                <h3 className="text-Very-Pale-Red">02</h3>
              </div>
              <h3 className="text-Dark-Blue font-bold py-1 ml-16 ">
                Advanced built-in reports
              </h3>
            </div>
            <div className="mt-4">
              <p className="text-Dark-Grayish-Blue max-w-[25rem]">
                See how your day-to-day task fit into your wider vision. Go from
                tracking progress at the milestone level all the way down to the
                smallest of detail. Never lose sight of the bigger picture again
              </p>
            </div>
          </div>

          {/* second-desktop */}
          <div className="hidden lg:flex gap-6 items-start">
            <div className="bg-Bright-Red rounded-3xl flex justify-center items-center px-5 py-1">
              <h3 className="text-Very-Pale-Red">02</h3>
            </div>
            <div>
              <h3 className="text-Dark-Blue font-bold mb-4">
                Advanced built-in reports
              </h3>
              <p className="text-Dark-Grayish-Blue max-w-[25rem]">
                Set internal delivery estimates and trcak progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </p>
            </div>
          </div>

          {/* Third-mobile */}

          <div className="flex flex-col lg:hidden gap-6 items-start">
            <div className="flex items-center bg-Bright-Red/10 relative w-full rounded-l-3xl">
              <div className="bg-Bright-Red rounded-3xl flex justify-center items-center px-5 py-1 absolute">
                <h3 className="text-Very-Pale-Red">03</h3>
              </div>
              <h3 className="text-Dark-Blue font-bold py-1 ml-16 ">
                Everything you need in one place
              </h3>
            </div>
            <div className="mt-4">
              <p className="text-Dark-Grayish-Blue max-w-[25rem]">
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers and
                all-in-one team productivity solution.
              </p>
            </div>
          </div>

          {/* third desktop */}

          <div className="hidden lg:flex gap-6 items-start">
            <div className="bg-Bright-Red rounded-3xl flex justify-center items-center px-5 py-1">
              <h3 className="text-Very-Pale-Red">03</h3>
            </div>
            <div>
              <h3 className="text-Dark-Blue font-bold mb-4">
                Everything you need in one place
              </h3>
              <p className="text-Dark-Grayish-Blue max-w-[25rem]">
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers and
                all-in-one team productivity solution.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block -rotate-45  absolute -z-10 md:right-[80%] -bottom-[80%] w-full h-[70%] bg-Bright-Red opacity-10 rounded-r-full" />
      </div>
    </section>
  );
};

export default Features;
