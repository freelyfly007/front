$(function() {
    addPadding($('#box'));
    removePlaceholder();
    initSlide($('#slide'));
    addListeners();
});

function removePlaceholder () {
    if (navigator.userAgent.toLowerCase().indexOf("chrome") >= 0) {
        $('input:-webkit-autofill').each(function(){
            var text = $(this).val();
            var name = $(this).attr('name');
            $(this).after(this.outerHTML).remove();
            $('input[name=' + name + ']').val(text);
        });
    }
    $('.input-text').each(function(index, el) {
        if($(this).val().length !== 0){
            $(this).parent('.text-div').find('.placeholder').hide();
        }
    });
}
function addListeners() {
    $(window).resize(function(event) {
        addPadding($('#box'), true);
    });

    $('#qr-login').bind('hover', function(event) {
        $('#login-form').addClass('left-tab').find('.normal-tab').hide().end()
            .find('.qr-tab').show();
    });
    $('#normal-login').bind('hover', function(event) {
        $('#login-form').removeClass('left-tab').find('.normal-tab').show().end()
            .find('.qr-tab').hide();
    });
    $('.placeholder').click(function(event) {
        $(this).parent('.text-div').find('.input-text').focus();
    });

    $('.input-text').focus(function(event) {
        $(this).parent('.text-div').find('.placeholder').hide();
    });

    $('.input-text').blur(function(event) {
        if($(this).val().length === 0){
            $(this).parent('.text-div').find('.placeholder').show();
        }
    });

    $('#login-submit').hover(function() {
        $(this).addClass('hover');
    }, function() {
        $(this).removeClass('hover').removeClass('click');
    }).mousedown(function(){
        $(this).addClass('click');
    }).mouseup(function(){
        $(this).removeClass('click');
    });
}
/**
 * 已登录时调用的方法
 */
function logined(flag){
    if(flag === true){
        $('.qr-tab').add('.normal-tab').hide();
        $('#qr-login').add('#normal-login').unbind('hover');
        $('.logined-tab').show();
    }
}
function addPadding($dom, animate) {
    var winHeight = $(window).height();

    if ($dom.height() < winHeight) {
        if(animate){
            $dom.animate({
                'padding': (winHeight - $dom.height()) / 2 + 'px 0'
            }, 'fast');
        }else{
            $dom.css({
                'padding': (winHeight - $dom.height()) / 2 + 'px 0'
            });
        }
    }else{
        if(animate){
            $dom.animate({'padding': '0px'}, 'fast');
        }else{
            $dom.css({'padding': '0px'});
        }
    }
}
function initSlide($dom) {
    var fadeInLi = function($li){
        $dom.find('li:visible').hide();
        $li.fadeIn('normal', function(){
            $li.attr('data-fade', true);
        });
    };
    var nextLi = function(){
        if($dom.find('li:visible').next().length){
            fadeInLi($dom.find('li:visible').next());
        }else{
            fadeInLi($dom.find('li:first'));
        }
        isChange = true;
    };
    var prevLi = function(){
        if($dom.find('li:visible').prev().length){
            fadeInLi($dom.find('li:visible').prev());
        }else{
            fadeInLi($dom.find('li:last'));
        }
        isChange = true;
    };
    var interval = function(){
        if(!isChange){
            nextLi();
        }else{
            isChange = false;
        }
    }
    var isChange = false;

    $dom.find('li').hide()
        .end().find('li:first').fadeIn('fast', function() {
            $('.prev-btn').click(prevLi);
            $('.next-btn').click(nextLi);
        });

    setInterval(nextLi, 10000);
}