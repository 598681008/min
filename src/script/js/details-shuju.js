$.ajax({
    url:'http://10.31.162.22/yangguang/php/details.php',
    data:{
        sid:location.search.substring(1).split('=')[1]
    },
    dataType:'json'
    
}).done(function(data){
    var $str=`<div class="xiaotu">
    <img  src="${data[0].url1}" style="opacity: 1;">
    <div class="xiaofang"></div>
    </div>
    <div class="dafang">
    <img  src="${data[0].url1}">
    </div>
    <div class="ncs-box">
        <ul>
            <li><img src="${data[0].url1}"></li>
            <li><img src="${data[0].url2}"></li>
            <li><img src="${data[0].url3}"></li>
            <li><img src="${data[0].url4}"></li>
            <li><img src="${data[0].url5}"></li>
        </ul>
    </div>`

    var $str1=`<h1>${data[0].title}</h1>
    <div class="ncs-price">
        <dl>
            <dt>央广价</dt>
            <dd>
                <span>￥</span>
                <strong>${data[0].price}</strong>
            </dd>
            <dd>赠送购物金:1.99</dd>
        </dl>
    </div>`
   $('.ncs-jin').html($str);
   $('.ncs-middle').html($str1);
}) 