"use strict"

let buttonDark = document.getElementById("buttonDark");
let p = document.getElementsByClassName('card-text');

let body = document.getElementById("body");
buttonDark.addEventListener('click', darkMod);
let contenedores = document.getElementsByClassName('card-body');

let nav = document.getElementsByClassName('nav-link');
let borderNav = document.getElementsByClassName('nav-item');
let socio = document.getElementById('socios-margin');
console.log(socio);


function darkMod(){
    if (body.className == "dark-off"){
        body.classList.add('dark-on');
        body.classList.remove('dark-off');
        socio.classList.add('sociodark');
        socio.classList.remove('socios-margin');      
        for (let i = 0; i < contenedores.length; i++) {
            const element = contenedores[i];
          contenedores[i].classList.add('dark-on');
        
        };
      
        for (let i = 0; i < p.length; i++) {
            const element = p[i];
          p[i].classList.add('dark-on');
         
        };
        for (let i = 0; i < nav.length; i++) {
            const element = nav[i];
            nav[i].classList.add('dark-on');
         
        };
        for (let i = 0; i < borderNav.length; i++) {
            const element = borderNav[i];
            borderNav[i].classList.add('nav-item-dark');
        };
       
       
        }else{
            body.classList.add('dark-off');
            body.classList.remove('dark-on');
            socio.classList.remove('sociodark');
            socio.classList.add('socios-margin');  
            for (let i = 0; i < contenedores.length; i++) {
                const element = contenedores[i];
              contenedores[i].classList.remove('dark-on');
            
                
            };
            for (let i = 0; i < p.length; i++) {
                const element = p[i];
              p[i].classList.add('dark-on');
            
            };
            for (let i = 0; i < nav.length; i++) {
                const element = nav[i];
                nav[i].classList.remove('dark-on');
             
            };
            for (let i = 0; i < borderNav.length; i++) {
                const element = borderNav[i];
                borderNav[i].classList.remove('nav-item-dark');
            };
           
        }
    }



