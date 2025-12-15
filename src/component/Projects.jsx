import project1 from '../assets/icons/newblogProject.png'
import project2 from '../assets/icons/mentalProject.png'

const ProjectCard = ({ title, img, description, href }) => {
    return (
        <article className='relative max-w-sm bg-gray-800 overflow-hidden shadow-lg'>
            <div className='absolute z-0 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 w-40 h-40 sm:w-60 sm:h-60'></div>

            <figure>
                <div className='relative z-10 group'>
                    <img src={img} alt={title} className='w-full object-cover h-48 duration-300 transition-transform group-hover:scale-110' />
                    <a href={href} target='_blank'
                        className='absolute h-[202px] inset-0 flex items-center justify-center bg-purple-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <button className='bg-white font-medium text-black px-2.5 py-2 rounded-3xl shadow hover:text-white hover:bg-[#2879d5] '>Live Preview</button>
                    </a>
                </div>
            </figure>

            <div className='px-6 py-4'>
                <header className='text-white font-bold text-xl mb-2'>{title}</header>
                <p className='text-gray-200 text-base'>{description}</p>
            </div>
        </article>
    )
}
const Projects = () => {
    const listProjects = [
        {
            id: 1,
            img: project1,
            description: 'Created a website with a basic user interface.',
            title: 'Newblog Project',
            href: 'https://portfolio-1kcko5f6e-binhs-projects-cfc537e3.vercel.app/'
        },
        {
            id: 2,
            img: project2,
            description: 'Built a website with a user interface and user interaction for booking appointments.',
            title: 'Mental Project',
            href: 'https://mental-project.vercel.app/'
        },
        {
            id: 3,
            img: project1,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, odit!',
            title: 'project 3',
            href: '#'
        },
        {
            id: 4,
            img: project1,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, odit!',
            title: 'project 4',
            href: '#'
        },
    ]
    return (
        <main
            id='Projects'
            className='p-4'
        >
            <section data-aos='fade-up' data-aos-delay='300'>
                <header className='text-center'>
                    <h1 className='text-3xl text-white sm:text-4xl font-bold mb-6'>
                        My <span className='text-purple-400'>Projects</span>
                    </h1>
                    <p className='text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, aperiam.
                    </p>
                </header>
            </section>
            <section data-aos='fade-up' data-aos-delay='500' className='flex flex-wrap gap-4 justify-center mt-6'>
                {listProjects.map((project) => {
                    return (
                        <ProjectCard
                            key={project.id}
                            img={project.img}
                            title={project.title}
                            description={project.description}
                            href={project.href}
                        />
                    )
                })}
            </section>
        </main>
    )
}

export default Projects