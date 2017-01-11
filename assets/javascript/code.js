var height = window.innerHeight;
var width = window.innerWidth;
var main = document.getElementById("main");
main.style.height = height + "px";
main.style.width = width + "px";

var anchors = document.getElementsByTagName("a");
for (var i = 0; i < anchors.length; i++) {
    anchors[i].style.cursor = "pointer";
}

console.log(width, height);

// click listeners

// click listener for the about me section
var aboutMeButton = document.getElementsByClassName("aboutMe");

// click listener for the portfolio section
var portfolioButton = document.getElementsByClassName("portfolio");

// click listener for the contact section
var contactButton = document.getElementsByClassName("contactMe");

for (var i = 0; i < aboutMeButton.length; i++) {
	aboutMeButton[i].addEventListener("click", loadAboutMe);
	portfolioButton[i].addEventListener("click", loadPortfolio);
	contactButton[i].addEventListener("click", loadContact);
}

// // event listeners
// var brand = document.getElementsByClassName("brand-image");
// console.log(brand);
// for (i = 0; i < brand.length; i++) {
// 	brand[i].addEventListener("mouseenter", colorifyPicture(brand[i]));
// 	brand[i].addEventListener("mouseleave", blackAndWhiteify(brand[i]));
// }

// event listeners
$(".brand-image").mouseover(colorifyPicture);
$(".brand-image").mouseout(blackAndWhiteify);

// functions

// function for the aboutMeButton (About Me Section)
function loadAboutMe() {
	var aboutMeSection = document.getElementById("aboutMeSection");
	var intro = document.getElementById("intro");
	intro.className= "fadeOut";
	aboutMeSection.style.display = "initial";
	aboutMeSection.className = "fadeIn";
}

function loadPortfolio() {
	var portfolioSection = document.getElementById("portfolioSection");
	var intro = document.getElementById("intro");
	intro.className= "fadeOut";
	portfolioSection.style.display = "initial";
	portfolioSection.className = "fadeIn";
}

function loadContact() {
	var contactSection = document.getElementById("contactSection");
	var intro = document.getElementById("intro");
	intro.className= "fadeOut";
	contactSection.style.display = "initial";
	contactSection.className = "fadeIn";
}

// this function replaces the black and white profile picture with the full color one
function colorifyPicture() {
	console.log("colorify");
	$(".brand-image").attr("src", "assets/images/main-profile.jpg");
}

function blackAndWhiteify() {
	console.log("blackandwhiteify");
	$(".brand-image").attr("src", "assets/images/main-profile-bw.jpg");
}
