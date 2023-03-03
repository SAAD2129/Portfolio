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
    {
        name: "News 24",
        category: "react",
        url: "./assets/News-app.mp4",
        // img: "https://source.unsplash.com/random/470x342?anchor,news",
        img: "./images/news.jpeg",
        gitHub: "https://github.com/SAAD2129/News-24/tree/master",
    },
    {
        name: "Cloud Notes Frontend",
        category: "react",
        url: "https://cloudnotesbysaad.netlify.app/",
        // img: "https://source.unsplash.com/random/470x342?notes,todo",
        img: "./images/notes.jpeg",
        gitHub: "https://github.com/SAAD2129/Cloud-Notes",
    },
    {
        name: "Fashionaries E-Commerce",
        category: "front",
        url: "https://fahsionaries.netlify.app/",
        // img: "https://source.unsplash.com/random/470x342?shopping,cart",
        img: "./images/ecom.jpeg",
        gitHub: "https://github.com/SAAD2129/Web-Development-Projects/tree/main/assets/Eccom",
    },
    {
        name: "Stay Bnb home for Tourists",
        category: "front",
        url: "https://staybnbbysaad.netlify.app",
        // img: "https://source.unsplash.com/random/470x342?tourist,places",
        img: "./images/tour.jpeg",
        gitHub: "https://github.com/SAAD2129/Web-Development-Projects/tree/main/assets/Stay",
    },
    {
        name: "Foodistan Burger Shop",
        category: "front",
        url: "https://foodistanbysaad.netlify.app",
        // img: "https://source.unsplash.com/random/470x342?food,burger",
        img: "./images/burger.jpeg",
        gitHub: "https://github.com/SAAD2129/Web-Development-Projects/tree/main/assets/Burger",
    },
    {
        name: "Fitness Gym",
        category: "front",
        img: "./images/gym.jpeg",
        url: "https://fitnessgymbysaad.netlify.app/",
        // img: "https://source.unsplash.com/random/470x342/?gym,fitness",
        gitHub: "https://github.com/SAAD2129/Web-Development-Projects/tree/main/Gym%20Website",
    },
];

let html = document.querySelector(".html");
let css = document.querySelector(".css");
let js = document.querySelector(".js");
let tail = document.querySelector(".tail");
let boot = document.querySelector(".boot");
let react = document.querySelector(".react");
let dep = document.querySelector(".dep");
let git = document.querySelector(".git");
let mongo = document.querySelector(".mongo");
let mongoose = document.querySelector(".mongoose");
let node = document.querySelector(".node");
let sql = document.querySelector(".sql");
let php = document.querySelector(".php");
let exp = document.querySelector(".exp");
let lar = document.querySelector(".laravel");
let navLinks = Array.from(document.querySelectorAll(".nav_link"));
let bgTrans = Array.from(document.querySelectorAll(".bg-transparent"));
let projectGrid = document.querySelector(".project_grid");
let data = Projects;

const removeClasses = () => {
    navLinks.forEach((btn) => {
        btn.classList.remove("active");
    });
};
navLinks.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
        removeClasses();
        let txt = e.target.innerText;
        console.log(winScroll);
        if (txt.toLowerCase() == "home") {
            removeClasses();
            document.documentElement.scrollTop = "0";
            document.querySelector(".home").classList.add("active");
        } else if (txt.toLowerCase() == "about") {
            removeClasses();
            document.documentElement.scrollTop = "880";
        } else if (txt.toLowerCase() == "services") {
            removeClasses();
            document.documentElement.scrollTop = "1500";
        } else if (txt.toLowerCase() == "skills") {
            removeClasses();
            document.documentElement.scrollTop = "3100";
        } else if (txt.toLowerCase() == "projects") {
            removeClasses();
            document.documentElement.scrollTop = "4250";
        } else if (txt.toLowerCase() == "testimonials") {
            removeClasses();
            document.documentElement.scrollTop = "5350";
        } else if (txt.toLowerCase() == "contact") {
            removeClasses();
            document.documentElement.scrollTop = "15000";
        }
        // e.target.classList.add("active");
    });
});

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
                        <a href="${element.url}" target="_blank"><img src="${element.img}" />
                        </a>
                    </div>
                </div>`;
    }
    if (html == "")
        projectGrid.innerHTML =
            '<h1 class="mt-5 center">Work in Progress will be deployed soon.</h1>';
    else projectGrid.innerHTML = html;
};
const filterData = (cat) => {
    if (cat === "all") {
        data = Projects;
    } else {
        data = Projects.filter((proj) => proj.category === cat);
    }

    loadData();
};

bgTrans.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        bgTrans.forEach((btn) => {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");
        let cat = e.target.dataset.category;
        removeAnimations();
        let winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
        filterData(cat);
        let _1 = document.getElementById("1");
        let _0 = document.getElementById("0");
        let _2 = document.getElementById("2");
        let _3 = document.getElementById("3");
        let _4 = document.getElementById("4");
        let _5 = document.getElementById("5");
        let _6 = document.getElementById("6");
        let _7 = document.getElementById("7");
        let _8 = document.getElementById("8");

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
        if (_4) {
            _4.style.animationName = "trans";
            _4.style.animationDuration = "2.3s";
        }
        if (_5) {
            _5.style.animationName = "trans";
            _5.style.animationDuration = "3.2s";
        }
        if (_6) {
            _6.style.animationName = "trans";
            _6.style.animationDuration = "3.2s";
        }
        if (_7) {
            _7.style.animationName = "trans";
            _7.style.animationDuration = "3.5s";
        }
    });
});
const removeAnimations = () => {
    let _1 = document.getElementById("1");
    let _0 = document.getElementById("0");
    let _2 = document.getElementById("2");
    let _3 = document.getElementById("3");
    let _4 = document.getElementById("4");
    let _5 = document.getElementById("5");
    let _6 = document.getElementById("6");
    let _7 = document.getElementById("7");
    let _8 = document.getElementById("8");
    if (_0) _0.style.animationName = "";
    if (_1) _1.style.animationName = "";
    if (_3) _3.style.animationName = "";
    if (_4) _4.style.animationName = "";
    if (_5) _5.style.animationName = "";
    if (_6) _6.style.animationName = "";
    if (_7) _7.style.animationName = "";
    if (_2) _2.style.animationName = "";
    if (_8) _8.style.animationName = "";

    if (_0) _0.style.animationDuration = "0";
    if (_1) _1.style.animationDuration = "0";
    if (_3) _3.style.animationDuration = "0";
    if (_4) _4.style.animationDuration = "0";
    if (_5) _5.style.animationDuration = "0";
    if (_6) _6.style.animationDuration = "0";
    if (_7) _7.style.animationDuration = "0";
    if (_2) _2.style.animationDuration = "0";
    if (_8) _8.style.animationDuration = "0";
};
const removeSkillAnims = () => {
    exp.style.animationName = "";
    node.style.animationName = "";
    sql.style.animationName = "";
    mongo.style.animationName = "";
    mongoose.style.animationName = "";
    git.style.animationName = "";
    css.style.animationName = "";
    html.style.animationName = "";
    js.style.animationName = "";
    tail.style.animationName = "";
    react.style.animationName = "";
    boot.style.animationName = "";
    php.style.animationName = "";
    dep.style.animationName = "";
    lar.style.animationName = "";

    html.style.animationDuration = "";
    css.style.animationDuration = "";
    js.style.animationDuration = "";
    boot.style.animationDuration = "";
    php.style.animationDuration = "";
    exp.style.animationDuration = "";
    node.style.animationDuration = "";
    sql.style.animationDuration = "";
    mongo.style.animationDuration = "";
    mongoose.style.animationDuration = "";
    git.style.animationDuration = "";
    dep.style.animationDuration = "";
    tail.style.animationDuration = "";
    react.style.animationDuration = "";
    lar.style.animationDuration = "";
};
window.onscroll = () => {
    let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
    console.log(winScroll);

    if (winScroll > 2500) {
        exp.style.animationName = "incr";
        node.style.animationName = "incr";
        sql.style.animationName = "incr";
        mongo.style.animationName = "incr";
        mongoose.style.animationName = "incr";
        git.style.animationName = "incr";
        css.style.animationName = "incr";
        html.style.animationName = "incr";
        js.style.animationName = "incr";
        tail.style.animationName = "incr";
        react.style.animationName = "incr";
        boot.style.animationName = "incr";
        php.style.animationName = "incr";
        dep.style.animationName = "incr";
        lar.style.animationName = "incr";
        html.style.animationDuration = "2.5s";
        css.style.animationDuration = "2.8s";
        js.style.animationDuration = "3.0s";
        boot.style.animationDuration = "2.5s";
        php.style.animationDuration = "2.8s";
        exp.style.animationDuration = "2.5s";
        node.style.animationDuration = "2.8s";
        sql.style.animationDuration = "3s";
        mongo.style.animationDuration = "3s";
        mongoose.style.animationDuration = "3.5s";
        git.style.animationDuration = "3.5s";
        dep.style.animationDuration = "3.5s";
        tail.style.animationDuration = "3.0s";
        react.style.animationDuration = "2.5s";
        lar.style.animationDuration = "2.8s";
    }
    if (winScroll < 3700) {
        removeAnimations();
    }
    if (winScroll >= 3800) {
        removeSkillAnims();
        let _1 = document.getElementById("1");
        let _0 = document.getElementById("0");
        let _2 = document.getElementById("2");
        let _3 = document.getElementById("3");
        let _4 = document.getElementById("4");
        let _5 = document.getElementById("5");
        let _6 = document.getElementById("6");
        let _7 = document.getElementById("7");
        let _8 = document.getElementById("8");
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
        if (_4) {
            _4.style.animationName = "trans";
            _4.style.animationDuration = "2.3s";
        }
        if (_5) {
            _5.style.animationName = "trans";
            _5.style.animationDuration = "3.2s";
        }
        if (_6) {
            _6.style.animationName = "trans";
            _6.style.animationDuration = "3.2s";
        }
        if (_7) {
            _7.style.animationName = "trans";
            _7.style.animationDuration = "3.5s";
        }
        if (_8) {
            _8.style.animationName = "trans";
            _8.style.animationDuration = "3.7s";
        }
    }
    if (winScroll > 5000) removeAnimations();
    if (winScroll < 2000) removeSkillAnims();

    if (winScroll >= "0" && winScroll < "550") {
        removeClasses();
        document.querySelector(".home").classList.add("active");
    }
    if (winScroll >= "550" && winScroll < "1270") {
        removeClasses();
        document.querySelector(".about").classList.add("active");
    }
    if (winScroll >= "1270" && winScroll < "2470") {
        removeClasses();
        document.querySelector(".services").classList.add("active");
    }
    if (winScroll >= "2470" && winScroll < "3400") {
        removeClasses();
        document.querySelector(".skills").classList.add("active");
    }
    if (winScroll >= "3400" && winScroll < "5300") {
        removeClasses();
        document.querySelector(".projects").classList.add("active");
    }
    if (winScroll >= "5300") {
        removeClasses();
        document.querySelector(".test").classList.add("active");
    }
    if (winScroll >= "6000") {
        removeClasses();
        document.querySelector(".contact").classList.add("active");
    }
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

const scrollToContact = () => {
    document.documentElement.scrollTop = "6200";
};
