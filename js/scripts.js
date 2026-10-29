/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/

document.querySelectorAll(".lang-switch [data-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-lang"), true);
    });
});

var navbarToggler = document.querySelector(".navbar-toggler");
var mobileNav = window.matchMedia("(max-width: 991.98px)");
document.querySelectorAll("#navbarResponsive .nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
        if (mobileNav.matches) navbarToggler.click();
    });
});

requestAnimationFrame(function () {
    var byId = {};
    document.querySelectorAll("#sideNav .nav-link").forEach(function (a) {
        var href = a.getAttribute("href") || "";
        if (href.charAt(0) === "#") byId[href.slice(1)] = a;
    });
    var current = null;
    var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            var link = byId[entry.target.id];
            if (!link || link === current) return;
            if (current) current.classList.remove("active");
            link.classList.add("active");
            current = link;
        });
    }, { rootMargin: "0px 0px -40% 0px" });
    document.querySelectorAll("section.resume-section[id]").forEach(function (section) {
        obs.observe(section);
    });
});
