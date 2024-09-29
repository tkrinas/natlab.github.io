document.addEventListener('DOMContentLoaded', function() {
    var langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            var menu = document.getElementById('lang-menu');
            var expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !expanded);
            if (menu.style.display === "none" || menu.style.display === "") {
                menu.style.display = "block";
            } else {
                menu.style.display = "none";
            }
        });
    } else {
        console.error('Element with ID "lang-toggle" not found.');
    }

    // Handle the Back to Top button
    var backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {  // Check if the back-to-top element exists
        window.onscroll = function() {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                backToTopButton.style.display = "block"; // Show the button after scrolling 200px
            } else {
                backToTopButton.style.display = "none"; // Hide the button when at the top
            }
        };

        // Smooth scroll to the top when the button is clicked
        backToTopButton.addEventListener("click", function(event) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scrolling to the top
        });
    } else {
        console.error('Element with ID "back-to-top" not found.');
    }
});

function setLanguage(lang) {
    const englishElements = document.querySelectorAll('.lang-en');
    const greekElements = document.querySelectorAll('.lang-gr');
    const logo = document.getElementById('uoa-logo');
    const langCode = document.getElementById('lang-code');
    
    if (lang === 'en') {
        // Switch to the English logo
        if (logo) {
            logo.src = 'images/uoa_logo_en.svg'; // Update the image source to English
        }

        if (langCode) {
            logo.innerText = 'EN';
        }

        englishElements.forEach(el => {
            el.classList.add('active');
            el.style.display = 'inline'; // Show English elements
        });
        greekElements.forEach(el => {
            el.classList.remove('active');
            el.style.display = 'none'; // Hide Greek elements
        });

    } else {
        // Switch to the Greek logo
        if (logo) {
            logo.src = 'images/uoa_logo_gr.svg'; // Update the image source to Greek
        }

        if (langCode) {
            logo.innerText = 'GR';
        }

        greekElements.forEach(el => {
            el.classList.add('active');
            el.style.display = 'inline'; // Show Greek elements
        });
        englishElements.forEach(el => {
            el.classList.remove('active');
            el.style.display = 'none'; // Hide English elements
        });
    }

    // Hide the dropdown menu after selection
    var menu = document.getElementById('lang-menu');
    if (menu) {
        menu.style.display = "none";
    }
}
