import websiteImg1 from '../assets/ecommerce-websites.jpg';
import websiteImg2 from '../assets/food-ecommerce.jpg';
import websiteImg3 from '../assets/website-blog.jpg';

export default function Projects() {

  const config = {
    projects: [
      {
        image: websiteImg1,
        description: 'An Ecommerce website built with MERN Stack',
        link: 'https://github.com/vinishakv'
      },
      {
        image: websiteImg2,
        description: 'A Food Ecommerce website built with MERN Stack',
        link: 'https://github.com/vinishakv'
      },
      {
        image: websiteImg3,
        description: 'Basic Blog Website',
        link: 'https://github.com/vinishakv'
      },
    ]
  };

  return (
    <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-primary text-white">

      <div className="w-full">
        <div className="flex flex-col px-10 py-5">
          <h1 className='text-4xl border-b-4 border-secondary mb-2 w-[150px] font-bold'>
            Projects
          </h1>
          <p>These are some of my best projects.</p>
        </div>
      </div>

      <div className="w-full">
        <div className='flex flex-col md:flex-row px-10 gap-5'>

          {config.projects.map((project, index) => (
            <div key={index} className='relative'>
              
              <img
                className='h-[200px] w-[300px]'
                src={project.image}
                alt="Project preview"
              />

              <div className='project-desc'>
                <p className='text-center px-5 py-5'>{project.description}</p>

                <div className='flex justify-center'>
                  <a
                    className='btn'
                    href={project.link}
                    target='_blank'
                    rel='noreferrer'
                  >
                    View Project
                  </a>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
