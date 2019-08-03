var menuEl = document.getElementById("toggle"); //target menu element with #toggle and store it in a var
var activeEl = document.getElementsByClassName("activeEl");

//create callback fucntion
var listen = function(){
  for (var i = 0; i < activeEl.length; i++) {
    activeEl[i].classList.toggle("active");
  }
}
//event Listener function
menuEl.addEventListener("click",listen);
