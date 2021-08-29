import messages from '../config/messages.js';

const {header} = messages;

// VARIABLES
const name = document.querySelector("#name");
const title = document.querySelector("#title");
const contactLinks = document.querySelector("#contact-links");
// const skillsList = document.querySelector("#skills");


// HEADER MESSAGE ASSIGNMENT
name.textContent = header.name;
title.textContent = header.title;

const contactLinksFiller = (arr) => {
    for(let j = 0; j < arr.length; j++) {
        const {name, url, icon} = arr[j]

        const li = document.createElement('li');
        const a = document.createElement('a');
        const i = document.createElement('i');

        // add anchor attributes
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noreferrer");
        a.setAttribute("href", url);

        // adding icon classes
        const classesList = icon.split(" ");
        for (let x = 0; x <= classesList.length; x++) {
            i.classList.add(classesList[x])
        }
        i.setAttribute("title", name);

        a.appendChild(i);
        li.appendChild(a);

        contactLinks.appendChild(li);
    }
}

contactLinksFiller(header.links)

