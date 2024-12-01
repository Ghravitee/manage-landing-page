// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation } from "swiper";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import avatarAli from "../assets/avatar-ali.png";
import avatarAnisha from "../assets/avatar-anisha.png";
import avatarRichard from "../assets/avatar-richard.png";
import avatarShanai from "../assets/avatar-shanai.png";

const testimonials = [
  {
    name: "Anisha Li",
    text: "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
    image: avatarAnisha,
  },
  {
    name: "Ali Bravo",
    text: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
    image: avatarAli,
  },
  {
    name: "Richard Watts",
    text: "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!",
    image: avatarRichard,
  },
  {
    name: "Shanai Gough",
    text: "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.",
    image: avatarShanai,
  },
];

const TestimonialSlider = () => {
  return (
    <div className=" px-4 md:px-0 py-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-Very-Dark-Blue">
        What they&apos;ve said
      </h2>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{
          el: ".custom-pagination", // Target custom pagination container
          clickable: true,
        }}
        autoplay={{
          delay: 3000, // Delay between transitions (in milliseconds)
          disableOnInteraction: false, // Continue autoplay after user interactions
        }}
        // navigation
        className=""
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="pt-20 ">
            <div className="bg-Very-Light-Gray pb-8 pt-16 px-8 rounded-lg text-center relative flex flex-col h-[16rem]">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 -top-10 absolute z-50 left-0 right-0"
              />
              <h3 className="text-lg font-semibold text-Very-Dark-Blue mt-4">
                {testimonial.name}
              </h3>
              <p className="text-Dark-Grayish-Blue mt-4 mb-4 text-center">
                &quot;{testimonial.text}&quot;
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-pagination mt-6 flex justify-center"></div>
    </div>
  );
};

export default TestimonialSlider;

// import { useState } from "react";
// import avatarAli from "../assets/avatar-ali.png";
// import avatarAnisha from "../assets/avatar-anisha.png";
// import avatarRichard from "../assets/avatar-richard.png";
// import avatarShanai from "../assets/avatar-shanai.png";

// const testimonials = [
//   {
//     name: "Jane Doe",
//     title: "CEO, Example Co.",
//     text: "This service is amazing! It boosted my business tremendously.",
//     image: avatarAli,
//   },
//   {
//     name: "John Smith",
//     title: "CTO, Tech Corp.",
//     text: "Highly recommend it to anyone looking for great results!",
//     image: avatarAnisha,
//   },
//   {
//     name: "Emily Johnson",
//     title: "Freelancer",
//     text: "A game-changer for my career. Incredible experience!",
//     image: avatarRichard,
//   },
//   {
//     name: "Emily Johnson",
//     title: "Freelancer",
//     text: "A game-changer for my career. Incredible experience!",
//     image: avatarShanai,
//   },
// ];

// const TestimonialSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-16">
//       <h2 className="text-3xl font-bold text-center mb-8">
//         What Our Clients Say
//       </h2>
//       <div className="relative overflow-hidden">
//         {/* Testimonials */}
//         <div
//           className="flex transition-transform duration-500"
//           style={{
//             transform: `translateX(-${currentIndex * 100}%)`,
//             width: `${testimonials.length * 100}%`,
//           }}
//         >
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="min-w-full p-8 text-center bg-white rounded-lg shadow-md"
//             >
//               <img
//                 src={testimonial.image}
//                 alt={testimonial.name}
//                 className="w-24 h-24 mx-auto rounded-full mb-4"
//               />
//               <p className="text-gray-600 italic mb-4">
//                 &quot;{testimonial.text}&quot;
//               </p>
//               <h3 className="text-lg font-semibold">{testimonial.name}</h3>
//               <p className="text-sm text-gray-500">{testimonial.title}</p>
//             </div>
//           ))}
//         </div>

//         {/* Navigation Buttons */}
//         <button
//           onClick={handlePrev}
//           className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center"
//         >
//           &lt;
//         </button>
//         <button
//           onClick={handleNext}
//           className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center"
//         >
//           &gt;
//         </button>
//       </div>

//       {/* Pagination Dots */}
//       <div className="flex justify-center mt-4 space-x-2">
//         {testimonials.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 rounded-full ${
//               currentIndex === index ? "bg-blue-500" : "bg-gray-300"
//             }`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TestimonialSlider;
