 var  teamTimer = 0;
 var labelBodyTimer = 0;
 $(function(){
     
     $(".labelCloudBody").addClass("active").show();          
      teamTimer = setTimeout(function(){
          	clearTimeout(teamTimer);
          	      //第二步展现团队信息
          	      $("#teamInfo").addClass("active");
                  //第三步延迟3s 去掉整体背景active
		    labelBodyTimer = setTimeout(function(){
		    	    clearTimeout(labelBodyTimer); 

	          	    $(".labelCloudBody").removeClass("active");
				    //第四步展现客户画像
                    $("#headPortrait").addClass("active");
                    renderLabelCloudData(1);
                    
		      },2000)    

          },1000)

     $("#labelSelect").change(function(){
          changeLabelType($(this).val());
     })
          
})

function changeLabelType(labelTypeIndex){
	 $(cloudMap["face"]["id"]).empty();
     $(cloudMap["leftEar"]["id"]).empty();
     $(cloudMap["rightEar"]["id"]).empty();
     $(cloudMap["neck"]["id"]).empty();
     $(cloudMap["chest"]["id"]).empty();
      renderLabelCloudData(labelTypeIndex);
	
}
//渲染标签云数据
function  renderLabelCloudData(selectedVal){
	   var itemData = labelDataArr[selectedVal];
	    //面部区域
        $(cloudMap["face"]["id"]).jQCloud(
        	joinJsonData(itemData[cloudMap["face"]["key"]]),
			{
				rotate: true,
				colorArr:cloudMap["colorArr"],
				animateClass: cloudMap["animateClass"]
		});
		//左耳朵区域
		$(cloudMap["leftEar"]["id"]).jQCloud(
			itemData[cloudMap["leftEar"]["key"]],
			{
				rotate:false,
				colorArr : cloudMap["colorArr"],
				animateClass:cloudMap["animateClass"]
		});
		//右耳朵区域
		$(cloudMap["rightEar"]["id"]).jQCloud(
			itemData[cloudMap["rightEar"]["key"]],
			{
				rotate:false,
				colorArr :  cloudMap["colorArr"],
				animateClass:cloudMap["animateClass"]
		});
		//颈部区域
		$(cloudMap["neck"]["id"]).jQCloud(
			itemData[cloudMap["neck"]["key"]],
			{
				shape: "rectangular",
				rotate:false,
				colorArr : cloudMap["colorArr"],
				animateClass:cloudMap["animateClass"]
		});
		
		//胸部样式
		$(cloudMap["chest"]["id"]).jQCloud(
			itemData[cloudMap["chest"]["key"]],
			{
				shape: "rectangular",
				rotate:false,
				colorArr : cloudMap["colorArr"],
				animateClass:cloudMap["animateClass"]
		});
}
function joinJsonData(dataArr){
	var jsonObjArr = [];
	var dataItem;
	var fontStyle;
	for (var i = 0 ,len =dataArr.length; i < len; i++) {
		 dataItem = dataArr[i];
		 if(dataItem[1] >= 8){
             fontStyle = "vertical";
		 }else{
             fontStyle = "span_list";
		 }
		jsonObjArr.push("{text: '" + dataItem[0] + "', weight: '" + dataItem[1] + "',html: {'class': 'span_list',onmouseover:'on_mouseover(event , \""+dataItem[0]+"\",\""+dataItem[1]+"\",\""+dataItem[2]+"\")',onmouseout:'on_mouseout()'}}");
	}
	return eval("[" + jsonObjArr.join(",") + "]");
}

//鼠标mouseover 操作
 function on_mouseover(ev , param1, param2 , param3) {
		ev = ev || event;
		var temp =  param1 +"<br /> 曝光数 : "+param2+"<br />"+param3;
		$("#detailTip").css({"left": ev.clientX , "top": ev.clientY}).html(temp).show();
}
//鼠标mouseout 操作
function on_mouseout() {
	$("#detailTip").hide();
}