$(document).ready(function(){

    var modalPopup = $('.modal-popup');
    var modalWrap = $('.modal-wrap');
    var showModal = $('.show-modal');
    var closeModal = $('.close-modal');

    showModal.on('click', function(e) {
        e.preventDefault();
        // modalWrap.addClass('on');
        modalPopup.fadeIn(250);
        $('html').addClass('modalon');
        $(".mov")[0].src += "&autoplay=1";
    });
    closeModal.on('click', function(e) {
        e.preventDefault();
        // modalWrap.removeClass('on');
        modalPopup.fadeOut(250);
        $('html').removeClass('modalon');
        $(".mov")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    });

    if(modalPopup.length == 1) {
        $(window).bind('click', function(e){
            if (e.target == modalPopup.get(0)) {
                modalPopup.hide();
                $('html').removeClass('modalon');
                $(".mov")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
            }
        });
    }

});