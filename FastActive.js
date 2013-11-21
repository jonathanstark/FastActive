(function (d, w, activeClass, targetTagNames) {
    var hasTouch = (('ontouchstart' in w) || w.DocumentTouch && d instanceof DocumentTouch);
    if (!hasTouch) {
        d.documentElement.className += ' no-touch';
    } else {
        var activeElement = null,
            clearActive = function() {
                if (activeElement) {
                    activeElement.classList.remove(activeClass);
                    activeElement = null;
                }
            },
            setActive = function(e) {
                clearActive();
                if (targetTagNames.indexOf(e.target.tagName) > -1) {
                    activeElement = e.target;
                    activeElement.classList.add(activeClass);
                }
            };
        d.documentElement.classList.add('touch');
        d.documentElement.classList.remove('no-touch');
        d.body.addEventListener('touchstart', setActive, false);
        d.body.addEventListener('touchmove', clearActive, false);
    }
})(document, window, 'active', ['A', 'INPUT']);
