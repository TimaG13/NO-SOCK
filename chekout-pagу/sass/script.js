$(document).ready(function () {
    $(window).resize(function(){
        var windowWidth = $(window).width();
        if(windowWidth < 770) {
            $(".mi--f").addClass("collapse");
        }
        else {
            $(".mi--f").removeClass("collapse");
        }
    });
});
