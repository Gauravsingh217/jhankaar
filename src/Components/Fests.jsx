
// import dance from "../Assets/dancing.jpg";
// import drama from "../Assets/drama.jpg";
// import singing from "../Assets/singing.jpg";
// import standup from "../Assets/standup.jpg";
// import fashionShow from "../Assets/fashionShow.jpg";
// import Mr from "../Assets/Mr-Mrs.jpg";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const events = [
//   {
//     id: 1,
//     title: "Let’s Dance, Darling",
//     description:
//       "Got moves that can set the stage on fire? Whether you groove like MJ or just vibe like Friday night, this is your moment to shine. Come twirl, swirl, and steal a few hearts while you’re at it.",
//     image: dance,
//   },
//   {
//     id: 2,
//     title: "Sing it, slay it.",
//     description:
//       "Not just a song — it's a whole mood. Serenade the crowd, hit those notes, and maybe steal a few hearts while you're at it.",
//     image: singing,
//   },
//   {
//     id: 3,
//     title: "Drama Unleashed",
//     description:
//       "Make them laugh, make them cry, or leave them speechless — it’s all in a day’s act.",
//     image: drama,
//   },
//   {
//     id: 4,
//     title: "Stand Up & Crack Up",
//     description:
//       "Step into a night where the only rule is: don’t hold your laugh in From relatable rants to wild roasts, our comics are here to make your abs sore (from laughter, of course).",
//     image: standup,
//   },
//   {
//     id: 5,
//     title: "Fit Check Fiesta",
//     description:
//       "Serve looks, steal hearts, and vibe with style.It’s the ultimate runway riot — are you in?",
//     image: fashionShow,
//   },
//   {
//     id: 6,
//     title: "Mr. & Mrs. Jhankaar",
//     description:
//       "From poise to personality — it’s the battle of elegance.Who will walk away with the title and all the glory?",
//     image: Mr,
//   },
// ];

// export default function Fests() {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <section className="bg-[#0f0f0f] text-white py-20 px-4 md:px-16">
//       <h2
//         className="text-4xl md:text-5xl font-bold text-center mb-16 font-cormorant text-dance"
//         data-aos="fade-up"
//       >
//         Where Talent Meets Stage
//       </h2>

//       <div className="space-y-3 max-w-6xl mx-auto">
//         {events.map((event, index) => (
//           <div
//             key={event.id}
//             className={`flex flex-col md:flex-row items-center gap-4 ${
//               index % 2 !== 0 ? "md:flex-row-reverse" : ""
//             }`}
//             data-aos="fade-up"
//             data-aos-delay={index * 100}
//           >
//             <div className="w-full md:w-1/2 h-80 flex items-center justify-center">
//               <img
//                 src={event.image}
//                 alt={event.title}
//                 className="w-full h-3/4 object-cover rounded-xl shadow-lg"
//               />
//             </div>

//             <div className="w-full md:w-1/2 text-center md:text-left font-cormorant text-drama">
//               <h3 className="text-2xl md:text-3xl font-semibold mb-3">
//                 {event.title}
//               </h3>
//               <p className="text-gray-300 text-lg leading-relaxed font-baskerville">
//                 {event.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// } 

import dance from "../Assets/dancing.jpg";
import drama from "../Assets/drama.jpg";
import singing from "../Assets/singing.jpg";
import standup from "../Assets/standup.jpg";
import fashionShow from "../Assets/fashionShow.jpg";
import Mr from "../Assets/Mr-Mrs.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const events = [
  {
    id: 1,
    title: "Let’s Dance, Darling",
    description:
      "Got moves that can set the stage on fire? Whether you groove like MJ or just vibe like Friday night, this is your moment to shine. Come twirl, swirl, and steal a few hearts while you’re at it.",
    image: dance,
  },
  {
    id: 2,
    title: "Sing it, slay it.",
    description:
      "Not just a song — it's a whole mood. Serenade the crowd, hit those notes, and maybe steal a few hearts while you're at it.",
    image: singing,
  },
  {
    id: 3,
    title: "Drama Unleashed",
    description:
      "Make them laugh, make them cry, or leave them speechless — it’s all in a day’s act.",
    image: drama,
  },
  {
    id: 4,
    title: "Stand Up & Crack Up",
    description:
      "Step into a night where the only rule is: don’t hold your laugh in From relatable rants to wild roasts, our comics are here to make your abs sore (from laughter, of course).",
    image: standup,
  },
  {
    id: 5,
    title: "Fit Check Fiesta",
    description:
      "Serve looks, steal hearts, and vibe with style.It’s the ultimate runway riot — are you in?",
    image: fashionShow,
  },
  {
    id: 6,
    title: "Mr. & Mrs. Jhankaar",
    description:
      "From poise to personality — it’s the battle of elegance.Who will walk away with the title and all the glory?",
    image: Mr,
  },
];

export default function Fests() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className=" text-white py-20 px-4 md:px-16">
      <h2
        className="text-4xl md:text-5xl font-bold text-center mb-16 font-cormorant text-dance"
        data-aos="fade-up"
      >
        Where Talent Meets Stage
      </h2>

      <div className="space-y-3 max-w-6xl mx-auto">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`flex flex-col md:flex-row items-center gap-4 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="w-full md:w-1/2 h-80 flex items-center justify-center">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-3/4 object-cover rounded-xl shadow-lg"
              />
            </div>

            <div
              className="w-full md:w-1/2 text-center md:text-left font-cormorant text-drama"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 100}
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                {event.title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed font-baskerville">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
