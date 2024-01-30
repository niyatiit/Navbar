const icon1  = document.querySelector('#first_icon');
const icon2  = document.querySelector('#second_icon');
const navbar = document.querySelector('#navbar');

icon1.addEventListener("click",()=>{
    navbar.style.display = 'block';
    icon2.style.display = 'block';
    icon1.style.display = 'none';
})
icon2.addEventListener("click",()=>{
    navbar.style.display = 'none';
    icon1.style.display = 'block';
    icon2.style.display = 'none';
})