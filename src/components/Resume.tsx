const Resume = () => {
    const EDUCATION_DATA = [
        {
            education: "BSc. Computer Science",
            institution: "University of Eldoret",
            place_of_study: "Eldoret, Kenya",
            duration: "2021 - Present",
            description: "",
        },
        {
            education: "Game Development Unity C#",
            institution: "Maliyo Academy",
            place_of_study: "Lagos, Nigeria (Remote)",
            duration: "Sept 2024 - Dec 2024",
            description: "",
        },
        {
            education: "ALX Software Engineering Essentials",
            institution: "ALX Africa",
            place_of_study: "Nairobi, Kenya",
            duration: "Sept 2023 - Dec 2024",
            description: "",
        },

    ];

    const EXPERIENCE_DATA = [
        {
            position: "Information Technology Intern - Elite Global Technologies",
            place_of_work: "Lagos, Nigeria (Remote)",
            duration: "Oct 2024 - Present",
            description:
                "Undergoing training in AI applications, focusing on tools like WatsonX.ai to enhance IT operations.",
        },
        {
            position: "Content Writer",
            place_of_work: "Remote",
            duration: "Aug 2024 - Present",
            description:
                "Crafting engaging web development articles for freeCodeCamp, leveraging technical expertise and SEO skills.",
        },
        {
            position: "Kenya Power And Lighting Company Trainee",
            place_of_work: "South Nyanza, Kenya (On-site)",
            duration: "May 2024 - July 2024",
            description:
                "Gained practical experience with Data Networks (Fiber Optics, VHF Radios), End User ICT-Support, and Power Systems Communication.",
        },
    ];

    return (
        <div className="text-primary font-semibold min-h-fit px-5">
            <div className="container mx-auto py-10">
                <h1 className="text-3xl mt-5 font-semibold mb-8">My Resume</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-10 relative">
                    {/* Education Section */}
                    <div className="relative">
                        <h2 className="text-2xl font-bold mb-8 text-light">Education</h2>
                        {EDUCATION_DATA.map((edu, index) => (
                            <div
                                key={index}
                                className="mb-0 pb-5 border-l-2 border-primary pl-5 relative"
                            >
                                <div className="absolute left-0 -ml-2 w-4 h-4 bg-gray-900 border-2 border-primary rounded-full"></div>
                                <h3 className="text-xl font-semibold mb-2">{edu.education}</h3>
                                <p className="text-gray-400 mb-1">{edu.duration}</p>
                                <p className="text-lg font-medium mb-1">{edu.institution}</p>
                                <p className="text-lg font-semibold mb-3">{edu.place_of_study}</p>
                                <p className="text-gray-500">{edu.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Experience Section */}
                    <div className="relative">
                        <h2 className="text-2xl font-bold mb-8 text-light">Experience</h2>
                        {EXPERIENCE_DATA.map((exp, index) => (
                            <div
                                key={index}
                                className="mb-0 pb-5 border-l-2 border-primary pl-5 relative"
                            >
                                <div className="absolute left-0 -ml-2 w-4 h-4 bg-gray-900 border-2 border-primary rounded-full"></div>
                                <h3 className="text-xl font-semibold mb-2">{exp.position}</h3>
                                <p className="text-gray-400 mb-1">{exp.duration}</p>
                                <p className="text-lg font-semibold mb-1">{exp.place_of_work}</p>
                                <p className="text-gray-500">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
