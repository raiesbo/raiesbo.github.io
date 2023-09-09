export default function skillsView(arr, parentElement) {
    for (let j = 0; j < arr.length; j++) {
        const li = document.createElement("li");
        const pTitle = document.createElement("p");
        const pList = document.createElement("p");

        pTitle.classList.add("skill-category");
        pList.classList.add("skill-list");

        pTitle.textContent = arr[j].label;
        pList.textContent = arr[j].content;

        li.appendChild(pTitle)
        li.appendChild(pList)
        parentElement.appendChild(li);
    }
}