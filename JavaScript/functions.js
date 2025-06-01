document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTop");

    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener("click", function (e) {
            e.preventDefault(); // Prevents default anchor behavior
            window.scrollTo({
                top: 0,
                behavior: "smooth" // Enables smooth scrolling effect
            });
        });
    } else {
        console.error("scrollToTop button not found!");
    }
});
