const btnIcon = document.querySelector(".menu-btn");
const navigation = document.querySelector(".nav-container");
const menu = document.querySelector(".menu-navigation");

btnIcon.addEventListener('click', function(){
   navigation.classList.toggle('active')
   menu.classList.toggle('active')
})