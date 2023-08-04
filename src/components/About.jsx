import React from 'react';
import Services from './Services';


const About = () => {
  const skills = [
    { name: "HTML, CSS && javaScript ", image: '/src/assets/icons/code.png' },
    { name: "Frontend Frameworks - React", image: '/src/assets/icons/react.png' },
    { name: "Backend Frameworks - Express js", image: '/src/assets/icons/backend.png' },
    { name: "mySQL & MongoDB", image: '/src/assets/icons/server.png' },
    { name: "Heroku, Firebase, Vercel", image: '/src/assets/icons/deploy.png' },
  ]




  return (
    <div className='px-7 md:px-10 sm:mt-24' id='about'>
      <h1 className='text-3xl mt-5 text-primary font-semibold'>About me</h1>
      <p className='text-white my-2 md:w-2/3 leading-[2]'>I am ... a</p>
      {/* techstack */}
      <div className="md:flex items-center my-7">
        <p className='text-primary text-8xl font-bold'>2+</p>
        <p className='text-white text-2xl md: ml-5'>Years of experience in working with web development technologies</p>

      </div>
      {/* skills card */}
      <div className='flex flex-col md:flex-row '>
        {
          skills.map((item, i) => {
            return (
              <div key={i} className='md:w-[256px] md:h-[254px] bg-slate-800 hover:bg-primary hover:scale-110 flex flex-col items-baseline justify-end my-3 md:m-3 p-5 shadow-sm transition-all duration-500 ease-in-out'>
                <img src={item.image} className='max-w-[60px] self-center m-auto' />
                <p className=' hover:text-black text-2xl mt-3 text-white font-semibold '>{item.name}</p>
              </div>
            )
          })
        }
      </div>
      <Services />
    </div>
  );
};

export default About;