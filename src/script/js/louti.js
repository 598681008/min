define(['jquery'], function($){
    return{
        louti:!function(){
            const $louti=$('.side-show');
            const $loutili=$('.side-show li')
            const $louceng=$('.louceng');
            $(window).on('scroll', () => {
                const $scrolltop = $(window).scrollTop(); //获取滚动条的top值。
                if ($scrolltop >= 800) {
                    $louti.show();
                } else {
                    $louti.hide();
                }
                $louceng.each(function(index, element) { //index:0-8
                    //通过遍历的方式获取每一个楼层的top值
                    const $top = $louceng.eq(index).offset().top + $(this).innerHeight()/2;
                    if ($top > $scrolltop) {
                        $loutili.removeClass('active'); //清除所有的类
                        $loutili.eq(index).addClass('active');
                        return false; //阻止循环
                        //每次只能有一个满足条件添加类，其他的通过循环阻止
                    }
                });

            })

            $loutili.on('click',function(){
                $(this).addClass('active').siblings('li').removeClass('active');
                const $top = $louceng.eq($(this).index()).offset().top;
                $('html,body').animate({ //赋值时考虑兼容。
                    scrollTop: $top
                });
            })
           $('.line-top').on('click',function(){
               $('html,body').animate({
                   scrollTop:0
               })
           })

        }()
    }
});