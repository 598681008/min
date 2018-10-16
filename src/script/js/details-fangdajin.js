!function($){
    $('.ncs-jin').delegate('.ncs-box ul li','click',function(){
        var $index=$(this).index();
        var $spic=$('.xiaotu');
        var $bpic=$('.dafang');
        var $src=$(this).find('img').attr('src');
        $(this).addClass('border').siblings().removeClass('border')
        $spic.find('img').attr('src',$src);
        $bpic.find('img').attr('src',$src);
    });
    $('.ncs-jin').delegate('.xiaotu','mouseover',function(){
        var $spic=$('.xiaotu');
        var $bpic=$('.dafang img');
        var $sf=$('.xiaofang');
        var $bf=$('.dafang');
        $sf.show();
        $bf.show();
        $sf.width($bf.width()*$spic.width()/$bpic.width());
        $sf.height($bf.width()*$spic.height()/$bpic.height());
        $('.ncs-jin').delegate('.xiaotu','mousemove',function(ev){
        var $left=ev.pageX-$('.ncs-jin').offset().left-$sf.width()/2;
        var $top=ev.pageY-$('.ncs-jin').offset().top-$sf.height()/2;
        var $bili=$bpic.width()/$spic.width();
        if($left<=0){
            $left=0
        }else if($left>=$spic.width()-$sf.width()){
                $left=$spic.width()-$sf.width();
        }

            if($top<=0){
                $top=0
            }else if($top>=$spic.height()-$sf.height()){
                    $top=$spic.height()-$sf.height();
            }
            $sf.css({
                left:$left,
                top:$top
            });
            $bpic.css({
                left:-$bili*$left,
                top:-$bili*$top
            });

        })
    });
    $('.ncs-jin').delegate('.xiaotu','mouseout',function(){
        $('.xiaofang').hide();
        $('.dafang').hide();
    });
}(jQuery)