// ganti gambar details

function changeImage(element) {
  const mainImage = document.getElementById("mainImage");
  mainImage.src = element.src;
}


// Menu details
const menuLink = document.getElementById("menu");
const aboutLink = document.getElementById("about-resto");
const couponsLink = document.getElementById("coupons");

const menuDiv = document.querySelector(".menu");
const aboutDiv = document.querySelector(".about");
const couponsDiv = document.querySelector(".coupons");

menuLink.addEventListener("click", function (event) {
    event.preventDefault();
    menuDiv.classList.remove("hidden");
    aboutDiv.classList.add("hidden");
    couponsDiv.classList.add("hidden");
});

aboutLink.addEventListener("click", function (event) {
    event.preventDefault();
    menuDiv.classList.add("hidden");
    aboutDiv.classList.remove("hidden");
    couponsDiv.classList.add("hidden");
});

couponsLink.addEventListener("click", function (event) {
    event.preventDefault();
    menuDiv.classList.add("hidden");
    aboutDiv.classList.add("hidden");
    couponsDiv.classList.remove("hidden");
});
// Menu details


const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

const sb = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// JavaScript code
function search_resto() {
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("restoran");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "block";
    }
  }
}

// Swiper

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  spaceBetween: 1,
  centerSlide: true,
  autoplay: {
    delay: 2000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const swiper2 = new Swiper(".swiper2", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  spaceBetween: 10,
  slidesPerView: 1,
  centerSlide: true,

  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});
const swiper3 = new Swiper(".swiper3", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 2,
  spaceBetween: 10,
  centerSlide: true,

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },

  thumbs: {
    swiper: swiper,
  },
});
