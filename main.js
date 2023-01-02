import './src/css/styles.css';
import './src/css/translateClasses.css';

import popAnimation from './src/animations/animation.js';
import messages from './src/config/messages.js';
import {
  certsView, contactLinksView, educationView,
  experienceView, languagesView, profileTranslator, projectsView, skillsView
} from './src/utils';

popAnimation();

const { header, sections } = messages;
const { profile, skills, projects, education, experience, certs, languages } = sections;

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
contactLinksView(header.links, contactLinks)


// SECTIONS MESSAGE ASSIGMENT
// - profile
profileTranslator(profile, profileSection);
// - skills
skillsView(skills, skillsSection);
// - projects
projectsView(projects, projectsSection);
// - education
educationView(education, educationSection);
// - experience
experienceView(experience, experienceSection);
// - certs
certsView(certs, certsSection);
// - languages
languagesView(languages, languagesSection);


// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="/vite.svg" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `
