(function (d, w, fastActiveClassName, isFastActiveTarget) {
    var hasTouch = (('ontouchstart' in w) || w.DocumentTouch && d instanceof DocumentTouch);
    if (!hasTouch) {
        d.documentElement.className += ' no-touch';
    } else {
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
        d.documentElement.classList.add('touch');
        d.documentElement.classList.remove('no-touch');
        d.body.addEventListener('touchstart', setActive, false);
        d.body.addEventListener('touchmove', clearActive, false);
    }
})(document, window, 'active', function(e){
    return ['A', 'INPUT'].indexOf(e.target.tagName) > -1; // Put your conditional logic here
});
