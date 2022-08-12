function expansion() {
    var x = document.getElementById("myNavbarContent");
    if (x.className === "navbarContent") {
        x.className += " active";
    }
    else {
        x.className =  "navbarContent";
    }
}