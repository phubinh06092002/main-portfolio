import React from 'react'
import ReactIcon from '../assets/icons/react-icon.png'
import TailwindIcon from '../assets/icons/Tailwind.png'

const skillsData = [
    { id: 1, img: ReactIcon, title: 'React JS', description: 'Implemented reusable components (Navbar, Footer, Cards), Optimized layout for mobile, tablet, and desktop screens' },
    { id: 2, img: TailwindIcon, title: 'Tailwind CSS', description: 'Built a responsive blog interface using Tailwind CSS and React, Improved user experience with hover effects and animations ' },
]

const SkillsBox = ({ img, description, title }) => {
    return (
        <article className='bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center hover:bg-purple-800 transition-all duration-300'>
            <figure className='flex justify-center mb-4'>
                <img src={img} alt={title} className='w-16 h-16 sm:w-20 sm:h-20' />
            </figure>
            <header>
                <h3 className='text-lg sm:text-xl font-semibold mb-2'>{title}</h3>
            </header>
            <p className='text-gray-300 text-sm sm:text-base'>{description}</p>
        </article>
    )
}
export const Skills = () => {
    return (
        <section id='Skills'
            className='relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10'
        >
            <div className='absolute bg-[#cd3cf5] w-72 h-36 z-0 sm:w-96 sm:h-44 rounded-full blur-3xl opacity-50 sm:top-30 top-10  left-1/2 transform -translate-x-1/2'></div>

            <div data-aos='fade-up' data-aos-delay='300' className='relative z-20 text-center space-y-6 sm:space-y-10'>
                <header>
                    <h1 className='text-3xl sm:text-4xl font-bold'>
                        My experise <br /> and <span className='text-purple-400'>Skill</span>
                    </h1>
                    <p className='text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base '>
                        Languages: HTML5, CSS3, JavaScript <br />
                        Frameworks & Libraries: ReactJS, TailwindCSS <br />
                        Tools: GitHub, VS Code <br />
                        Other: Responsive Design, REST API integration, Component-based architecture
                    </p>
                </header>
            </div>
            <section data-aos='fade-up' data-aos-delay='500' className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-20'>
                {skillsData.map((skill) => {
                    return (
                        <SkillsBox
                            key={skill.id}
                            img={skill.img}
                            description={skill.description}
                            title={skill.title}
                        />
                    )
                })}
            </section>
        </section>

    )
}