$(document).ready(function () {
	/* PC GNB Event **************************
	*****************************************/

    // Sub GNB SlideDown,Up Event
    $('nav .sub-gnb').stop().slideUp(0);

    $('nav .gnb').mouseenter(function () {
        $('.sub-gnb').stop().slideDown(100);
        $('header').css('border-bottom', '0');
    });
    $('nav').mouseleave(function () {
        $('.sub-gnb').stop().slideUp(100);
        $('header').css('border-bottom', '1px solid #303030');
    });

    // Sub GNB Display Event
    $('nav .sub-gnb ul').css('display', 'none');

    $('nav .gnb li.first').mouseenter(function () {
        $('nav .sub-gnb ul').css('display', 'none');
        $('nav .sub-gnb ul.first').css('display', 'block');
    });
    $('nav .gnb li.second').mouseenter(function () {
        $('nav .sub-gnb ul').css('display', 'none');
        $('nav .sub-gnb ul.second').css('display', 'block');
    });
    $('nav .gnb li.last').mouseenter(function () {
        $('nav .sub-gnb ul').css('display', 'none');
        $('nav .sub-gnb ul.last').css('display', 'block');
    });

	/* Mobile GNB Event **********************
	*****************************************/

    // Slicknav Height
    var maskHeight = $(document).height();
    $('.slicknav > ul').css('height', maskHeight);

    // Button Event
    $('.slicknav > ul').stop().slideUp(0);

    $('.line-btn-wrap').click(function () {
        $(this).toggleClass('active');
        $('.slicknav > ul').slideToggle(300);
    });

    // Dropdown Menu Event
    $('.slicknav .dropdown ul').stop().slideUp(0);

    $('.slicknav .dropdown').click(function () {
        $('.slicknav .dropdown').not(this).removeClass('active');
        $(this).toggleClass('active');
        $('.slicknav .dropdown').not(this).children('ul').slideUp(100);
        $(this).children('ul').slideToggle(100);
    });

	/* ScrollTop Button Event *****************
	*****************************************/

    $(window).scroll(function () {
        //Check to see if the window is top if not then display button
        if ($(this).scrollTop() > 100) {
            $('#scrollToTop').fadeIn();
        } else {
            $('#scrollToTop').fadeOut();
        }

        //Changing button position
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
            $('#scrollToTop').css({
                'bottom': '200px'
            });
        } else {
            $('#scrollToTop').css({
                'bottom': '90px'
            });
        }
    });

    //Click event to scroll to top
    $('#scrollToTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

	/* Floating Menu Event ********************
	*****************************************/
    var fl_menu = $(".fl-menu > a");
    var contents = $("section .container > article");

    fl_menu.click(function (event) {
        event.preventDefault();

        var tg = $(this);
        var i = tg.index();
        var section = contents.eq(i);
        var tt = section.offset().top - 100;

        $("html, body").stop().animate({ scrollTop: tt });
    });
    $(window).scroll(function () {
        var sct = $(window).scrollTop();

        contents.each(function () {
            var tg = $(this);
            var i = tg.index();

            if (tg.offset().top <= sct + 350) {
                fl_menu.removeClass("active");
                fl_menu.eq(i - 1).addClass("active");
            }
        });
    });

	/* Intro Dropbox Event *******************
	*****************************************/
    $('table.color td .dropbox').stop().slideUp(0);

    $('table.color td h3.btn').click(function () {
        $(this).toggleClass('active');
        $('table.color td .dropbox').slideToggle(150);
    });

	/* Table Faq List Event *******************
	*****************************************/
    $(".tblForm.faq h1").next("p").stop().slideUp(0);

    $(".tblForm.faq h1").click(function () {
        $(this).toggleClass("active");
        $(".tblForm.faq h1").not($(this)).removeClass("active");
        $(this).next("p").stop().slideToggle(150);
        $(".tblForm.faq h1").next("p").not($(this).next("p")).slideUp(150);
    });
});