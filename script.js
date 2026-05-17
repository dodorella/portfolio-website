const sections =
document.querySelectorAll(".glass");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const top =
        section.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            section.classList.add("show");
        }
    });
});