$(function () {

    $.getJSON('https://discord.com/api/guilds/895546064260718622/widget.json', function (data) {
        $('.discord-members').html(data.presence_count);
    });
    
    $('.navbar-toggler').on('click', function () {
        $('body').addClass('nav-open');
    })

    $('.modal-btn').on('click', function () {
        let target = $(this).data('target')
        $('.'+target).addClass('open')
    })

    $('.modal').on('click', function () {
        $('.modal').removeClass('open')
    })

    $('.modal .block').on('click', function (e) {
        e.stopImmediatePropagation()
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
    
    $('.copy-btn').on('click', function () {
        let text = $(this).data('value')
        copyToClipboard(text)
        $(this).addClass('copied')
    })

    $('.copy-btn').on('mouseover', function () {
        $(this).addClass('hover')
    })
    $('.copy-btn').on('mouseleave', function () {
        $(this).removeClass('hover copied')
    })

    function copyToClipboard(text) {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val(text)[0].select();
        $temp[0].setSelectionRange(0, 99999);
        // document.execCommand("copy");

        navigator.clipboard.writeText($temp[0].value);

        $temp.remove();
      }
});