import Typewriter from 'typewriter-effect';
// import heroImg from '../assets/img2.png';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div className='px-7 md:px-10 my-14 md:h-auto bg-[#1a1a29]' id='home'>
            <div className="w-full flex flex-col md:flex-row items-center justify-between">
                {/* texts section */}
                <div className="text-white">
                    <h5 className='text-3xl mt-12'>Hello there, I'm</h5>
                    <h1 className='font-semibold text-3xl md:text-5xl my-4'>
                        <Typewriter
                            options={{
                                strings: ['Preston Mayieka'],
                                autoStart: true,
                                loop: true,
                                delay: 100,
                                deleteSpeed: 250
                            }}
                        />

                    </h1>

                    <p className='md:w-96'>I am a
                        <Typewriter
                            options={{
                                strings: ['Web developer', 'Computer scientist', 'Tech Enthusiast', 'Open-Source Contributer'],
                                autoStart: true,
                                loop: true,
                                delay: 75,
                                deleteSpeed: 100
                            }} />

                    </p>
                    {/* buttons section */}
                    <div className="mt-5">
                        <Link to="about" className='active'>
                            <button className='btn bg-primary py-2 px-4 text-white rounded hover:bg-white hover:text-primary transition-all duration-500'>About me</button></Link>
                        <button className='btn outline px-5 py-1.5 rounded border-none text-white ml-5'><a href="/CV-Preston_Nyamweya.pdf" target='_blank'>Download CV</a></button>
                    </div>
                    {/* image */}
                </div>
                <div className="order-first md:order-last relative">
                    {/* <img src={heroImg} alt="" /> */}
                </div>

            </div>
            {/* separator */}
            <div className="h-24 w-full bg-[#181824] mx-auto absolute left-0 hidden md:block"></div>
        </div>
    );
};

export default Home;