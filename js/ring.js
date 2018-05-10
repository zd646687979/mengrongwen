//说说加载全部$(".ssBox")
let inputBox = $("#inputComment");      //div
let inputText = $("#comment");          //文本框
let count =0;
let isReplay = false;       //是否是评论
let thisSpeakId =0;
let childrenIndex = 0;
    $(".contentBox").each(function(i){

        $(this).find(".ssBox").each(function(i){
            //判断是否显示"全部"按钮
            let lineHeight = parseInt($(this).find(".sstitle").css("line-height"));
            let height = parseInt($(this).find(".sstitle").height());
            if(height>(lineHeight*6)-(lineHeight/2)){
                $(this).find(".more").css("display","block");
            }else{
                $(this).find(".more").css("display","none");
            }
            //"全部按钮"绑定事件
            let sstitle = $(this).find(".sstitle");
            $(this).find(".moreButton").click(function(){
                if(sstitle.css("overflow") == "hidden"){
                    $(this).text("收起");
                    sstitle.css({"overflow":"visible","display": "block"})
                }else{
                    $(this).text("全部");
                    sstitle.css({"overflow":"hidden","display": "-webkit-box"})
                }
            })
            //控制图片大小
            let $imgs = $(this).find(".ssImgBox").find("img");
            if($imgs.length == 1){
                $imgs.addClass("img1");
            }else{
                $imgs.addClass("img2");
            }
        })


        //点击评论
        $(this).find(".iconfont").eq(1).click(function(){
            count = i;
            console.log(1);
            inputBox.css("display","block"); 
            inputText.val("").focus();          //获取焦点
        })

        //点击回复
        let myID = 2;   //我的ID
        let that = this;
        $(this).find(".comment").find("p").each(function(k){
            $(this).click(function(){
                childrenIndex = $(this).index();
                console.log($(this).index())
                count = i;
                console.log(111)
                isReplay = true;    //是评论
                thisSpeakId = $(this).find("input").val();  //被点击评论的ID
                if(thisSpeakId!=myID){

                    inputBox.css("display","block"); 
                    inputText.val("").focus();          //获取焦点
                }else{
                    return;
                }
            })
        })
        //点赞样式
        $(this).find(".iconfont").eq(0).each(function(j){
            // if(){                               //判断赞的状态
            //     $(this).css({"color":"#666"});
            // }
            $(this).click(function(){
                count = j;
                if($(this).css("color")!="#666"){
                    $(this).css({"color":"#666"});
                }else{
                    return;
                }            
            })
        })


    })
inputText.blur(function(){          
    setTimeout(()=>{
            inputBox.css("display","none");
    },10)
})
inputBox.find("p").click(function(){
    //替换首位空格
    inputText.val(inputText.val().replace(/(^\s*)|(\s*$)/g, ""));
    if(inputText.val()==""){
        return;
    }
    let myText = inputText.val().replace(/(^\s*)|(\s*$)/g, "");
    let result = "";
    //拼接字符串
    result = "<p><input type='hidden' value='22'><span>宋振明</span>："+myText+"</p>";
    let countContentBox = $(".contentBox").eq(count);

    //如果有评论框
    if(countContentBox.find(".comment").width()!=undefined){
        if(!isReplay){                                      //如果哦不是回复   
            
            result = "<p><input type='hidden' value='22'><span>我的名字</span>："+myText+"</p>";
            countContentBox.find(".comment").append(result); //评论框中加一条

        }else{
            result = "<p><input type='hidden' value='22'><span>我的名字</span>回复"+thisSpeakId+"："+myText+"</p>";
            let isfirst =  !countContentBox.find(".comment").children().eq(childrenIndex+1).hasClass("replayBox");
            console.log("index是"+childrenIndex);
            console.log(isfirst);
            if(isfirst){
                console.log("id是"+thisSpeakId);
                countContentBox.find(".comment").children().eq(childrenIndex).after('<div class="replayBox">'+result+'</div>'); //回复一条
                isReplay = false;
            }else{
                console.log("id是ssss"+thisSpeakId);
                countContentBox.find(".comment").children().eq(childrenIndex+1).append(result); //回复一条
                isReplay = false;
            }
        }
    }else{
        result = '<div class="comment"><div class="trigon"></div>'+result+'</div>';//新建评论框并加一条评论
        countContentBox.find(".commentBox").append(result);
    }
})

