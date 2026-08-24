import React from 'react'
// import Image from 'next/image'

const About = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#F6F5F7] to-white py-8 xl:py-12 overflow-hidden" id="about">
      <div className="relative z-10 px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
        <div className='flex flex-row justify-between items-center mb-6'>
          <h2 className="text-xl xl:text-3xl font-semibold font-(family-name:--font-raleway) text-[#222222]">
            About NLP-AI4Health 2025
          </h2>
        </div>
        <p className="xl:text-xl text-base mb-3 text-justify">

			NLP-AI4Health 2025 is a focused workshop on how Natural Language Processing (NLP) and Artificial Intelligence (AI) can improve multilingual and patient-centered healthcare communication. Organized by CMC Vellore and IIIT-Hyderabad (LTRC), the workshop provides a platform to advance inclusive, accessible, and culturally aware language technologies for healthcare.

We invite research contributions on topics such as low-resource medical NLP, simplification of clinical documents, speech-based tools for Electronic Health Records (EHRs), and ethically aligned, culturally sensitive AI systems.

A key feature of this year’s workshop is a shared task on Multilingual Health Question Answering, which encourages the development of inclusive and robust QA systems across Indian languages.

Held alongside IJCNLP-AACL 2025, the event will include keynote talks, paper presentations, and collaborative discussions, bringing together researchers, clinicians, developers, and policy experts to co-create practical and impactful language solutions for healthcare in diverse linguistic settings.


        </p>
      </div>
    </section>
  )
}

export default About
