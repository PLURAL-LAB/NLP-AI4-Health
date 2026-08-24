import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Menu, ChevronRight } from 'lucide-react'

const navItems = [
  // { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Timeline', href: '#call-for-papers' },
  { label: 'Shared Tasks', href: '#shared-task' },
  { label: 'Invited Speakers', href: '#invited-speakers' },
  { label: 'Schedule', href: '#workshop-schedule' },
  { label: 'Organizers', href: '#organizers' },
  { label: 'Contact Us', href: '#footer' },
]

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA] text-black shadow-lg" id="home">
      <div className="px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-2 xl:py-5 flex justify-between items-center max-w-full relative">
        {/* Mobile: Logo with text */}
        <div className="xl:hidden flex items-center gap-3">
          <a href='#' className="flex items-center gap-3">
            <Image 
              src="/favicon1.png" 
              alt="NLP - AI4HEALTH Logo" 
              width={45} 
              height={45}
              className="w-12 h-12"
            />
            <div className="xl:text-2xl text-xl font-bold">NLP - AI4HEALTH</div>
          </a>
        </div>
        
        {/* Desktop: Logo positioned separately */}
        <div className="hidden xl:block">
          <a href='#' className="flex items-center">
            <Image 
              src="/favicon1.png" 
              alt="NLP - AI4HEALTH Logo" 
              width={45} 
              height={45}
              className="w-12 h-12 absolute left-16 2xl:left-20 top-1/2 transform -translate-y-1/2"
            />
            <div className="text-2xl font-bold">NLP - AI4HEALTH</div>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden xl:flex gap-8 text-base">
          {navItems.map(item => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-lime-400 font-semibold hover:border-b-2 hover:border-lime-400 transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
        
        {/* Mobile Navigation */}
        <div className="xl:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="w-7 h-7" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-xl font-semibold">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col">
                {navItems.map(item => (
                  <Link 
                    key={item.label} 
                    href={item.href}
                    className="flex justify-between items-center px-6 py-4 font-medium hover:text-lime-400 transition-colors duration-200"
                  >
                    {item.label}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default Navbar