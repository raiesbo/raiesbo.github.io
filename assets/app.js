import messages from '../config/messages.js';
import contactLinksFiller from '../utils/contactLinksFiller.js';
import profileTranslator from '../utils/translator.js';

const {header, sections} = messages;

// VARIABLES
const name = document.querySelector("#name");
const title = document.querySelector("#title");
const contactLinks = document.querySelector("#contact-links");
const profile = document.querySelector("#profile");
// const skillsList = document.querySelector("#skills");


// HEADER MESSAGE ASSIGNMENT
name.textContent = header.name;
title.textContent = header.title;
// - contact links (icons)
contactLinksFiller(header.links, contactLinks)


// SECTIONS MESSAGE ASSIGMENT
// - profile
profileTranslator(sections.profile, profile);
