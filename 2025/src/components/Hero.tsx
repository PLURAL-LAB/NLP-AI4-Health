import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className="relative px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-20 h-[50vh] xl:h-[60vh] bg-gradient-to-b from-[#10213E] to-black overflow-hidden" id="hero">
      {/* Background image */}
      <div className="absolute inset-0 z-0 opacity-50 xl:opacity-70">
        <Image
          src="/hero.png"
          alt="Hero Background"
          fill
          className="object-cover z-0 object-left hidden xl:block"
        />
        <Image
          src="/hero.png"
          alt="Hero Background"
          fill
          className="object-cover z-0 object-left xl:hidden"
        />
      </div>

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40 z-15"></div>

      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full">
        <div className="mt-12 xl:mt-16 flex flex-col space-y-6">
          <h1 className=" text-white" style={{ fontSize: 'clamp(1.1rem, 3.5vw, 1.8rem)', lineHeight: '1.4' }}>
            NLP-AI4Health: Second Workshop on Integrating NLP and AI for Multilingual and Patient-Centric Healthcare Communication
          </h1>
          
          {/* Date and venue */}
          <div className="text-center">
            <p className="font-semibold text-white" style={{ fontSize: 'clamp(1.5rem, 2vw, 1.5rem)' }}>
              On 23rd December, 2025 at{' '}
              <a href="https://www.afnlp.org/conferences/ijcnlp2025/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                IJCNLP AACL
              </a>
            </p>
            <p className="font-normal text-gray-300 mt-2" style={{ fontSize: 'clamp(1.2rem, 1.4vw, 1.5rem)' }}>
              Venue - Victor Menezes Convention Centre (VMCC), IIT Bombay, Mumbai, India <br />(20th-24th December, 2025)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero