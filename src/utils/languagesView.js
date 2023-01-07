export default function languagesView (arr, parentElement) {
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
}