let heading=document.querySelector("h1");

heading.classList.add("center");



let images=document.querySelectorAll('img');
for(i=0;i<images.length;i++){
    images[i].classList.add("dom-img")
}

let para=document.querySelectorAll("p");

for (const par of para) {
    par.classList.add("textCenter")
}
