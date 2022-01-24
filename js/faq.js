var action = 'click';

$(document).ready(function() {
    $('li.question').on(action, function() {
        $(this).next().slideToggle(200)
            .siblings("li.answer").slideUp();

        var img = $(this).children('i');

        $('i').not(img).removeClass('rotate').css("transition", "all .2s ease")
        img.toggleClass('rotate')
    })
})

$.ajax({
    url: '/digitalmint/js/faq.json',
    type: 'GET',
    success: function(response) {
        console.log(response);
        var a;
        for (a = 0; a < response.length; a++) {
            var faq = response[a].title;
            var answer = response[a].answer;
            $(".faq").append(`
            <li class="question">
                <i class="fa fa-angle-down" style="transition: all 0.2s ease 0s;"></i>
                <span>${faq}</span>
            </li>
            <li class="answer" style="display: none;">
                ${answer}
            </li>
            `)


        }
    }
})

$(".hamburger").click(() => {
    $(".menu-menu").slideToggle()
})

$(document).ready(function() {
    // new WOW().init();
    $('[data-toggle="tooltip"]').tooltip();
    $(".navbar-toggler").click(function() {
        $('.helper-task').toggleClass('overflow')
    })
    $(".scrolltop").hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrolltop').fadeIn();
        } else {
            $('.scrolltop').fadeOut();
        }
    });
    $('.scrolltop').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });

})