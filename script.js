function openBar() {
    if(!visible) {
        visible = true;
        document.getElementsByClassName("menu")[0].style.right = "0";
    }
    else {
        visible = false;
        document.getElementsByClassName("menu")[0].style.right = "-100%";
    }
}

function start() {
    setInterval(checkForHide, 1) 
}

var visible = true;
var hidded = false;

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.animation');

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 120;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active')
        }
    }
}