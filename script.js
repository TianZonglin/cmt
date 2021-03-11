	AV.init({
		//appId:"PW4p5yuQfOGT9EITp5LE5aAq-MdYXbMMI",appKey:"jvG1mwtdlCeGgyL1s4z4NIir" //nmsl
		//appId: "E7rWTTEsGSblT8OB06beui59-MdYXbMMI", appKey: "y4jlkd52FFbLb0kLALU0mrMm", //x4wj
		appId:'WbLE88qfAcz4hSI5GsQFRlzW-gzGzoHsz',  appKey:'ycqjmtEfUxuxD3IY97oRkrdO'
		//appid: '6BMsyigADmQmTmVot7Bvfedv-MdYXbMMI', appkey: 't9Qx24vbwvimWMK2wzceFrQX',
		//appId: 'ikEEo5XOYTytaqIUMsLaiisX-gzGzoHsz', appKey: 'CBx5lgfUldUe1i1qBC6m7k0K',
	});
	//console.log(window.AV);
	var query = new AV.Query("Comment");
	query.descending("createdAt");//升序
	query.find().then(function(data){
	  //查询的结果数据 data
	  //将data转成json格式
	 var jsondata = JSON.parse(JSON.stringify(data));
 
	function formatDate(time){
		var date = new Date(time);

		var year = date.getFullYear(),
			month = date.getMonth() + 1,//月份是从0开始的
			day = date.getDate(),
			hour = date.getHours(),
			min = date.getMinutes(),
			sec = date.getSeconds(); 
 
		return {
      "day":month+'-'+day,
      "time":hour+':'+min+':'+sec
    };         
	}
    


    
  function getPic(str){  
    var result;
    pt = /^\d+@qq\.com$/;
    if (pt.test(str)) {
        var prefix = str.replace(/@.*/, ""),
            pattern = /^\d+$/g,
            result = prefix.match(pattern);
        result = "//q.qlogo.cn/headimg_dl?dst_uin=" + prefix + "&spec=640";
    }else if (str.indexOf("@") >= 0) {
        result = "http://www.gravatar.com/avatar/"+md5(data[p].attributes.mail)+"?s=32";
    }else{
        result = "http://www.gravatar.com/avatar/"+md5(data[p].attributes.mail)+"?s=32&&d=identicon";
    }
    return result;
  }  
  var pre = "time.day"; 
    
  $('#allinshow').append('<br><center><a class="timm" >更多历史评论请前往cz5h.com查阅！</a></center>');
    
	for(var p = data.length-1; p>=0;p--){//遍历json数组时，这么写p为索引，0,1
  //for(var p in data){//遍历json数组时，这么写p为索引，0,1
    var time = formatDate(data[p].attributes.insertedAt); 
    
    var t;
    var url = data[p].attributes.link; 
    if(url.substr(0,7).toLowerCase() == "http://" || url.substr(0,8).toLowerCase() == "https://"){
        url = '<a target="_blank" href="'+url+'">';
    }else{
        url = '<a target="_blank" href="https://' + url+'">'; 
    }
    if(url== '<a target="_blank" href="https://">' ){url='<a>'}

    if (pre != time.day){

      t = '<div class="timm">'+time.day+'</div>';
      pre = time.day;
    }else{
      t = '';
    }
		if(data[p].attributes.nick!="Administrator"
       &&data[p].attributes.nick!="胖五鸭"
       &&data[p].attributes.nick!="胖五"){
			//console.log(data[p].attributes.url);
			$('#allinshow').append(
        t
        +'<div class="sender">'
            +'<div>'+url+'<img src='+getPic(data[p].attributes.mail)+'></a></div>'
            +'<span class="lname">'+data[p].attributes.nick+'</span><br>'
            +'<div><div class="left_triangle"></div>'+data[p].attributes.comment.replace("<p>","").replace("</p>","")
        +' <a target="_blank" href="https://www.cz5h.com'+data[p].attributes.url+'"><i class="fa fa-share-square" style="font-size:15px;color:#88b6d6"></i></a>'+'</div>'
        +'</div ><div style="clear: both;"></div>'
        
        );

		}else{
      $('#allinshow').append(
        t
        +'<div class="receiver">'
            +'<div>'+url+'<img src="http://q.qlogo.cn/headimg_dl?dst_uin=1805984583&spec=640"></a></div>'
            +'<span class="rname">'+data[p].attributes.nick+'</span><br>'
            +'<div><div class="right_triangle"></div>'+data[p].attributes.comment.replace("<p>","").replace("</p>","")
            +'<a target="_blank" href="https://www.cz5h.com'+data[p].attributes.url+'"><i class="fa fa-share-square" style="font-size:15px;color:#88b6d6"></i></a></div>'
        +'</div><div style="clear: both;"></div>' 
        
        );
 
    }
	}
  $('#allinshow').append('<br><center><a name="end" id="end"class="timm" >已到达最新评论！</a></center><br><br>'+
                         '<div class="jump"><input type="text" style=" cursor: pointer;border-width:0;width:100%;height:100px;border-radius:7px;background-color: #fdfdfd;" disabled="true"/>'+
                         '<input type="button" value="前往博客" class="btn" onclick="window.open(\'https://www.cz5h.com\')"  /><div>');
	},function(err) {
	  //错误信息 err
	  //console.log('err');
	});
 
    
 
  setTimeout(function(){ 
    $("#btn").click(function(){alert(1)});
    $("html,body").animate({scrollTop: $("#end").offset().top}, 1000); 
    if(document.body.clientWidth<400){
      $(".sender div:nth-of-type(2)").css("max-width",document.body.clientWidth-130 );
      $(".receiver div:nth-of-type(2)").css("max-width",document.body.clientWidth-130 );
    }
    if(document.body.clientWidth<500){
      $(".jump").css("max-width",document.body.clientWidth-110 );
      $(".jump").css("padding-left","0px");
      $(".jump").css("float","right" );
      $(".btn").css("margin-right","0px" );
    }
  
  }, 4000)