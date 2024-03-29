const messages = {
    header: {
        name: "Raimon Espasa Bou",
        title: "Berlin based Full-Stack Web Developer",
        links: [
            {
                name: "Email",
                url: "mailto:raiesbo@gmail.com",
                icon: "far fa-envelope"
            },
            {
                name: "CodePen",
                url: "https://codepen.io/raiesbo",
                icon: "fab fa-codepen"
            },
            {
                name: "FreeCodeCamp",
                url: "https://www.freecodecamp.org/raiesbo",
                icon: "fab fa-free-code-camp"
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/raiesbo/",
                icon: "fab fa-linkedin-in"
            },
            {
                name: "GitHub",
                url: "https://github.com/raiesbo",
                icon: "fab fa-github-alt"
            },
            {
                name: "Portfolio",
                url: "https://raiesbo.com/",
                icon: "fas fa-home"
            }
        ]
    },
    sections: {
        profile: [
            "I am a Berlin-based **Full Stack developer** driven by design and specialized in **Front-End**, although I also enjoy working on the server side, and I am willing to learn any technology in order to get the desired results.",
            "Passionate about the details, I enjoy writing well-written and efficient code that translates into attractive and functional interfaces with modern frameworks. My 5-year experience as an architect has taught me not only the design and project development principles but also team work, collective ownership, empathy and constant learning mindset."
        ],
        skills: [
            {
                label: "Languages",
                content: "JavaScript, TypeScript, HTML, CSS, PHP, Python"
            },
            {
                label: "Libraries & Frameworks",
                content: "ReactJS, Next.js, Node.js, Sass, Jest, Cypress, Playwright, D3js"
            },
            {
                label: "Tools",
                content: "Git (GitHub & GitLab), GCP, MongoDB, PostgreSQL, Netlify, Vercel, Firebase, Postman, GCP, Hubspot, Auth0, Jira/Confluence"
            },
            {
                label: "Design",
                content: "Photoshop, Figma. Illustrator, InDesign"
            }
        ],
        projects: [
            {
                title: "Food Tracker",
                technologies: "Next.js, TypeScript, Sass, Prisma, Auth0, PostgreSQL",
                description: "Platform that seeks to increase the visibility of food trucks from any city and expose its quality and diversity while creating interactions with the users.It also provides additional value to the service providers by including features such as the possibility of creating orders.",
                links: {
                    repo: "hhttps://github.com/raiesbo/food-tracker",
                    website: "https://food-tracker-tfm.vercel.app/"
                },
                icons: {
                    repo: "fab fa-github-square fa-lg",
                    website: "fas fa-external-link-square-alt fa-lg"
                }
            },
            {
                title: "raiesbo.com",
                technologies: "React, Sass",
                description: "Online web portfolio where to describe some professional skills, experience, background, progress and showcase featured projects in the software development, web application and websites context.",
                links: {
                    repo: "https://github.com/raiesbo/devPortfolio",
                    website: "https://raiesbo.com/"
                },
                icons: {
                    repo: "fab fa-github-square fa-lg",
                    website: "fas fa-external-link-square-alt fa-lg"
                }
            },
            {
                title: "octocat Profiler",
                technologies: "React, CSS, Node, Express, GitHub API, D3.js.",
                description: "Improved version of the octocat Profiler v1. In this new version, the application counts with server end points to fetch and process the data from the GitHub API and be more efficient. Also includes new graphs in D3.js.",
                links: {
                    repo: "https://github.com/raiesbo/octocatProfile_v2",
                    website: "https://octocat.raiesbo.com/"
                },
                icons: {
                    repo: "fab fa-github-square fa-lg",
                    website: "fas fa-external-link-square-alt fa-lg"
                }
            }
        ],
        education: [
            {
                title: "Master’s Degree in Web Apps and Websites Development",
                university: "Open University of Catalonia",
                date: "2021 - 2023",
                extraInfo: null
            },
            {
                title: "Architecture",
                university: "Warsaw University of Technology",
                date: "2014 - 2015",
                extraInfo: "Erasmus Exchange Program"
            },
            {
                title: "Architecture",
                university: "Technical University of Valencia",
                date: "2010 - 2016",
                extraInfo: null
            }
        ],
        experience: [
            {
                position: "Software Engineer",
                company: "ServiceHero",
                place: "Berlin, Germany",
                date: "08.2022 - present",
                tasks: [
                    "Next.js/TypeScript Service providers platform development to manage their accepted deals.",
                    "Frontend and Backend integration with Hubspot services and database.",
                    "CI/CD management with GitHub actions and Google Cloud Platform.",
                ]
            },
            {
                position: "Full Stack Developer",
                company: "Webgears Group",
                place: "Berlin, Germany",
                date: "08.2021 - 07.2022",
                tasks: [
                    "Next.js aplication developement for multiple voucher white-labels and portals.",
                    "Unit, E2E, Regression testing implementation using Cypress and Jest.",
                    "Web optimization for better performance in Lighthouse."
                ]
            },
            {
                position: "Architect",
                company: "rundzwei Architekten",
                place: "Berlin, Germany",
                date: "04.2017 - 07.2021",
                tasks: [
                    "Teamwork in an international and multidisciplinary environment with flat team hierarchie and collective ownership of the projects.",
                    "Workflow in architecture competitions similar to agile methodology.",
                    "Website management with tasks such as updating the project or writing and publishing articles."
                ]
            },
            {
                position: "Architect Intern",
                company: "Funkciona Architekti",
                place: "Warsaw, Poland",
                date: "10.2016 - 03.2017",
                tasks: [
                    "Frequent business trips to visit construction sites in different countries of the European Union.",
                    "Permanent contact with contractors and disciplines coordination."
                ]
            },
            {
                position: "Architect Intern",
                company: "Antonio Altarriba Architects",
                place: "Valencia, Spain",
                date: "09.2015 - 07.2016",
                tasks: [
                    "3d modelling and rendering with Rhino 3d, vray and video-renderings with Lumion."
                ]
            }
        ],
        certs: [
            {
                title: "Responsive Web Design",
                school: "FreeCodeCamp",
                date: 2021
            },
            {
                title: "APIs and Microservices",
                school: "FreeCodeCamp",
                date: 2021
            },
            {
                title: "JavaScript Algorithms and Data Structures",
                school: "FreeCodeCamp",
                date: 2020
            }
        ],
        languages: [
            {
                language: "Spanish",
                level: "Native"
            },
            {
                language: "Catalan",
                level: "Native"
            },
            {
                language: "German",
                level: "Intermediate"
            },
            {
                language: "English",
                level: "Working Proficiency"
            },
        ]
    }
};

export default messages;