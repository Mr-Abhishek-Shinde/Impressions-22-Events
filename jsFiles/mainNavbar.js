function showHidemnbar() {

    var mnbar = document.getElementById("mainNavbar");
    var barsIcon = document.getElementById("barsIcon")

    if (mnbar.style.display == "none") {
        mnbar.style.display = "flex";
        barsIcon.src = "images/icons8-close-96.png";
    } else {
        mnbar.style.display = "none";
        barsIcon.src = "images/icons8-menu-100.png";
    }
}