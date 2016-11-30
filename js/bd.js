$(function(){

  var heights=$(window).height();
    var flage=true;
    var num=0;
    touch.on("body","swipeup","#fullpage",function(){
        if(!flage){
            return;
        }
        num++;
        if(num==$("#fullpage>section").length){
            num=$("#fullpage>section").length-1;
        }

        // flage=false;
        $("#fullpage").css({marginTop:-num*heights})
    })
    touch.on("body","swipedown","#fullpage",function(){
        if(!flage){
            return;
        }
        num--;
        if(num==-1){
            num=0;
        }
        // flage=false;
        $("#fullpage").css({
            marginTop:-num*heights
        })
        $("#fullpage")[0].addEventListener("webkitTransitionEnd",function(){
            flage=true;
        })




    })



})