$(function () {

    $.getJSON('https://discord.com/api/guilds/895546064260718622/widget.json', function (data) {
        $('.discord-members').html(data.presence_count);
    });
    
    $('.navbar-toggler').on('click', function () {
        $('body').addClass('nav-open');
    })
    
    $(document).on('click', function (e) {
        if($(e.target).parents('.navbar').length > 0 || $(e.target).parents('.navbar-toggler').length > 0 || $(e.target).hasClass('navbar-toggler')) {
            return
        }
        $('body').removeClass('nav-open');
    })

    // Pop up
    if($('.tm-gallery').length) {
        $('.tm-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: { enabled: true }
        });
        
        $('.tm-gallery').slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
        });
    }

    // Gallery

    $('.question .title').on('click', function () {
        $(this).parent().toggleClass('open');
    })
});