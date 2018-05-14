(function () {
    //规格选择函数
    let openSpec =  function (){
            $("#specBg").css({"display":"block"});
            $("#specBox").css({bottom:-1*$("#specBox").height()});
            $("#specBox").animate({bottom:0},$("#specBox").height());
            $("#section").css({"overflow-y":"hidden"})
            $(".specs li").each(function(i){
                $(this).find(".specsContent span").each(function(){
                    $(this).css({"background":"#f7f7f7","color":"#999"});
                })
            });
        // $("#specBg").height($("#section").scrollTop()+$("#section").height());
        // $("#specBg").css({"display":"block"});
        // $("#specBox").css({bottom:-1*($("#section").scrollTop()+750)});
        // $("#specBox").animate({bottom:0},500);
        // $("#section").css({"overflow-y":"hidden"});
        // $(".specs li").each(function(i){
        //     $(this).find(".specsContent span").each(function(){
        //         $(this).css({"background":"#f7f7f7","color":"#999"});
        //     })
        // });
    };
    //打开选择属性
    $("#lookSpec").click(function(){
        openSpec();
    })
    //窗口关闭函数
    let close = function(){
        $("#specBox").animate({bottom:-1*$("#specBox").height()})
        setTimeout(function(){
             $("#specBg").css({"display":"none"});
         },500)
         $("#section").css({"overflow-y":"auto"})
        // $("#specBox").animate({bottom:-1*($("#section").scrollTop()+750)},500);
        // setTimeout(function(){
        //     $("#specBg").css({"display":"none"});
        // },500)
        // $("#section").css({"overflow-y":"auto"})
    }
    
    //保存数据的JSON
    let specs = {};
    //属性点击事件循环
    $(".specs li").each(function(i){
        $(this).find(".specsContent span").each(function(){
            $(this).click(function(){
                $(this).css({"background":"#999","color":"#f7f7f7"}).siblings().css({"background":"#f7f7f7","color":"#999"})
                let key = $(this).parent().prev().html();
                let content = $(this).html();
                specs[key] = content;
                console.log(specs);
            })
        })
    });
    //点击关闭
    $(".closeThis").click(function(){
        
        for(key in specs){
            specs[key]="";
        }
        close();
    });
    // 点击完成
    $(".specBtn").click(function(){
        for(key in specs){
            if(specs[key]==""){
                continue;
                close();
            }
        }
        close();
    })
    // 点击参团
    $("#cantuan").click(function(){
        console.log($.isEmptyObject(specs));
        if(!$.isEmptyObject(specs)){    //如果数据不为空
            let notNull = true;
            let count = 0;
            for(key in specs){          //循环json
                if(specs[key]==""){     //如果有一条为空
                    continue;           //跳出
                    openSpec();         //选择属性
                    notNull = true;
                }
                count++;
            }
            console.log(count,$(".specs li").length);
            if(notNull && count == $(".specs li").length){
                // 参团成功    
                $(".getSometing").css({"display":"block"});
                $("#cantuan").css({"background":"#666","color":"#fff"});
            }else{
                openSpec();
            }
        }else{
            openSpec();
        }
    })
    $(".getSometing p").click(function(){
        $(".getSometing").css({"display":"none"});
    })

    //传入时间
    let myTime = new Date(1000000);
    countDown(myTime);
    //倒计时
    function countDown(times){
        var timer=null;
        timer=setInterval(function(){
            var day=0,
            hour=0,
            minute=0,
            second=0;//时间默认值
            if(times > 0){
            day = Math.floor(times / (60 * 60 * 24));
            hour = Math.floor(times / (60 * 60)) - (day * 24);
            minute = Math.floor(times / 60) - (day * 24 * 60) - (hour * 60);
            second = Math.floor(times) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
            }
            if (day <= 9) day = '0' + day;
            if (hour <= 9) hour = '0' + hour;
            if (minute <= 9) minute = '0' + minute;
            if (second <= 9) second = '0' + second;
            let $box = $(".timeBox .boxs");
            $box[0].innerHTML = day;
            $box[1].innerHTML = hour;
            $box[2].innerHTML = minute;
            $box[3].innerHTML = second;
            times--;
        },1000);
        if(times<=0){
            clearInterval(timer);
        }
    }
})()