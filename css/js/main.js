
const menuToggle = document.querySelector(".menu-toggle");

const navigation = document.querySelector(".navigation");

const navigationLinks = document.querySelectorAll(".nav-link");


// Mobile Navigation Toggle

if (menuToggle && navigation) {

    menuToggle.addEventListener("click", function () {

        const isOpen =
            menuToggle.getAttribute("aria-expanded") === "true";

        menuToggle.setAttribute(
            "aria-expanded",
            String(!isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Open navigation" : "Close navigation"
        );

        navigation.classList.toggle("is-open", !isOpen);

    });


    // Close menu after clicking a navigation link

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation"
            );

            navigation.classList.remove("is-open");

        });

    });

}
