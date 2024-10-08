

const About = () => {
    // const skills = [
    //     { name: "HTML, CSS && javaScript ", image: '/assets/icons/code.png', altText: 'An image of Web Development' },
    //     { name: "Frontend Frameworks - React", image: '/assets/icons/react.png', altText: 'An image of React' },
    //     { name: "Backend Frameworks - Express js", image: '/assets/icons/backend.png', altText: 'An image of Backend' },
    //     { name: "mySQL & MongoDB", image: '/assets/icons/server.png', altText: 'An image of Database' },
    //     { name: "Heroku, Firebase, Vercel", image: '/assets/icons/deploy.png', altText: 'An image of Deployment' },
    // ]



    // calculate years of experience

    const startDate = new Date(2022, 0, 1); // January 1, 2022
    const currentDate = new Date();
    const yearsOfExperience = currentDate.getFullYear() - startDate.getFullYear();

    return (
        <div className='py-5 md:px-5 px-5 sm:mt-24' id='about'>
            <h1 className='text-3xl mt-5 text-primary font-semibold'>About me</h1>
            <p className='text-white font-normal my-2 md:w-11/12 leading-[2] text-lg' >I enjoy solving technical problems, researching and developing new technologies, designing software applications for different platforms. <br />I enjoy meeting people and working with them in a team environment.<br /> I also enjoy interacting with clients and customers. <br />My strong customer service skills allow me to do this well. I am a quick learner with a fun, outgoing personality.</p>
            {/* techstack */}
            <div className="md:flex items-center my-7">
                <p className='text-primary text-8xl font-bold'>{yearsOfExperience}+</p>
                <p className='text-white text-2xl md: ml-5'>Years of experience in working with web development technologies</p>

            </div>
            {/* skills card */}
            {/* <div className='flex flex-col md:flex-row md:flex-wrap sm:flex-wrap '>
                {
                    skills.map((item, i) => {
                        return (
                            <div key={i} className='md:w-[256px] md:h-[254px] bg-slate-800 hover:scale-110 flex flex-col items-baseline justify-end my-3 md:m-3 p-5 shadow-sm transition-all duration-500 ease-in-out'>
                                <img src={item.image} alt={item.altText} className='max-w-[60px] self-center m-auto' />
                                <p className=' text-2xl mt-3 text-white font-semibold '>{item.name}</p>
                            </div>
                        )
                    })
                }
            </div> */}

        </div>
    );
};

export default About;