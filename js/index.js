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
            // console.log(3)
            $(".lunbo a").eq(nam).css({left:"100%",width:"100%",height:"100%"});
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

    var t=setInterval(move1,3000);
    var tt=setInterval(move2,50);


    $(window).blur(function(){
        clearInterval(t);
        clearInterval(tt);
        console.log("blur")
    })
    $(window).focus(function(){
        t=setInterval(move1,3000)
        tt=setInterval(move2,50)
        console.log("focus")
    })

    $(".leftbut").click(function(){
        num--;
        if(num==-1){
            num=2
        }
        // alert("left")
        stop()
    })
    $(".rightbut").click(function(){
        num++;
        if(num==3){
            num=0
        }
        stop();
        // alert("right")
    })

    $(".lubut>div").click(function(){
        num=$(this).index(".lubut>div");
        console.log(num)
        stop();
    })

    function stop(){

        $(".lunbut>div").find(".active").css("width","100%");
        $(".lunbo a").eq(num).css("left","0");

        if(num>nam){
            $(".lunbo a").eq(nam).animate({width:"80%",height:"80%"}).css("zIndex",0);
            $(".lunbo a").eq(num).animate({left:"0"},function(){
                $(".lunbo a").eq(nam).css({width:"100%",height:"100%",left:"100%"});
                nam=num;
            }).css("zIndex",1);
            // console.log(1)
        }else{
            $(".lunbo a").eq(nam).animate({left:"100%"}).css("zIndex",1);
            $(".lunbo a").eq(num).css({width:"80%",height:"80%",left:0}).animate({width:"100%",height:"100%"},function(){
                nam=num;
            });
            // console.log(2)
        }
        clearInterval(t);
        clearInterval(tt);
    }



})