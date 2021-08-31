export default function experienceView (arr, parentElement) {

    for (let i = 0; i < arr.length; i++) {
        const job = arr[i];

        // header
        const li = document.createElement("li");
        li.classList.add("job");

        const header = document.createElement("header");
        const h4 = document.createElement("h4");
        h4.classList.add("job__title");
        h4.textContent = job.position;

        header.appendChild(h4)

        // specs
        const p = document.createElement("p");
        p.classList.add("job__info");

        const spanCompany = document.createElement("span");
        spanCompany.classList.add("job__info--company");
        spanCompany.textContent = job.company;

        const spanDate = document.createElement("span");
        spanDate.classList.add("job__info--date");
        spanDate.textContent = `${job.place} | ${job.date}`;

        p.append(spanCompany, spanDate);

        // description
        const ul = document.createElement("lu");
        ul.classList.add("job__description");

        for (let j = 0; j < job.tasks.length; j++) {
            const liTask = document.createElement("li");
            liTask.classList.add("job__description__item");
            liTask.textContent = job.tasks[j];
            console.log(job.tasks[j]);
            ul.appendChild(liTask);
        }

        // append to view
        li.append(header, p, ul);
        parentElement.appendChild(li);
    }

};