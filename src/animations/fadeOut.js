const descriptSect = document.querySelector(".description");
const skillsSect = document.querySelector(".skills");
const projectsSect = document.querySelector(".projects");
const educationSect = document.querySelector(".education");
const expSect = document.querySelector(".experience");
const certsSect = document.querySelector(".certs");
const langSect = document.querySelector(".languages");

const sections = [descriptSect, skillsSect, projectsSect, educationSect, expSect, certsSect, langSect];

// console.log(certsSect.parentElement)
// console.log(certsSect.children)

// const paths = {
//     "description": descriptSect,
//     "skills": skillsSect,
//     "projects": projectsSect,
//     "education": educationSect,
//     "experience": expSect,
//     "certs": certsSect,
//     "languages": langSect
// };

// const pathsArr = Object.values(sections)
// const keyArr = Object.keys(sections)

// console.log(pathsArr)
// console.log(keyArr)
// console.log(descriptSect)

for (let i = 0; i < sections.length; i++) {

    sections[i].addEventListener("mouseover", (e) => {
        // console.log(e.target.parentNode)
        // console.log(e.target.parentNode)
        // console.log(e.target)
        // console.log([e.target.value, ...e.target.children])
        // console.log(e.fromElement)
        fade(e.target, sections[i].childNodes, sections)

        // const sectionChildren = []
        // for (let x of sections[i].childNodes) {
        //     sectionChildren.push(x)
        // }

        // console.log(sectionChildren)
        // console.log(e.target)
        // if (sectionChildren.includes(e.target)) {
        //     sections[i].style.opacity = 1;
        // } else {
        //     sections[i].style.opacity = 0.3;
        // }

    })

    sections[i].addEventListener("mouseout", () => {
        // console.log(e.target)
        solid(sections)
    })

}

const fade = (target, children, arr) => {
    for (let j = 0; j < arr.length; j++) {

        const sectionChildren = []
        for (let x of children) {
            sectionChildren.push(x)
        }

        console.log(sectionChildren)
        console.log(target)
        if (sectionChildren.includes(target)) {
            arr[j].style.opacity = 1;
        } else {
            arr[j].style.opacity = 0.3;
        }
        // console.log(arr[id].nextElementSibling)
        // console.log(target.value)
        // childrenArr.includes(arr[id].nextElementSibling) ? arr[j].style.opacity = 1 : arr[j].style.opacity = 0.3;
    }
}

const solid = (arr) => {
    for (let j = 0; j < arr.length; j++) {
        arr[j].style.opacity = 1;
    }
}

// descriptSect.style.opacity = 0.3
// skillsSect.style.opacity = 0.3
// projectsSect.style.opacity = 0.3
// educationSect.style.opacity = 0.3
// expSect.style.opacity = 0.3
// certsSect.style.opacity = 0.3
// langSect.style.opacity = 0.3
