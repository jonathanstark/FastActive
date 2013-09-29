(function (d, activeClass) {
    function clearActive() {
        if (activeElement) {
            activeElement.classList.remove(activeClass);
            activeElement = false;
        }
    }
    function setActive(e) {
        clearActive();
        if (e.target.tagName == 'A') {
            activeElement = e.target;
            e.target.classList.add(activeClass);
        }
    }
    var activeElement = false;
    if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
        document.documentElement.classList.add('touch');
    } else {
        document.documentElement.classList.add('no-touch');
    }
    d.body.addEventListener('mousedown', setActive, false);
    d.body.addEventListener('touchstart', setActive, false);
    d.body.addEventListener('touchmove', clearActive, false);
})(document, 'active');
