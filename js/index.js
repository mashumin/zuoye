$(function(){
    $(".xiaop>li").click(function(){
        var index=$(this).index();
        // alert(index)
        $(".erji").eq(index).animate({"height":"100%"});
    })
    // $(".lunbo a").css("left","1349px").eq(0).css("left","0");
    // num=0;
    // function move(){
    //     num++;
    //     if(num>=3){
    //         num=0;
    //     }
    //     $(".lunbo a").eq(num)
    // }
    // var t=staInterval(move,1000)
})