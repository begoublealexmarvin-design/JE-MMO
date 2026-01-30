const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("navbar");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        toggle.textContent = "✖";
    } else {
        toggle.textContent = "☰";
    }
});
