/* Container 스크롤 시 Header 영역에 그림자 만들기 */
    var isScroll;

    $(".container").scroll(function(){
        isScroll = true;
    });

    setInterval(function(){
        if (isScroll){
            reactScroll();
            isScroll = false;
        }
    }, 250);

    function reactScroll(){
        var scroll_point = $('.container').scrollTop();
        if(scroll_point != 0){
            $('header.shadow').addClass("input_shadow");
        }else{
            $('header.shadow').removeClass("input_shadow");
        }
    }