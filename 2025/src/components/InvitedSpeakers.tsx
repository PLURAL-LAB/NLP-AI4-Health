"use client";

import Image from "next/image";

const people = [
  {
    name: "Tanmoy Chakraborty",
    image: "/faculty/speakerimage1.png",
    affiliation: "IIT Delhi",
  },
  {
    name: "Dr. Parag R. Rindani",
    image: "/faculty/speakerimage2.png",
    affiliation: "Wockhardt Hospitals",
  }
];

const Organizers = () => {
  return (
    <div
      className=" relative py-8 xl:py-12 text-black font-(family-name:--font-roboto)"
      id="invited-speakers"
    >
      <div className="px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
        <h2 className="text-xl xl:text-3xl font-bold mb-4 font-(family-name:--font-raleway)">
          Invited Speakers
        </h2>

        <div className="grid grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
          {people.map((person, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className=" overflow-hidden shadow-lg h-28 w-20 xl:h-44 xl:w-36 relative">
                <Image
                  src={person.image}
                  alt={person.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-tl-2xl"
                />
              </div>
              <span className="mt-3 text-[10px] xl:text-base font-bold">
                {person.name}
              </span>
              <span className="text-[8px] xl:text-sm text-black mt-1">
                {person.affiliation}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Organizers;
