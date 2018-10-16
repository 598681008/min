define([
    'jquery'
], function($) {
   return{
       lunbo:!function(){
           var $ul=$('#floor_1 .main-middle ul');
           var $ulwidth=$ul.eq(0).outerWidth();
           var $main0=$('#floor_1 .main-middle');
           var $main=$('#floor_1 .main-middle .main-m1')
           var $span=$('#floor_1 .main-middle span')
           var $tz=$('#floor_1 .main-middle .tz')
           var $ty=$('#floor_1 .main-middle .ty')
           var $num=0;
           var $timer=null;
           $main.width($ulwidth * $ul.size());
           $main0.hover(function(){
              $tz.show();
              $ty.show();
              clearInterval($timer);
           },function(){
                $tz.hide();
                $ty.hide();
                $timer=setInterval(function(){
                    ds();
                },2000)
           })
           $span.on('click',function(){
                $num=$(this).index();
                fn();
           })
           $tz.on('click',function(){
               $num--;
               if($num<0){
                $span.eq($span.size()-1).addClass('aa').siblings('span').removeClass('aa');
                $main.css({
                    left:-($span.size()+1)*$ulwidth
                });
                $num=$span.size()-1;
               }
               fn();
           })
           $ty.on('click',function(){
               $num++;
               if($num>$span.size()-1){
                    $span.eq(0).addClass('aa').siblings('span').removeClass('aa');
                    $main.css({
                        left:0
                    });
                    $num=0;
               }
               fn();
           })


          function ds()  {
            $num++;
            if($num>$span.size()-1){
                 $span.eq(0).addClass('aa').siblings('span').removeClass('aa');
                 $main.css({
                     left:0
                 });
                 $num=0;
            }
            fn(); 
          }
          $timer=setInterval(function(){
              ds();
          },2000)


           function fn()  {
               var $left=-($num+1)*$ulwidth;
               $span.eq($num).addClass('aa').siblings('span').removeClass('aa');
               $main.stop(true).animate({
                   left:$left
               })
           }
       }()
   }
    
});