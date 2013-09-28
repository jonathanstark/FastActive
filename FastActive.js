(function (d, activeClass) {
    var activeLink = false;
    function clearActive() {
        if (activeLink) {
            activeLink.classList.remove(activeClass);
            activeLink = false;
        }
    }
    function setActive(e) {
        clearActive();
        if (e.target.tagName == "A") {
            activeLink = e.target;
            e.target.classList.add(activeClass);
        }
    }
    d.body.addEventListener("touchstart", setActive, false);
    d.body.addEventListener("touchmove", clearActive, false);
})(document, "active");
