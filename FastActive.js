(function(d, w, fastActiveClassName, isFastActiveTarget) {
    if ((('ontouchstart' in w) || w.DocumentTouch && d instanceof DocumentTouch)) {
        var activeElement = null,
            clearActive = function() {
                if (activeElement) {
                    activeElement.classList.remove(fastActiveClassName);
                    activeElement = null;
                }
            },
            setActive = function(e) {
                clearActive();
                if (isFastActiveTarget(e)) {
                    activeElement = e.target;
                    activeElement.classList.add(fastActiveClassName);
                }
            };
        d.body.addEventListener('touchstart', setActive, false);
        d.body.addEventListener('touchmove', clearActive, false);
    }
})(document, window, 'active', function(e) {
    return ['A', 'INPUT'].indexOf(e.target.tagName) > -1; // Put your conditional logic here
});
