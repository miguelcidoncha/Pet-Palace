'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
}



/**
 * navbar toggle
 */

const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);


const closeNavbar = function () {
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
    if (window.scrollY > 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
}

addEventOnElem(window, "scroll", activeElemOnScroll);

/* serviciosbucle */



/*navbar dropdown

function dorpdown() {


    let discoverS = document.getElementById("discover-S");

    discoverE.addEventListener("mouseleave", function () {

        let dropdownContentS = document.getElementById("dropdown-content-S");
        dropdownContentE.style.display = "none";
    });
} */
/*
let loadSubPage = function (viewLocation, country) {
    let mainContent = $("#main-content");

    function loadCallback() {
        showContent(country);
    };

    mainContent.load(viewLocation, loadCallback);
}


function showContent(city) {
    let mainContent = document.getElementById('main-content');
    mainContent.style.backgroundImage = 'none';

    let cityContents = document.getElementsByClassName('city-content');
    for (let i = 0; i < cityContents.length; i++) {
        cityContents[i].style.display = 'none';
    }

    let selectedCityContent = document.getElementById(city);
    selectedCityContent.style.display = 'block';

    let buttonInfo = selectedCityContent.querySelector('.buttonInformation');
    let addContent = selectedCityContent.querySelector('.addContent');

    buttonInfo.addEventListener('click', function () {
        if (addContent.style.display === 'none') {
            addContent.style.display = 'block';
        } else {
            addContent.style.display = 'none';
        }
    });
}

*/