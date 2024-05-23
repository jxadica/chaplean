let mobileMenu= document.querySelector(".mobileMenu");
let menu= document.querySelector(".menu");
let container= document.querySelector(".container");
let searchSec= document.querySelector(".mobileSearch");
let menuPart= document.querySelector('.menuPart');
let menuBut = document.querySelector(".menu");
let exit = document.querySelector('.exit');
let headMenu= document.querySelector(".headMenu");

function displayMenu (){
    mobileMenu.style.display="block";
    container.style.display='none';
    menuPart.style.display='none';
}

function displayMain () {
    mobileMenu.style.display="none";
    searchSec.style.display='none';
    container.style.display='block';
    menuPart.style.display='flex';
    exit.style.display='none';
    menu.style.display='block';
    headMenu.style.display='none'
    container.style.filter='none'
}

function displaySearch (){
container.style.display='none';
searchSec.style.display='block';
menuPart.style.display='none'
}

function showHeadMenu(){
    exit.style.display='block';
    menu.style.display='none';
    headMenu.style.display='flex';
    menuPart.style.display='none';
    container.style.filter='blur(2px)';
}