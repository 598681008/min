$.ajax({
    url:'http://10.31.162.22/yangguang/php/',
    dataType:'json'
}).done(function(data){
    console.log(data);
    var $str='';
			$.each(data,function(index,value){
				$str+='<li><a href="details.html?sid='+value.sid+'">'+
                '<img src="'+value.url+'" width="219" height="236">'+
                    '</a></li>'
			});
            $('#floor_1 .main-right').html($str);
})