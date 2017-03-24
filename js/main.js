function checkIfIsMobile (windowWidth) {
    if(windowWidth <= 480) {
        return true;
    } else {
        return false;
    }
};

var isMobile;

$(document).ready(function () {
    $(window).resize(function(){
        isMobile = checkIfIsMobile($(window).width());
        if(isMobile) {
            $("#logo-text").text($(window).width());
        }
    });
    
});
