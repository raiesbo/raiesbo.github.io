export default function contactLinksView (arr, parentElement) {
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