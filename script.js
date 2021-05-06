 document.addEventListener('DOMContentLoaded', function() {
    var sideNav = document.querySelectorAll('.sidenav');
    var slider = document.querySelectorAll('.slider');
    var parallax = document.querySelectorAll('.parallax');
    var materialBoxed = document.querySelectorAll('.materialboxed');
    var scrollSpy = document.querySelectorAll('.scrollspy');

    var instances1 = M.Sidenav.init(sideNav);
    var instances2 = M.Slider.init(slider,{
        indicators: false,
        height: 500,
        transition: 600,
        interval: 3000
      });
    var instances3 = M.Parallax.init(parallax);
    var instances4 = M.Materialbox.init(materialBoxed);
    var instance5 = M.ScrollSpy.init(scrollSpy, {
      scrollOffset:50
    });
});
