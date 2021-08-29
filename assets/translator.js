export default function translator (arr) {
    const text = document.createElement("p");

    for (let i = 0; i < arr.length; i++) {
        const pArray = arr[i].split("**")

        for (let j = 0; j < pArray.length; j++) {

            if (j%2 !== 0) {
                const span = document.createElement("span");
                span.classList.add("bold");
                span.textContent = pArray[j]
                text.appendChild(span)
            } else {
                const span = document.createElement("span");
                span.textContent = pArray[j]
                text.appendChild(span)
            }

        }

        if (i !== pArray.length) {
            const br1 = document.createElement("br");
            const br2 = document.createElement("br");
            text.appendChild(br1);
            text.appendChild(br2);
        }

    }

    return text
};