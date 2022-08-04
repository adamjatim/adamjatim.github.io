function showNavbar(){
    var x = document.getElementById("navbar");
    if(x.className === "navbarContent"){
        x.className += " responsive";
    }
    else {
        x.className = "navbarContent";
    }
}