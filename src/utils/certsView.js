export default function certsView (arr, parentElement) {
    for (let i = 0; i < arr.length; i++) {
        const cert = arr[i];

        const li = document.createElement('li');
        li.classList.add("cert");

        const header = document.createElement("header");
        const h4 = document.createElement("h4");
        h4.classList.add("cert-name");
        h4.textContent = cert.title;

        header.appendChild(h4);

        const p = document.createElement("p");
        const spanAcademy = document.createElement("span");
        spanAcademy.classList.add("cert-academy");
        spanAcademy.textContent = cert.school;

        const spanDate = document.createElement("span");
        spanDate.classList.add("cert-date");
        spanDate.textContent = cert.date;

        p.append(spanAcademy, spanDate);

        li.append(header, p);
        parentElement.appendChild(li);
    }
};