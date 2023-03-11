let Projects = [
   {
      name: "Cloud Notes",
      category: "mern",
      url: "https://cloud-notes-bysaad.herokuapp.com/",
      // img: "https://source.unsplash.com/random/470x342?notes,todo",
      img: "./images/notes.jpeg",
      gitHub: "https://github.com/SAAD2129/Cloud-Notes",
   },
   {
      name: "Pizzata",
      category: "php",
      url: "https://github.com/SAAD2129/Pizzata",
      img: "./images/pizzata.png",
      gitHub: "https://github.com/SAAD2129/Pizzata",
   },
   {
      name: "Instagram Clone",
      category: "mern",
      url: "https://github.com/SAAD2129/Instagram-Clone",
      img: "./images/insta.jpeg",
      gitHub: "https://github.com/SAAD2129/Instagram-Clone",
   },
   {
      name: "E-commerce ",
      category: "mern",
      url: "./assets/Shopify.mp4",
      // img: "https://source.unsplash.com/random/470x342?shopping,cart",
      img: "./images/ecom.jpeg",
      gitHub: "https://github.com/SAAD2129/EccomerceSite/tree/master",
   },
];

let projectGrid = document.querySelector(".project_grid");
let data = Projects;

const removeClasses = () => {
   navLinks.forEach((btn) => {
      btn.classList.remove("active");
   });
};

const loadData = () => {
   let html = "";
   for (let i = 0; i < data.length; i++) {
      const element = data[i];
      html += `<div class="card" >
                    <div class="card-body relative" id="${i}">
                        <div class="card-title">
                            <a href="${element.gitHub}" class="flex item-center gap-1"  target="_blank">
                            <span class="text-white">${element.name}</span>
                            <i class="uil uil-github text-white med-font"></i></a>                        
                        </div>
                        <p class="card-text">${element.category}</p>
                        <a href="${element.url}" target="_blank"><img width="300" height="200" alt="${element.name}" src="${element.img}" />
                        </a>
                    </div>
                </div>`;
   }
   if (html == "")
      projectGrid.innerHTML =
         '<h1 class="mt-5 center">Work in Progress will be deployed soon.</h1>';
   else projectGrid.innerHTML = html;
};

const navLinks = Array.from(document.querySelectorAll(".nav_link"));
navLinks.forEach((btn) => {
   btn.addEventListener("click", (e) => {
      removeClasses();
      e.target.classList.add("active");
   });
});
const removeAnimations = () => {
   let _1 = document.getElementById("1");
   let _0 = document.getElementById("0");
   let _2 = document.getElementById("2");
   let _3 = document.getElementById("3");
   if (_0) _0.style.animationName = "";
   if (_1) _1.style.animationName = "";
   if (_3) _3.style.animationName = "";
   if (_0) _0.style.animationDuration = "0";
   if (_1) _1.style.animationDuration = "0";
   if (_3) _3.style.animationDuration = "0";
};

window.onscroll = () => {
   menuBtn.style.left = "1rem";
   navBar.style.left = "-100%";
   menuBtn.classList.remove("uil-times");
   menuBtn.classList.add("uil-bars");
   let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

   if (winScroll < 3700) {
      removeAnimations();
   }
   if (winScroll >= 3800) {
      let _1 = document.getElementById("1");
      let _0 = document.getElementById("0");
      let _2 = document.getElementById("2");
      let _3 = document.getElementById("3");
      if (_0) {
         _0.style.animationName = "trans";
         _0.style.animationDuration = ".2s";
      }
      if (_1) {
         _1.style.animationName = "trans";
         _1.style.animationDuration = ".5s";
      }
      if (_2) {
         _2.style.animationName = "trans";
         _2.style.animationDuration = ".6s";
      }
      if (_3) {
         _3.style.animationName = "trans";
         _3.style.animationDuration = "1.8s";
      }
   }
   if (winScroll > 5000) removeAnimations();
};
loadData();

// Menu
let menuBtn = document.querySelector(".menu_btn");

let navBar = document.querySelector(".nav_bar");

menuBtn.addEventListener("click", () => {
   if (navBar.style.left === "0%") {
      menuBtn.style.left = "1rem";
      navBar.style.left = "-100%";
      menuBtn.classList.remove("uil-times");
      menuBtn.classList.add("uil-bars");
   } else {
      navBar.style.left = "0%";
      menuBtn.style.left = "1rem";
      menuBtn.classList.add("uil-times");
      menuBtn.classList.remove("uil-bars");
   }
});
