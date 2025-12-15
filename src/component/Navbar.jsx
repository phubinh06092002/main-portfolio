import React from 'react'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const NavbarLink = [
        { id: 1, name: 'Home', link: '#Home' },
        { id: 2, name: 'About', link: '#About' },
        { id: 3, name: 'Skills', link: '#Skills' },
        { id: 4, name: 'My Projects', link: '#Projects' }
    ]
    return (
        <header className='fixed top-0 left-0 w-full text-white z-20' data-aos='fade-up' data-aos-delay='300'>
            <div className='container mx-auto p-5 flex items-center justify-between'>
                {/* {Logo} */}
                <a href="#Home" className='italic font-bold text-white text-4xl'>Portfolio</a>
                {/* {Mobile Menu Toggle} */}
                <button className='md:hidden focus:outline-none' onClick={() => setIsOpen(!isOpen)}>
                    <FiMenu className='w-8 h-8 text-white' />
                </button>
                {/* {Desktop Navigation} */}
                <nav className='hidden md:flex items-center space-x-7'>
                    {NavbarLink.map((link) => (
                        <a key={link.id} href={link.link} className='hover:text-gray-200 text-white text-lg'>
                            {link.name}
                        </a>
                    ))}
                    <button className='inline-flex text-white text-lg border-2 focus:outline-none py-2 px-6 rounded-full hover:bg-purple-800'> Contact </button>
                </nav>
            </div>

            {/* {Mobile Navigation} */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-[#801b9c] absolute top-0 left-0 w-full h-screen flex flex-col items-center space-y-8 pt-16`}>
                {/* {Close Button} */}
                <button className='absolute top-5 right-5 text-white' onClick={() => (setIsOpen(false))}>
                    <FiX className='w-8 h-8' />
                </button>
                {/* {Mobile Navigation} */}
                {NavbarLink.map((link) => (
                    <a
                        key={link.id}
                        href={link.link}
                        className='hover:text-gray-300 text-white text-lg'
                        onClick={() => (setIsOpen(false))}
                    >
                        {link.name}
                    </a>
                ))}
                {/* {Contact Button} */}
                <button className='inline-flex text-white text-lg border-2 focus:outline-none py-2 px-6 rounded-full hover:bg-purple-800'> Contact </button>
            </div>
        </header>
    )
}

export default Navbar