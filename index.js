var i = 0;
var txt = 'hi, its fred.'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */


document.addEventListener("load", typeWriter());
window.addEventListener("scroll", () => {
  console.log("activated!");
  var header = document.getElementById("menu");
  header.classList.toggle("sticky", window.scrollY > 0);
});


function typeWriter() {
  console.log("typewriter is going!");
  if (i < txt.length) {
    document.getElementById("title-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function headerSwitch(){
  console.log("activated!");
  var header = document.getElementById("menu");
  header.classList.toggle("sticky", window.scrollY > 0);
};