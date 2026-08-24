import React from 'react'
import Image from 'next/image'

const objectiveArr = [
  { title: "Understand", svg: "/bulb-black.svg", text: "Understand communication challenges in multilingual and low-resource healthcare settings." },
  { title: "Build", svg: "/bricks-black.svg", text: "Build tools to simplify and translate patient documents like consent forms and discharge summaries." },
  { title: "Improve", svg: "/brain-black.svg", text: "Improve speech-based systems for clinical documentation and multilingual EHR entry." },
  { title: "Promote", svg: "/men-black.svg", text: "Promote collaboration between healthcare professionals and language technology researchers." },
  { title: "Organize", svg: "/folder-black.svg", text: "Organize a shared task on health question answering in Indian languages to support low resource NLP research." },
]

const Objectives = () => {
  return (
    <section className="relative bg-[#F8F6F1] py-8 xl:py-12 overflow-hidden text-black" id="objectives">
      {/* Background Wave */}

      <div className="relative z-10 px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
        <div className='flex flex-row justify-between items-center mb-6'>
          <h2 className="text-xl xl:text-3xl font-semibold font-(family-name:--font-raleway) ">
            Objectives
          </h2>
        </div>

        {/* Introduction text */}
        <div className="text-left mb-6">
          <p className="xl:text-xl text-base leading-relaxed mb-3 text-justify">
            The primary goal of this workshop is to explore how advances in Natural Language Processing (NLP), Computational Linguistics (CL), and Artificial Intelligence (AI) can be leveraged to address communication challenges in multilingual and resource-constrained healthcare environments.
          </p>
        </div>

        {/* Clean list format */}
        <div className="space-y-4">
          {objectiveArr.map((item, index) => (
            <div key={index} className="flex items-center text-left">
              <div className={`flex-shrink-0 relative w-12 h-12 lg:w-14 lg:h-14 } hidden xl:block`}>
                <Image
                  src={item.svg}
                  alt={item.title}
                  fill
                  className={`object-contain ${item.svg === "/bulb-black.svg" ?"scale-200":"scale-75"}`}
                />
              </div>
              <div className="flex-1 list-item xl:list-none ml-4">
                <p className="xl:text-xl text-sm leading-relaxed mb-3">
                  <span className="font-medium text-[#0A0A0A]">{item.text.split(" ")[0]}</span>
                  <span className="ml-1 text-justify">{item.text.split(" ").slice(1).join(" ")}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Objectives