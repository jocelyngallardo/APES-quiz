$(document).ready(function(){
	
	var q="question";
	var count=1;
	
	$("#start").click(function(){
		$("#start").hide();
		$("#question"+count).show();
		$("#showanswer").show();
		$("#showanswer").click(function(){
			$("#showanswer").hide();
			$("#answer"+count).show();
			$("#next").show();
		});
		$("#next").click(function(){
			$("#next").hide();
			$("#question"+count).hide();
			$("#answer"+count).hide();
			count++;
			if(count == 9)
			{
				$("#finish").show();
			}else{
			$("#question"+count).show();
			$("#showanswer").show();
			}
			
		});
		$("#finish").click(function(){
			$("#finish").hide();
			$("#start").show();
		});
	
		
	});
	


});