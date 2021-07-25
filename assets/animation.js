const titles = document.querySelectorAll(".section-title");
const bodies = document.querySelectorAll(".section-body");

for (let i = 0; i < titles.length; i++) {
    const title = titles[i];
    title.style.animation = `popIn 400ms ease-out ${(400 * i) + 1600}ms`;
    title.style.animationFillMode = "backwards";

    const body = bodies[i];
    body.style.animation = `popIn 400ms ease-out ${(400 * i) + 1800}ms`;
    body.style.animationFillMode = "backwards";
}