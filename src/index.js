import popAnimation from './animations/animation.js';
import messages from './config/messages.js';
import {
    contactLinksView,
    profileTranslator,
    skillsView,
    projectsView,
    educationView,
    experienceView,
    certsView,
    languagesView
} from './utils';

popAnimation();

const {header, sections} = messages;
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

