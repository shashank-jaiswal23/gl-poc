// for validation
function validate() {
    var name = document.getElementById("name").value;
    var number = document.getElementById("contact").value;
    var email = document.getElementById("email").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    var text;
    if (name.length < 3) {
        text = "Please Enter Valid Name";
        error_message.innerHTML = text;
        return false;
    }
    if (isNaN(number) || number.length != 10) {
        text = "Please Enter valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
    }
    else{
        return true;
    }
}

// fuction to store data

function store(){
    var name = document.getElementById("name");
    var number = document.getElementById("contact");
    var email = document.getElementById("email");
    var experience = document.getElementById("experience");
    var current = document.getElementById("current");

    localStorage.setItem("name", name.value);
    localStorage.setItem("contact", number.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("experience", experience.value);
    localStorage.setItem("current", current.value);

    localStorage.getItem(name)
    localStorage.getItem(number)
    localStorage.getItem(email)
    localStorage.getItem(experience)
    localStorage.getItem(current)
 
}


// fo box

const accordion = document.getElementsByClassName('contentBx');
for(i = 0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}
// for carasoul

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// When the user scrolls down 20px from the top of the document, show the button

myfoot = document.getElementById("foooot");

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        myfoot.style.position ="fixed"
        myfoot.style.bottom = "0"
        myfoot.style.width ="100%"}     
}
