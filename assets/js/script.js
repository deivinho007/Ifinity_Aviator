document.addEventListener('DOMContentLoaded',function(){
    const dropdownToggle = document.querySelectorAll('[data-dropdown-toggle]');
      dropdownToggle.forEach((toggle) => {
        toggle.addEventListener('click', function(){
            const parent = this.closest('.dropdown-item');
            parent.classList.toggle('active');
        })
      })
    
      document.addEventListener('click', function (e) {
           dropdownToggle.forEach((toggle) => {
            const parent = toggle.closest('.dropdown-item');
              if (!parent.contains(e.target)){
                parent.classList.remove('active')
              }
           })
      })
})


const searchToggle = document.getElementById('searchToggle');
const searchOverlay = document.getElementById('searchOverlay');
const closeSearch = document.getElementById('closeSearch');
const header = document.querySelector('header');

searchToggle.addEventListener('click', () => {
 searchOverlay.style.display = 'flex';
 
 setTimeout(() => {
  searchOverlay.querySelector('.search-input').focus();
 }, 100);

})

searchToggle.addEventListener('click', () => {
 header.style.background = 'none';

})


//fechar o botão de pesquisa
closeSearch.addEventListener('click', () => {
  searchOverlay.style.display = 'none';
})

closeSearch.addEventListener('click', () => {
  header.style.backgroundColor = 'hsl(278, 58%, 41%)';
})

//fechar com o esc

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    searchOverlay.style.display = 'none';
  }
})

//galeria

const imagens = document.querySelectorAll(".galeria img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");


imagens.forEach((img)=> {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.add("show");
  })
})
 
lightbox.addEventListener("click",() => {
  lightbox.classList.remove("show");
})

//abrir login

const openLoginBtn = document.getElementById('openLogin');
const containerLogin = document.querySelector('.container-login');


openLoginBtn.addEventListener('click', () => {
  containerLogin.classList.add('active')
})

// fechar ao clicar fora ou no esc 

containerLogin.addEventListener('click', (e)=> {
  if(e.target === containerLogin){
    containerLogin.classList.remove('active')
  }
})

document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape'){
    containerLogin.classList.remove('active')
  }
})

//Login
const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

registerLink.onclick = (e) =>{
  e.preventDefault();
  wrapper.classList.add('active');
};
