export default function projectsView (arr, parentElement) {
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
}


const addClassList = (element, classList) => {
    const arr = classList.split(" ");
    for (let i = 0; i < arr.length; i++) {
        element.classList.add(arr[i]);
    }
};