/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ popAnimation)
/* harmony export */ });
function popAnimation () {
    const titles = document.querySelectorAll(".section-title");
    const bodies = document.querySelectorAll(".section-body");
    
    for (let i = 0; i < titles.length; i++) {
        const title = titles[i];
        title.style.animation = `popIn 400ms ease-out ${(400 * i) + 1600}ms`;
        title.style.animationFillMode = "backwards";
    
        const body = bodies[i];
        body.style.animation = `popIn 400ms ease-out ${(400 * i) + 1800}ms`;
        body.style.animationFillMode = "backwards";
    }
}

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
                label:"Languages",
                content: "JavaScript, HTML, CSS, Python"
            },
            {
                label:"Libraries & Frameworks",
                content: "React, Next, Node, Sass, Jest, Cypress, D3js"
            },
            {
                label:"Tools",
                content: "Git(GitHub & GitLab), MongoDB, Heroku, Firebase, Postman"
            },
            {
                label:"Design",
                content: "Photoshop, Figma. Illustrator, InDesign"
            }
        ],
        projects: [
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
            },
            {
                title: "webDevArchive",
                technologies: "React, CSS, Node, Express, MongoDB.",
                description: "List of all the finished and on going projects untill the current date. Each project contains github/urls links if available and is organiced by date so the top projects are the most current ones.",
                links: {
                    repo: "https://github.com/raiesbo/webDevArchive",
                    website: "https://archive.raiesbo.com/"
                },
                icons: {
                    repo: "fab fa-github-square fa-lg",
                    website: "fas fa-external-link-square-alt fa-lg"
                }
            }
        ],
        education: [
            {
                title: "Postgrad. Web Development and Design",
                university: "Open University of Catalonia",
                date: "2021 - Present",
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
                position: "Full Stack Developer",
                company: "Webgears Group",
                place: "Berlin, Germany",
                date: "08.2021 - present",
                tasks: [
                    "Next.js aplication developement for multiple voucher white-labels and portals. ",
                    "Unit, E2E, Regression testing implementation using Cypress and Jest.",
                    "Web optimization for better performance in Lighthouse"
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
                level: "Upper intermediate"
            },
            {
                language: "English",
                level: "Working Proficiency"
            },
        ]
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (messages);

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactLinksView)
/* harmony export */ });
function contactLinksView (arr, parentElement) {
    for(let j = 0; j < arr.length; j++) {
        const {name, url, icon} = arr[j]

        // creating element
        const li = document.createElement('li');
        const a = document.createElement('a');
        const i = document.createElement('i');

        // anchor settings
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noreferrer");
        a.setAttribute("href", url);

        // i settings
        i.setAttribute("title", name);
        const classesList = icon.split(" ");
        for (let x = 0; x <= classesList.length; x++) {
            i.classList.add(classesList[x])
        }

        a.appendChild(i);
        li.appendChild(a);
        parentElement.appendChild(li);
    }
}

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ profileTranslator)
/* harmony export */ });
function profileTranslator (arr, parentElement) {
    const text = document.createElement("p");

    for (let i = 0; i < arr.length; i++) {
        const pArray = arr[i].split("**")

        for (let j = 0; j < pArray.length; j++) {

            if (j%2 !== 0) {
                const span = document.createElement("span");
                span.classList.add("bold");
                span.textContent = pArray[j]
                text.appendChild(span)
            } else {
                const span = document.createElement("span");
                span.textContent = pArray[j]
                text.appendChild(span)
            }

        }

        if (i !== pArray.length) {
            const br1 = document.createElement("br");
            const br2 = document.createElement("br");
            text.appendChild(br1);
            text.appendChild(br2);
        }

    }

    parentElement.appendChild(text);
};

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ skillsView)
/* harmony export */ });
function skillsView(arr, parentElement) {
    for (let j = 0; j < arr.length; j++) {
        const li = document.createElement("li");
        const spanTitle = document.createElement("span");
        const spanList = document.createElement("span");

        spanTitle.classList.add("skill-category");
        spanList.classList.add("skill-list");

        spanTitle.textContent = arr[j].label;
        spanList.textContent = arr[j].content;

        li.appendChild(spanTitle)
        li.appendChild(spanList)
        parentElement.appendChild(li);
    }
}

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectsView)
/* harmony export */ });
function projectsView (arr, parentElement) {
    for (let j = 0; j < arr.length; j++) {
        const project = arr[j];

        const li = document.createElement("li");
        li.classList.add("project");

        const header = document.createElement("header");
        header.classList.add("projects-header");

        const h4 = document.createElement("h4");
        h4.classList.add("project-name");
        h4.textContent = project.title;

        const spanLinks = document.createElement("span");
        spanLinks.classList.add("project-links");

        // Git anchot
        const aGit = document.createElement("a");
        aGit.setAttribute("href", project.links.repo);
        aGit.setAttribute("target", "_blanck");
        aGit.setAttribute("rel", "noreferrer");
        const iGit = document.createElement("i");
        addClassList(iGit, project.icons.repo)
        aGit.appendChild(iGit);

        // Web anchot
        const aWeb = document.createElement("a");
        aWeb.setAttribute("href", project.links.website);
        aWeb.setAttribute("target", "_blanck");
        aWeb.setAttribute("rel", "noreferrer");
        const iWeb = document.createElement("i");
        addClassList(iWeb, project.icons.website);
        aWeb.appendChild(iWeb);
    
        spanLinks.append(aGit, aWeb);
        header.append(h4, spanLinks)

        // Tech list
        const pTech = document.createElement("p");
        pTech.classList.add("project-tech");
        pTech.textContent = project.technologies;

        // Description
        const pDescription = document.createElement("p");
        pDescription.classList.add("projects");
        pDescription.classList.add("description");
        pDescription.textContent = project.description;

       
        li.append(header, pTech, pDescription);
        parentElement.appendChild(li)
    }

     // CTA
     const btn = '<a class="btn" href="https://raiesbo.com/" target="_blank">VISIT THE PORTFOLIO</a>';
     parentElement.innerHTML += btn;
}


const addClassList = (element, classList) => {
    const arr = classList.split(" ");
    for (let i = 0; i < arr.length; i++) {
        element.classList.add(arr[i]);
    }
};

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ educationView)
/* harmony export */ });
function educationView (arr, parentElement) {
    for (let i = 0; i < arr.length; i++) {
        const edu = arr[i];

        const li = document.createElement("li");
        li.classList.add("edu");

        const header = document.createElement("header");
        const h4 = document.createElement("h4");
        h4.classList.add("edu-name");
        h4.textContent = edu.title;

        header.appendChild(h4)

        const p = document.createElement("p");
        p.classList.add("edu__info");
        
        const spanUni = document.createElement("span");
        spanUni.classList.add("university");
        spanUni.textContent = edu.university;

        const spanDate = document.createElement("span");
        spanDate.classList.add("date");
        spanDate.textContent = edu.date;

        p.append(spanUni, spanDate);

        li.append(header, p);
        parentElement.appendChild(li);
    }
};

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ experienceView)
/* harmony export */ });
function experienceView (arr, parentElement) {

    for (let i = 0; i < arr.length; i++) {
        const job = arr[i];

        // header
        const li = document.createElement("li");
        li.classList.add("job");

        const header = document.createElement("header");
        const h4 = document.createElement("h4");
        h4.classList.add("job__title");
        h4.textContent = job.position;

        header.appendChild(h4)

        // specs
        const p = document.createElement("p");
        p.classList.add("job__info");

        const spanCompany = document.createElement("span");
        spanCompany.classList.add("job__info--company");
        spanCompany.textContent = job.company;

        const spanDate = document.createElement("span");
        spanDate.classList.add("job__info--date");
        spanDate.textContent = `${job.place} | ${job.date}`;

        p.append(spanCompany, spanDate);

        // description
        const ul = document.createElement("ul");
        ul.classList.add("job__description");

        for (let j = 0; j < job.tasks.length; j++) {
            const liTask = document.createElement("li");
            liTask.classList.add("job__description__item");
            liTask.textContent = job.tasks[j];
            ul.appendChild(liTask);
        }

        // append to view
        li.append(header, p, ul);
        parentElement.appendChild(li);
    }

};

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ certsView)
/* harmony export */ });
function certsView (arr, parentElement) {
    for (let i = 0; i < arr.length; i++) {
        const cert = arr[i];

        const li = document.createElement('li');
        li.classList.add("cert");

        const header = document.createElement("header");
        const h4 = document.createElement("h4");
        h4.classList.add("cert-name");
        h4.textContent = cert.title;

        header.appendChild(h4);

        const p = document.createElement("p");
        const spanAcademy = document.createElement("span");
        spanAcademy.classList.add("cert-academy");
        spanAcademy.textContent = cert.school;

        const spanDate = document.createElement("span");
        spanDate.classList.add("cert-date");
        spanDate.textContent = cert.date;

        p.append(spanAcademy, spanDate);

        li.append(header, p);
        parentElement.appendChild(li);
    }
};

/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ languagesView)
/* harmony export */ });
function languagesView (arr, parentElement) {
    for (let i = 0; i < arr.length; i++) {
        const lang = arr[i];
        const li = document.createElement("li");

        const h4 = document.createElement("h4");
        h4.classList.add("language");
        h4.textContent = lang.language;

        const span = document.createElement("span");
        span.classList.add("language-level");
        span.textContent = lang.level;

        li.append(h4, span);
        parentElement.appendChild(li);
    }
};

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animations_animation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _config_messages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10);




// import './css/styles.css';
// import css from './css/translateClasses.css';

(0,_animations_animation_js__WEBPACK_IMPORTED_MODULE_0__.default)();

const {header, sections} = _config_messages_js__WEBPACK_IMPORTED_MODULE_1__.default;
const {profile, skills, projects, education, experience, certs, languages} = sections;

// VARIABLES LEFT
const name = document.querySelector("#name");
const title = document.querySelector("#title");
const contactLinks = document.querySelector("#contact-links");

// VARIABLES RIGHT
const profileSection = document.querySelector("#profile");
const skillsSection = document.querySelector("#skills");
const projectsSection = document.querySelector("#projects");
const educationSection = document.querySelector("#education");
const experienceSection = document.querySelector("#experience");
const certsSection = document.querySelector("#certs");
const languagesSection = document.querySelector("#languages");


// HEADER MESSAGE ASSIGNMENT
name.textContent = header.name;
title.textContent = header.title;
// - contact links (icons)
(0,_utils__WEBPACK_IMPORTED_MODULE_2__.default)(header.links, contactLinks)


// SECTIONS MESSAGE ASSIGMENT
// - profile
;(0,_utils__WEBPACK_IMPORTED_MODULE_3__.default)(profile, profileSection);
// - skills
(0,_utils__WEBPACK_IMPORTED_MODULE_4__.default)(skills, skillsSection);
// - projects
(0,_utils__WEBPACK_IMPORTED_MODULE_5__.default)(projects, projectsSection);
// - education
(0,_utils__WEBPACK_IMPORTED_MODULE_6__.default)(education, educationSection);
// - experience
(0,_utils__WEBPACK_IMPORTED_MODULE_7__.default)(experience, experienceSection);
// - certs
(0,_utils__WEBPACK_IMPORTED_MODULE_8__.default)(certs, certsSection);
// - languages
(0,_utils__WEBPACK_IMPORTED_MODULE_9__.default)(languages, languagesSection);

})();

/******/ })()
;