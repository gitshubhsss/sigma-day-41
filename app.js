let para = document.querySelector("#description");
console.dir(para);

// let links=document.querySelectorAll(".box a");
// for(i=0;i<links.length;i++){
//     links[i].style.color="green";
// }


// for (const link of links) {
//     link.style.color="red";
// }

let box=document.querySelector('.box')
box.classList.add("green")

let classes=document.querySelector("div");
let changecolor=document.querySelector("h2");
changecolor.classList.add("green");//the h2 tags heading will be green
let mainHeading=document.querySelector("h1");
mainHeading.classList.add("green","border");
mainHeading.classList.remove("border")//it will remove the border
