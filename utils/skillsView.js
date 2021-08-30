export default function skillsView(arr, parentElement) {
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