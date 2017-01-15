function getDimensions() {
    console.log("Width: " + window.innerWidth + ", Height: " + window.innerHeight);
}

var height = window.innerHeight;
var width = window.innerWidth;
var main = document.getElementById("main");
var video = document.getElementById("video");
video.style.height = height + "px";
//main.style.height = height + "px";
//main.style.width = width + "px";

var anchors = document.getElementsByTagName("a");
for (var i = 0; i < anchors.length; i++) {
    anchors[i].style.cursor = "pointer";
}

var socialLinks = document.getElementsByClassName("fa-3x");
for (i = 0; i < socialLinks.length; i++) {
    socialLinks[i].style.cursor = "pointer";
}

// getDimensions();

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

// event listeners
$(".brand-image").mouseover(colorifyPicture);
$(".brand-image").mouseout(blackAndWhiteify);

// functions

// function for the aboutMeButton (About Me Section)
function loadAboutMe() {
    var aboutMeSection = document.getElementById("aboutMeSection");
    var intro = document.getElementById("intro");
    intro.className = "fadeOut";
    aboutMeSection.style.display = "initial";
    aboutMeSection.className = "fadeIn";
}

function loadPortfolio() {
    var portfolioSection = document.getElementById("portfolioSection");
    var intro = document.getElementById("intro");
    intro.className = "fadeOut";
    portfolioSection.style.display = "initial";
    portfolioSection.className = "fadeIn";
}

function loadContact() {
    var contactSection = document.getElementById("contactSection");
    var intro = document.getElementById("intro");
    intro.className = "fadeOut";
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

var portfolioArray = document.getElementsByClassName("portfolioPic")
for (var i = 0; i < portfolioArray.length; i++) {
	portfolioArray[i].style.cursor = "pointer";
}

// click listener
$(".portfolioPic").mouseover(pictureSwitch);
$(".portfolioPic").mouseout(pictureSwitch);

// this function will change the portfolio picture from black and white to color
function pictureSwitch() {

	// variable to determine which portfolio div is hovered over
    let check = $(this).data("color");

	// split check once and join the created array to get the title of the portfolio project
	let id = check.split("_", 1);
	id = id.join();

	// conditional to change the color of the project title. if red make right and vice versa.
	if ($(this).children("h4").css("color") === "rgb(255, 0, 0)") $(this).children("h4").css("color", "white");
	else $(this).children("h4").css("color", "red");

	// variable to hold image source tag
    let imgSrc;

	// variable for the preface of the image source tag
    let loc = "assets/images/";

	// variable pointing to the img element in the div
	let imgTag = $(this).children("img");

	// if img src has "_bw" change the img src to the color image and vice versa
    if (imgTag.attr("src").indexOf("_bw") === -1) {
        imgSrc = $(this).data("bw");
        imgTag.attr("src", loc + imgSrc);
    }
	else {
		imgSrc = $(this).data("color");
	    imgTag.attr("src", loc + imgSrc);
	}
}
