import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="relative bg-black py-8 xl:py-12 text-white font-(family-name:--font-roboto)" id="footer">
      <div className="px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Mobile view - stacked layout */}
          <div className="md:hidden space-y-8 col-span-1">
            {/* NLP section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-200 mb-4">NLP - AI4HEALTH</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="#about" className="hover:text-lime-400 transition">About</Link></li>
                <li><Link href="#call-for-papers" className="hover:text-lime-400 transition">Timeline</Link></li>
                <li><Link href="#shared-task" className="hover:text-lime-400 transition">Shared Tasks</Link></li>
                <li><Link href="#invited-speakers" className="hover:text-lime-400 transition">Invited Speakers</Link></li>
                <li><Link href="#workshop-schedule" className="hover:text-lime-400 transition">Schedule</Link></li>
                <li><Link href="#organizers" className="hover:text-lime-400 transition">Organizers</Link></li>
              </ul>
            </div>
            
            {/* Past Edition section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-200 mb-4">Past Edition</h3>
              <ul className="space-y-3 text-base">
                <li><Link href="https://ltrc.iiit.ac.in/icon2024-nlp-ai4health/" className="hover:text-lime-400 transition">ICON 2024 NLP-AI4Health</Link></li>
              </ul>
            </div>

            {/* Developers section (mobile) - Now below Past Edition */}
            <div>
              <h3 className="text-lg font-semibold text-gray-200 mb-4">Developers</h3>
              <p className="text-base text-gray-300">
                <Link href="mailto:aaryan.kashyap@research.iiit.ac.in" className="hover:text-lime-400 transition">Aaryan Kashyap</Link>, 
                <Link href="mailto:amisha.amisha@research.iiit.ac.in" className="hover:text-lime-400 transition"> Amisha</Link>, 
                <Link href="mailto:aparnakalavakolanu334@gmail.com" className="hover:text-lime-400 transition"> Aparna</Link>, 
                <Link href="mailto:patelaryan0914@gmail.com" className="hover:text-lime-400 transition"> Aryan Patel</Link>
              </p>
            </div>

            {/* Contact Info section (mobile) */}
            <div>
              <h3 className="text-lg font-semibold text-gray-200 mb-4">Contact Info</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-2">
                  {/* EMAIL ICON */}
                  <div className="w-5 h-5 mt-0.5 flex-shrink-0 -ml-6 relative">
                    <Image
                      src="/mail.svg"
                      alt="Email"
                      fill
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                  <div>
                    <p><Link href="mailto:nlpai4health@gmail.com" className="hover:text-lime-400 transition">nlpai4health@gmail.com</Link></p>
                    <p><Link href="mailto:ltrc.office1@iiit.ac.in" className="hover:text-lime-400 transition">ltrc.office1@iiit.ac.in</Link></p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  {/* WEBSITE ICON */}
                  <div className="w-5 h-5 mt-0.5 flex-shrink-0 -ml-6 relative">
                    <Image
                      src="/website.svg"
                      alt="Website"
                      fill
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                  <p><Link href="https://ltrc.iiit.ac.in/" className="hover:text-lime-400 transition">https://ltrc.iiit.ac.in/</Link></p>
                </div>
                <div className="flex items-start gap-2">
                  {/* PHONE ICON */}
                  <div className="w-5 h-5 mt-0.5 flex-shrink-0 -ml-6 relative">
                    <Image
                      src="/Phone.svg"
                      alt="Phone"
                      fill
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                  <div>
                    <p className="text-gray-300">+91-40-6653 1581</p>
                    <p className="text-gray-300">+91-40-6653 1413</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Address section (mobile) - Now separate */}
            <div>
              <h3 className="text-lg font-semibold text-gray-200 mb-4">Address</h3>
              <div className="space-y-4 text-sm">
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-300 font-medium">Language Technologies Research Centre (LTRC)</p>
                    <p className="text-gray-300">1st Floor, Kohli Center on Intelligent Systems (KCIS)</p>
                    <p className="text-gray-300">International Institute of Information Technology</p>
                    <p className="text-gray-300">Gachibowli, Hyderabad, Telangana - 500 032</p>
                    <p className="text-gray-300">India</p>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Christian Medical College</p>
                    <p className="text-gray-300">IDA Scudder Rd, Vellore, Tamil Nadu - 632 004</p>
                    <p className="text-gray-300">India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop view columns (hidden on mobile) */}
          {/* NLP - AI4HEALTH (desktop) */}
          <div className="hidden md:block col-span-1">
            <h3 className="text-xl font-semibold text-gray-200 mb-6">NLP - AI4HEALTH</h3>
            <ul className="space-y-3 text-sm">
                <li><Link href="#about" className="hover:text-lime-400 transition">About</Link></li>
                <li><Link href="#call-for-papers" className="hover:text-lime-400 transition">Timeline</Link></li>
                <li><Link href="#shared-task" className="hover:text-lime-400 transition">Shared Tasks</Link></li>
                <li><Link href="#invited-speakers" className="hover:text-lime-400 transition">Invited Speakers</Link></li>
                <li><Link href="#workshop-schedule" className="hover:text-lime-400 transition">Schedule</Link></li>
                <li><Link href="#organizers" className="hover:text-lime-400 transition">Organizers</Link></li>
              </ul>
          </div>

          {/* Past Edition and Developers (desktop) - Combined in one column */}
          <div className="hidden md:block col-span-1">
            <div className="space-y-8">
              {/* Past Edition section */}
              <div>
                <h3 className="text-xl font-semibold text-gray-200 mb-6">Past Edition</h3>
                <ul className="space-y-3 text-md text-[#FAFAFA]">
                  <li><Link href="https://ltrc.iiit.ac.in/icon2024-nlp-ai4health/" className="hover:text-lime-400 transition">ICON 2024 NLP-AI4Health</Link></li>
                </ul>
              </div>

              {/* Developers section - Now below Past Edition */}
              <div>
                <h3 className="text-xl font-semibold text-gray-200 mb-6">Developers</h3>
                <ul className="space-y-3 text-md text-[#FAFAFA]">
                  <li><Link href="mailto:aaryan.kashyap@research.iiit.ac.in" className="hover:text-lime-400 transition">Aaryan Kashyap</Link></li>
                  <li><Link href="mailto:amisha.amisha@research.iiit.ac.in" className="hover:text-lime-400 transition">Amisha</Link></li>
                  <li><Link href="mailto:aparnakalavakolanu334@gmail.com" className="hover:text-lime-400 transition">Aparna</Link></li>
                  <li><Link href="mailto:patelaryan0914@gmail.com" className="hover:text-lime-400 transition">Aryan Patel</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Info (desktop) */}
          <div className="hidden col-span-1 md:block">
            <h3 className="text-xl font-semibold text-gray-200 mb-6">Contact Info</h3>
            <div className="space-y-4 text-md text-[#FAFAFA]">
              <div className="flex items-start gap-2">
                {/* EMAIL ICON */}
                <div className="w-6 h-6 mt-0.5 flex-shrink-0 -ml-8 relative">
                  <Image
                    src="/mail.svg"
                    alt="Email"
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div>
                <div>
                  <p><Link href="mailto:nlpai4health@gmail.com" className="hover:text-lime-400 transition">nlpai4health@gmail.com</Link></p>
                  <p><Link href="mailto:ltrc.office1@iiit.ac.in" className="hover:text-lime-400 transition">ltrc.office1@iiit.ac.in</Link></p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                {/* WEBSITE ICON */}
                <div className="w-6 h-6 mt-0.5 flex-shrink-0 -ml-8 relative">
                  <Image
                    src="/website.svg"
                    alt="Website"
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div>
                <p><Link href="https://ltrc.iiit.ac.in/" className="hover:text-lime-400 transition">https://ltrc.iiit.ac.in/</Link></p>
              </div>
              <div className="flex items-start gap-2">
                {/* PHONE ICON */}
                <div className="w-6 h-6 mt-0.5 flex-shrink-0 -ml-8 relative">
                  <Image
                    src="/Phone.svg"
                    alt="Phone"
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div>
                <div>
                  <p className="text-gray-300">+91-40-6653 1581</p>
                  <p className="text-gray-300">+91-40-6653 1413</p>
                </div>
              </div>
            </div>
          </div>

          {/* Address Section (desktop) - Separate rightmost column */}
          <div className="hidden col-span-1 md:block">
            <h3 className="text-xl font-semibold text-gray-200 mb-6">Address</h3>
            <div className="space-y-4 text-sm text-[#FAFAFA]">
              <div className="space-y-4">
                <div>
                  <p className="text-gray-300 font-medium">Language Technologies Research Centre (LTRC)</p>
                  <p className="text-gray-300">1st Floor, Kohli Center on Intelligent Systems (KCIS)</p>
                  <p className="text-gray-300">International Institute of Information Technology</p>
                  <p className="text-gray-300">Gachibowli, Hyderabad, Telangana - 500 032</p>
                  <p className="text-gray-300">India</p>
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Christian Medical College</p>
                  <p className="text-gray-300">IDA Scudder Rd, Vellore, Tamil Nadu - 632 004</p>
                  <p className="text-gray-300">India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer