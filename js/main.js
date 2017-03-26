function checkIfIsMobile (windowWidth) {
    if(windowWidth <= 480) {
        return true;
    } else {
        return false;
    }
};

var isMobile;

$(document).ready(function () {
    isMobile = checkIfIsMobile($(window).width());
    if (isMobile) {
        $("#collapseButton").click(function() {
            $("#collapseButton > a > i").toggleClass("fa-navicon");
            $("#collapseButton > a > i").toggleClass("fa-close");
            $("#collapseButton").toggleClass("closeMenu");
        });
    } 
});
