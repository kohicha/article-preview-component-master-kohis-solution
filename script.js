
const popupbtn = document.querySelector(".popup");

const popupContent = document.querySelector(".popup-content");

const sharebtn = document.querySelector(".share-btn");

const popupContentMobile = document.querySelector(".popup-content-mobile");

var h = window.innerHeight;

var w = window.innerWidth;



popupbtn.addEventListener('click', ()  => {
    if(w > 768){
        popupContent.classList.toggle("hidden")
        popupbtn.classList.toggle("bg-VeryDarkGrayishBlue")
        sharebtn.classList.toggle("filterwhite")
    } else if(w < 768){
        popupContentMobile.classList.toggle("hidden")
        popupbtn.classList.toggle("bg-GrayishBlue")
        sharebtn.classList.toggle("filterwhite")
    }
    
})

console.log(w,h)