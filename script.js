console.log("Netflix clone JS loaded");

// ==========================
// FAQ TOGGLE (ACCORDION)
// ==========================
const faqBoxes = document.querySelectorAll(".faqbox");

faqBoxes.forEach(box => {
    box.addEventListener("click", () => {
        const isOpen = box.classList.contains("open");

        // Close all
        faqBoxes.forEach(b => {
            b.classList.remove("open");
            b.querySelector("svg").style.transform = "rotate(0deg)";
        });

        // Open clicked one
        if (!isOpen) {
            box.classList.add("open");
            box.querySelector("svg").style.transform = "rotate(45deg)";
        }
    });
});


// ==========================
// EMAIL VALIDATION
// ==========================
const emailInput = document.querySelector(".hero input");
const getStartedBtn = document.querySelector(".btn-red");

getStartedBtn.addEventListener("click", () => {
    const email = emailInput.value.trim();

    if (email === "") {
        alert("Please enter your email address");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address");
        return;
    }

    alert("Welcome to Netflix! 🎉");
    emailInput.value = "";
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


// ==========================
// BUTTON HOVER EFFECT (UX)
// ==========================
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.opacity = "0.85";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.opacity = "1";
    });
});


// ==========================
// SMOOTH SCROLL (OPTIONAL)
// ==========================
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});
