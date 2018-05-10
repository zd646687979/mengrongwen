(function(){
    var iconJson = [
        {before:"icon-shouye-xianxing",did:"icon-shouye"},
        {before:"icon-yingyongchengxu-xianxing",did:"icon-yingyongchengxu"},
        {before:"icon-caigou-xianxing",did:"icon-caigou"},
        {before:"icon-yonghu-xianxing",did:"icon-yonghu"}
        ];
    let count = 0;
    $(".footer li a").each(function(i){
        console.log($(this)[0].href==window.location.href);
        if($(this)[0].href == window.location.href){
            count = i;
            console.log(count);
            $(".footer li").eq(count).css({"color":"#333"}).siblings().find("a").css({"color":"#666"})
            if(i>2){
                $(".footer li a").eq(count).find(".iconfont").removeClass(iconJson[count-1].before).addClass(iconJson[count-1].did);
            }else{
                $(".footer li a").eq(count).find(".iconfont").removeClass(iconJson[count].before).addClass(iconJson[count].did);
            }
        }
    })
})()

