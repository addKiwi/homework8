$(window).scroll(function () {
    var st = $(this).scrollTop();
    console.log(st);
    $(".bg1").css({"transform" :"translate(0%, " + (st)/10 + "%"});
    $(".bg2").css({"transform" :"translate(0%, " + (st-1100)/50 + "%"});
    $(".bg3").css({"transform" :"translate(0%, " + (st-2350)/20 + "%"});

    if (st > 32) {
        $('.top-line').css({'position': 'fixed', 'margin-top': '0px'});
    } else {
        $('.top-line').css({'position': 'absolute', 'margin-top': '32px'});
    }

    if(st > 32 & st < 72){
        $('.top-line').css({'height': + (110-(st-32)) });
    }

    if(st >=72){
        $('.top-line').css({'height':'70px'})
    }
})
