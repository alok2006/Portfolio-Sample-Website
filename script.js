let isOpen = false;
const ToggleNav= function(){
  let x = document.getElementById("myNav");
  let main = document.getElementById("Main");
  if(isOpen){
    x.style.width="max-content";
    x.style.display="flex";
    main.style.marginLeft ="10%";
  }
  else{
    main.style.marginLeft = "0px";
    x.style.width="0px";
    x.style.display="None"
  }
}
function changeIsOpen(){
  isOpen=!isOpen;
  ToggleNav();
}
//SlideShow 
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5*1000); // Change image every 2 seconds
}



// Showing Content

const Lps = class {
  constructor(title,content){
    this.title = title;
    this.content = content;
    this.All =`<h1 class="Title">
       ${this.title}
    </h1>
    <div class="content">
        ${this.content}
    </div>`
  }

}
const Items =[new Lps("Home","Here Is Home"),
  new Lps("About","This Is About"),
  new Lps("Contact","This Is Contact")
]
const displayer = document.getElementById("displayer");
const changeContent= function (index){
  console.log("HTML Change for "+ Items[index].All)
  displayer.innerHTML = Items[index].All;
}

function init() {
  changeIsOpen();
  changeContent(0);
}

document.addEventListener("onload",init());
