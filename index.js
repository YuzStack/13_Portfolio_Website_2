const navContainer = document.querySelector(".primary-nav")

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        navContainer.classList.add("scrolled")
    } else {
        navContainer.classList.remove("scrolled")
    }
})

