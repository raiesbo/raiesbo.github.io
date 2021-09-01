export default function educationView (arr, parentElement) {
    for (let i = 0; i < arr.length; i++) {
        const edu = arr[i];

        const li = document.createElement("li");
        li.classList.add("edu");

        const header = document.createElement("header");
        const h4 = document.createElement("h4");
        h4.classList.add("edu-name");
        h4.textContent = edu.title;

        header.appendChild(h4)

        const p = document.createElement("p");
        p.classList.add("edu__info");
        
        const spanUni = document.createElement("span");
        spanUni.classList.add("university");
        spanUni.textContent = edu.university;

        const spanDate = document.createElement("span");
        spanDate.classList.add("date");
        spanDate.textContent = edu.date;

        p.append(spanUni, spanDate);

        li.append(header, p);
        parentElement.appendChild(li);
    }
};