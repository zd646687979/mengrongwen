var bannerSwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    preventIntercationOnTransition:true,
    autoplay: {
        delay: 3000,//1秒切换一次
        disableOnInteraction: false
    },
    lazy: {
        loadPrevNext: true,
      },
    preloadImages:false,
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    }
});
var classifySwiper = new Swiper ('.classifyBox', {
    direction: 'horizontal',
    speed:500,
    preloadImages:false,
    preventIntercationOnTransition:true,
    lazy: {
        loadPrevNext: true,
      },
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    }
});
$((function(){
    let $section = $(".section");
    $section.css({"position":"relative"});
    let result = '<div id="ringTitle" style="font-size:.34rem;position:fixed;bottom:1.5rem;left:0;right:0;color:#fff;width:5.4rem;margin:0 auto;padding:0 .35rem;background:#50abfa;border-radius:5px;line-height:0.66rem;">'
                    +'找活干、施工队、装修公司、设计师、材料商就在孟荣文圈'
                    +'<p style="position:absolute;height:.26rem;width:.26rem;bottom:-.13rem;left:0;right:0;margin:0 auto;background:#50abfa;transform:rotateZ(45deg);"></p>'
                +'</div>';
    $section.append(result);
    var shouldScroll = true;
    if(shouldScroll){
        $section.scroll(()=>{
            shouldScroll = false;
            $("#ringTitle").animate({opacity:0},2000);
            setTimeout(()=>{
                $("#ringTitle").css({"display":"none"});
            },1500)
        })
    }
})())
