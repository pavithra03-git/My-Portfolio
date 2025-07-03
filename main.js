let navtoggle = true;

function navbar() {
    if (navtoggle) {
        document.getElementsByClassName('subnav')[0].style = "display:flex;";
        document.getElementsByClassName('downbtn')[0].style='margin-top:10px'
        document.getElementsByClassName('navbtn')[0].innerHTML = "<i class='fa-solid fa-xmark'></i>";
    } else{
        document.getElementsByClassName('subnav')[0].style.display = "none";
        document.getElementsByClassName('navbtn')[0].innerHTML = "<i class='fa-solid fa-bars'></i>";
    }

    navtoggle = !navtoggle;
}

