var loader = document.getElementById('loadBG');
window.addEventListener('load', function () {
    var wrapper = document.getElementById('wrapper');
    var topLayer = wrapper.querySelector('.top');
    var handle = wrapper.querySelector('.handle');
    var skew = 0;
    var delta = 0;
    var windowWidth = window.innerWidth;
    loader.style.opacity = 0;
    setTimeout(function () {
        loader.classList.remove('loader');
    }, 500);
    if (windowWidth < '540') {
        wrapper.classList.remove('skewed');
        var skew = 10000;
        var delta = 10000;
        handle.style.left = delta + 'px';
        topLayer.style.width = skew + delta + 'px';
    }
    if (wrapper.className.indexOf('skewed') != -1) {
        skew = 1000;
    }
    wrapper.addEventListener('mousemove', function (e) {
        console.log(e.clientX);
        delta = (e.clientX - window.innerWidth / 2) * 0.5;
        handle.style.left = e.clientX + delta + 'px';
        topLayer.style.width = e.clientX + skew + delta + 'px';
    })
});