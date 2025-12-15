import React from 'react'

const About = () => {
    return (
        <section id='About'
            className='min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6'
        >
            <div className='max-w-6xl w-full grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12 items-center justify-center'>
                <figure data-aos='fade-up' data-aos-delay='500'
                    className='flex flex-wrap justify-center gap-4 relative'
                >
                    <div className='h-[200px] w-[300px] sm:h-[300px] sm:w-[400px] lg:h-[300px] lg:w-[500px] bg-linear-to-l from-[#6d2897] via-[#6c95f5] to-[#bb61c5] absolute rotate-12 transform translate-x-1 -translate-y-1/2 z-0 top-0 rounded-full'>
                    </div>
                </figure>

                <article data-aos='fade-left' data-aos-delay='500' className='text-center lg:text-left relative'>
                    <div className='absolute z-0 w-40 h-40 sm:w-40 sm:h-40 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10'></div>
                    <header>
                        <h1 className='text-3xl font-bold mb-6 sm:mb-4 sm:text-4xl md:text-5xl lg:text-6xl'>
                            About Me
                        </h1>
                    </header>
                    <p className='text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed'>
                        Graduate in Information Technology from Nguyen Tat Thanh University, with a passion for Frontend Development. Skilled in HTML, CSS, JavaScript, and React.
                    </p>
                    <footer>
                        <button className='inline-flex border-2 text-sm sm:text-lg text-white px-2 py-4 sm:px-6 hover:bg-[#801b9c] hover:shadow-[0_0_40px_#800080b3] rounded-full focus:outline-none'>
                            Learn More
                        </button>
                    </footer>
                </article>
            </div>

        </section>
    )
}

export default About