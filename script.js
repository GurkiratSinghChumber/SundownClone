// Initialize LocomotiveScroll
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"), // Main container for smooth scrolling
  smooth: true, // Enable smooth scrolling
});

// Show fixed image on mouse enter
var elemC = document.querySelector("#elem_container");
var fixed = document.querySelector("#fixed-image");
elemC.addEventListener("mouseenter", function () {
  fixed.style.display = "block";
});
// Hide fixed image on mouse leave
elemC.addEventListener("mouseleave", function () {
  fixed.style.display = "none";
});

// Change background image of fixed image on mouse enter for each element
var elems = document.querySelectorAll(".elem");
elems.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    var image = e.getAttribute("data-image");
    fixed.style.backgroundImage = `url(${image})`;
  });
});

// Function to handle animation on page 4
function page4Animation() {
  let p4_image = document.querySelector("#page4_image");
  let p4_right = document.querySelector("#page4_right");
  let h1_style = document.querySelectorAll(".h1_style");
  let left_des = document.querySelector(".P_des");
  // Add click event listener to each element with class h1_style
  h1_style.forEach((Element) => {
    Element.addEventListener("click", async () => {
      // Add and remove classes for animation
      p4_right.classList.add("hidden");
      left_des.style.opacity = 0;
      await new Promise((resolve) => setTimeout(resolve, 500));
      p4_right.classList.remove("hidden");
      left_des.style.opacity = 1;
      // Remove and add class for styling
      let prev_elem = document.querySelector(".h1_styled");
      if (prev_elem) {
        prev_elem.classList.remove("h1_styled");
      }
      Element.classList.add("h1_styled");
      // Change image source based on data-image attribute
      image = Element.getAttribute("data-image");
      p4_image.src = image;
    });
  });
}

// Function to initialize Swiper
function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

// Function to handle menu animation
function menuAnimation() {
  let full_scr = document.querySelector("#full-scr");
  let menu = document.querySelectorAll("#menu");
  let navImg = document.querySelector("nav img");
  let link_divs = document.querySelectorAll("#links a");
  let flag = 0;
  // Add click event listener to each menu element
  menu.forEach((men) => {
    men.addEventListener("click", () => {
      if (flag == 0) {
        // Show full screen menu
        full_scr.style.top = 0;
        navImg.style.opacity = 0;
        link_divs.forEach((link_div) => {
          link_div.style.opacity = 1;
        });
        flag = 1;
      } else {
        // Hide full screen menu
        full_scr.style.top = "-100%";
        navImg.style.opacity = 1;
        link_divs.forEach((link_div) => {
          link_div.style.opacity = 0;
        });
        flag = 0;
      }
    });
  });
}

// Call necessary functions
swiperAnimation();
page4Animation();
menuAnimation();

// Add dormant class to loader after 2 seconds
let loaderPage = document.getElementById("loader");
setTimeout(function () {
  loaderPage.classList.add("dormant");
}, 2000);
