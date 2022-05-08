"use strict"

let buttonDark = document.getElementById("buttonDark");
let body = document.getElementById("body");
buttonDark.addEventListener('click', darkMod);

function darkMod(){
 body.classList.toggle('dark');
}
