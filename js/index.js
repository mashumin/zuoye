$(function(){
    $(".xiaop>li").click(function(){
        var index=$(this).index();
        // alert(index)
        $(".erji").eq(index).slideToggle(200);
    })
    var num=0;
    var nam=0;
    var time=0;
    var flg=true;

    function move1(){
        num++;
        if(num==3){
            num=0;
            flg=false;
        }
        $(".lunbo a").eq(nam).animate({width:"80%",height:"80%"}).css("zIndex",0);
        $(".lunbo a").eq(num).animate({left:0},function(){
            $(".lunbo a").eq(nam).css({width:"100%",height:"100%",left:"100%"});
            nam=num;
            flg=true;
            time=0;

        }).css("zIndex",1);
    }
    function move2(){
        time=time+50;
        var bili=time/3000;
        if(bili>1){
            bili=1;
        }
         wid=bili*100+"%";
        $(".active").css("width",0).eq(nam).css("width",wid);
        if(flg==false){
            $(".active").css("width","0");
        }
    }

    var t1=setInterval(move1,3000);
    var t2=setInterval(move2,50);


    $(window).blur(function(){
        clearInterval(t1);
        clearInterval(t2);
    })
    $(window).focus(function(){
        t1=setInterval(move1,3000)
        t2=setInterval(move2,50)
    })

    $(".leftbut").click(function(){
        num--;
        if(num==-1){
            num=2
        }
        stop();
    })
    $(".rightbut").click(function(){
        num++;
        if(num==3){
            num=0
        }
        stop();
    })

    $(".lubut>div").click(function(){
        num=$(this).index(".lubut>div");
        stop();
    })

    function stop(){
        clearInterval(t1);
        clearInterval(t2);

        $(".lunbut>div").find(".active").css("width",0);
        $(".lunbut>div").eq(num).find(".active").css("width","100%");

        if(num>nam){
            $(".lunbo a").eq(nam).animate({width:"80%",height:"80%"}).css("zIndex",0);
            $(".lunbo a").eq(num).animate({left:"0"},function(){
                $(".lunbo a").eq(nam).css({width:"100%",height:"100%",left:"100%"});
                nam=num;
            }).css("zIndex",1);
        } else{
            $(".lunbo a").eq(nam).animate({left:"100%"}).css("zIndex",1);
            $(".lunbo a").eq(num).css({width:"80%",height:"80%",left:"0"}).animate({width:"100%",height:"100%"},function(){
                num=nam;
            });
        }
    }



})