// funtion to change the bg-color of nav when window scrolls past 30px
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementsByTagName("nav")[0].style.backgroundColor = "rgba(33, 33, 33, 0.8)";
  } else {
    document.getElementsByTagName("nav")[0].style.backgroundColor = "transparent";
  }
}

// typewriter function
var i = 0;
var text = "Creative writings that add value to you and your business";
var speed = 100;

function typeText() {
  if (i < text.length) {
    document.getElementById("headerText").innerHTML += text.charAt(i);
    i++;
    setTimeout(function () {
      typeText();
    }, speed);
  }
}
