import React from 'react'
import Navbar from './Navbar'
import imgavatar from '../assets/icons/avarta.jpeg'
import instagram from '../assets/icons/Instagram_icon.png'
import facebook from '../assets/icons/Facebook_Logo.png'
import github from '../assets/icons/github-icon.png'

const Hero = () => {
    return (
        <div className='relative overflow-hidden min-h-[550px] sm:min-h-[600px] flex flex-col items-center'>
            <div className='md:min-h-[550px] h-[500px] w-[450px] bg-linear-to-r absolute from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] z-2 top-28 right-2 rounded-4xl transform rotate-45 '>
            </div>

            <Navbar />
            <main id='Home'
                className='flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pb-24 md:pt-32 pt-24 mt-14 md:mt-0 z-10'
            >
                <section className='flex-1 mr-28 md:text-left mt-10 md:mt-0 relative'
                    data-aos='fade-up'
                    data-aos-delay='500'
                >
                    <div className='absolute -z-10 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 -left-12'></div>
                    <header>
                        <h1 className='text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4'>
                            Binh Truong Phu
                        </h1>
                        <h2 className='text-xl sm:text-4xl md:text-2xl font-bold text-[#3e0f4a] md:text-[#c744ec] mb-2'>
                            Frontend Developer
                        </h2>
                    </header>
                    <p className='text-base sm:text-lg md:text-lg text-gray-200 mb-6'>
                        Motivated Front-End Developer Trainee with a solid foundation in HTML, CSS, and JavaScript. Familiar with building responsive user interfaces using React and Tailwind CSS. Eager to learn from real-world projects, improve coding skills, and contribute to a professional development team.
                    </p>
                    <div className='flex items-center space-x-4 mb-6'>
                        <a href={'https://github.com/phubinh06092002?tab=repositories'}>
                            <img src={github} alt="github" className='w-11 h-11' />
                        </a>
                        <a href={'https://www.facebook.com/truong.phubinh.52/'}>
                            <img src={facebook} alt="facebook" className='w-11 h-11' />
                        </a>
                        <a href={'https://www.instagram.com/tr_phu_binh/'}>
                            <img src={instagram} alt="instagram" className='w-11 h-11' />
                        </a>
                    </div>
                    <a href="#" download>
                        <button className='inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_#800080b3] rounded-full text-lg'>
                            Download CV
                        </button>
                    </a>
                </section>
                <figure data-aos='fade-up' data-aos-delay='500' className='flex-1 flex justify-center md:justify-end mt-0 flex-col items-center'>
                    <img src={imgavatar} alt="avatar"
                        className='h-[300px] sm:h-[400px] md:h-[485px] w-[250px] sm:w-[480px] object-cover rounded-lg'
                    />
                    <figcaption className='text-3xl text-white'></figcaption>
                </figure>
            </main>
        </div>
    )
}

export default Hero