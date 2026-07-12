// ==========================================
// HyperLaunch AI
// Main Application Script
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    console.log("🚀 HyperLaunch AI Loaded Successfully!");

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Animate feature cards on hover
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-10px)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
        });
    });

    console.log("✅ HyperLaunch AI Ready");
});
