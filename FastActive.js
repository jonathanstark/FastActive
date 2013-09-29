(function (d, activeClass) {
    var hasTouch = (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
    if (!hasTouch) {
        d.documentElement.classList.add('no-touch');
    } else {
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
                activeElement.classList.add(activeClass);
            }
        }
        var activeElement = false;
        d.documentElement.classList.add('touch');
        d.body.addEventListener('touchstart', setActive, false);
        d.body.addEventListener('touchmove', clearActive, false);
    }
})(document, 'active');
