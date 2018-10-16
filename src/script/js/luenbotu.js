define([
  'jquery'
], function($) {
   return{
       luenbo:!function(){
           var $bli=$('.banner .bd');
           var $bli1=$('.banner .bd li')
           var $bzuo=$('.banner .bd .zuo');
           var $byou=$('.banner .bd .you');
           var $byuan=$('.banner .yuan span');
           var $index=0;
           var $time=null;
           $time=setInterval(function(){
                $index++;
                if($index>1){
                    $index=0;
                }
                $byuan.eq($index).addClass('active').siblings('span').removeClass('active');
                $bli1.eq($index).fadeIn(600).siblings('li').hide();    
           },2000);
           $bli.on('mouseover',function(){
              $bzuo.show();
              $byou.show();
              clearInterval($time);
           });
           $bli.on('mouseout',function(){
            $bzuo.hide();
            $byou.hide();
            $time=setInterval(function(){
                $index++;
                if($index>1){
                    $index=0;
                }
                $byuan.eq($index).addClass('active').siblings('span').removeClass('active');
                $bli1.eq($index).fadeIn(600).siblings('li').hide();   
            },2000);

         });
           $byuan.on('click',function(){
                $index=$(this).index();
                $(this).addClass('active').siblings('span').removeClass('active');
                $bli1.eq($index).fadeIn(600).siblings('li').hide(); 
           });
           $byou.click(function(){
                $index++;
                if($index>1){
                    $index=0;
                }
                $bli1.eq($index).fadeIn(600).siblings('li').hide();
                $byuan.eq($index).addClass('active').siblings('span').removeClass('active');
           });
           $bzuo.click(function(){
                $index--;
                if($index<0){
                    $index=1;
                }
                $bli1.eq($index).fadeIn(600).siblings('li').hide(); 
                $byuan.eq($index).addClass('active').siblings('span').removeClass('active');
           });
            var $top=$('.cebian .ce-3')
           $top.on('click',function(){
            $('html,body').animate({
                   scrollTop:0
               });
           });
       }()
   }
});