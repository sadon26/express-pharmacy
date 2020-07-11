const tabs = document.querySelectorAll('.explore div a');
const contents = document.querySelectorAll('.carousel.product');

for (let i = 0; i < tabs.length; i++) {
    contents[i].style.display = "none";
}

contents[0].style.display = "block";
tabs[0].style.borderTop = "3px solid #455065";

tabs.forEach((tab, index) => {
    tab.addEventListener("click", e => {
        e.preventDefault();
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].style.borderTop = "1px solid #ccd9e2";
            tabs[i].style.fontWeight = "300";
        }
        Array.from(contents).forEach(content => {
            content.style.display = "none";
        })
        tab.style.borderTop = "3px solid #455065";
        tab.style.fontWeight = "600";
        contents[index].style.display = "block";
    })
})

// const activeProduct = document.querySelectorAll(".explore div a");
// const carouselCovid = document.querySelector(".carousel.covid");
// const carouselBaby = document.querySelector(".carousel.baby");
// const link1 = document.querySelector(".explore");
// const body = document.body;

// link1.children[1].children[0].style.fontWeight = "600";
// link1.children[1].children[0].style.borderTop = "3px solid #455065";
// body.children[6].style.display = "none";
// body.children[7].style.display = "none";
// body.children[8].style.display = "none";
// body.children[9].style.display = "none";
// // body.children[6].classList.remove("baby");
// // body.children[7].classList.remove("personal");
// // body.children[8].classList.remove("health");
// // body.children[9].classList.remove("diabetic");

// Array.from(activeProduct).forEach((link, index) => {
//     link.addEventListener("click", e => {
//         e.preventDefault();  
//         if (index === 0) {
//             body.children[5].style.display = "block";
//             body.children[6].style.display = "none";
//             body.children[7].style.display = "none";
//             body.children[8].style.display = "none";
//             body.children[9].style.display = "none";
//             // body.children[5].classList.add("covid");
//             // body.children[6].classList.remove("baby");
//             // body.children[7].classList.remove("personal");
//             // body.children[8].classList.remove("health");
//             // body.children[9].classList.remove("diabetic");
//             body.children[6].style.display= "none";
//             link1.children[1].children[0].style.fontWeight = "600";
//             link1.children[1].children[1].style.fontWeight = "300";
//             link1.children[1].children[2].style.fontWeight = "300";
//             link1.children[1].children[3].style.fontWeight = "300";
//             link1.children[1].children[4].style.fontWeight = "300";
//             link1.children[1].children[0].style.borderTop = "3px solid #455065";
//             link1.children[1].children[1].style.borderTop = "1px solid #ccd9e2";
//             link1.children[1].children[2].style.borderTop = "1px solid #ccd9e2";
//             link1.children[1].children[3].style.borderTop = "1px solid #ccd9e2";
//             link1.children[1].children[4].style.borderTop = "1px solid #ccd9e2";
//             link1.children[1].children[0].style.transition = "all .5s";
//         }
//         if (index === 1) {
//             body.children[6].style.display = "block"
//             console.log(body.children[6])
//             body.children[5].style.display = "none";
//             body.children[6].style.display = "block";
//             body.children[7].style.display = "none";
//             body.children[8].style.display = "none";
//             body.children[9].style.display = "none";
//             // body.children[5].classList.remove("covid");
//             // body.children[6].classList.add("baby");
//             // body.children[7].classList.remove("personal");
//             // body.children[8].classList.remove("health");
//             // body.children[9].classList.remove("diabetic");
//             link1.children[1].children[0].style.fontWeight = "300";
//             link1.children[1].children[1].style.fontWeight = "600";
//             link1.children[1].children[2].style.fontWeight = "300";
//             link1.children[1].children[3].style.fontWeight = "300";
//             link1.children[1].children[4].style.fontWeight = "300";
//             link1.children[1].children[0].style.borderTop = "1px solid #ccd9e2";
//             link1.children[1].children[1].style.borderTop = "3px solid #455065";
//             link1.children[1].children[2].style.borderTop = "1px solid #ccd9e2";
//             link1.children[1].children[3].style.borderTop = "1px solid #ccd9e2";
//             link1.children[1].children[4].style.borderTop = "1px solid #ccd9e2";
//             link1.children[1].children[1].style.transition = "all .5s";
//         }
//         if (index === 2) {
//             body.children[5].style.display = "none";
//             body.children[6].style.display = "none";
//             body.children[7].style.display = "block";
//             body.children[8].style.display = "none";
//             body.children[9].style.display = "none";
//             link1.children[1].children[0].style.fontWeight = "300";
//             link1.children[1].children[1].style.fontWeight = "300";
//             link1.children[1].children[2].style.fontWeight = "600";
//             link1.children[1].children[3].style.fontWeight = "300";
//             link1.children[1].children[4].style.fontWeight = "300";
//             link1.children[1].children[0].style.borderTop = "1px solid #ccd9e2";
//             link1.children[1].children[1].style.borderTop = "1px solid #ccd9e2";
//             link1.children[1].children[2].style.borderTop = "3px solid #455065";
//             link1.children[1].children[3].style.borderTop = "1px solid #ccd9e2";
//             link1.children[1].children[4].style.borderTop = "1px solid #ccd9e2";
//             link1.children[1].children[2].style.transition = "all .5s";
//         }
//         if (index === 3) {
//             body.children[5].style.display = "none";
//             body.children[6].style.display = "none";
//             body.children[7].style.display = "none";
//             body.children[8].style.display = "block";
//             body.children[9].style.display = "none";
//             link1.children[1].children[0].style.fontWeight = "300";
//             link1.children[1].children[1].style.fontWeight = "300";
//             link1.children[1].children[2].style.fontWeight = "300";
//             link1.children[1].children[3].style.fontWeight = "600";
//             link1.children[1].children[4].style.fontWeight = "300";
//             link1.children[1].children[0].style.borderTop = "1px solid #ccd9e2";
//             link1.children[1].children[1].style.borderTop = "1px solid #ccd9e2";
//             link1.children[1].children[2].style.borderTop = "1px solid #ccd9e2";
//             link1.children[1].children[3].style.borderTop = "3px solid #455065";
//             link1.children[1].children[4].style.borderTop = "1px solid #ccd9e2";
//             link1.children[1].children[3].style.transition = "all .5s";
//         }
//         if (index === 4) {
//             body.children[5].style.display = "none";
//             body.children[6].style.display = "none";
//             body.children[7].style.display = "none";
//             body.children[8].style.display = "none";
//             body.children[9].style.display = "block";
//             link1.children[1].children[0].style.fontWeight = "300";
//             link1.children[1].children[1].style.fontWeight = "300";
//             link1.children[1].children[2].style.fontWeight = "300";
//             link1.children[1].children[3].style.fontWeight = "300";
//             link1.children[1].children[4].style.fontWeight = "600";
//             link1.children[1].children[0].style.borderTop = "1px solid #ccd9e2";
//             link1.children[1].children[1].style.borderTop = "1px solid #ccd9e2";
//             link1.children[1].children[2].style.borderTop = "1px solid #ccd9e2";
//             link1.children[1].children[3].style.borderTop = "1px solid #ccd9e2";
//             link1.children[1].children[4].style.borderTop = "3px solid #455065";
//             link1.children[1].children[4].style.transition = "all .5s";
//         }
//     })
// })