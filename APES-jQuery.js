$(document).ready(function(){
	
	$("#showanswer").hide();
	$("#question1").hide();
	$("#question2").hide();
	$("#question3").hide();
	$("#next").hide();
	$("#answer1").hide();
	$("#answer2").hide();
	$("#answer3").hide();
	
	$("#start").click(function(){
		$("#start").hide();
		$("#question1").show();
		$("#showanswer").show();
	});
	
	$("#showanswer").click(function(){
		$("#showanswer").hide();
		$("#answer1").show();
		$("#next").show();
	});
	
	$("#next").click(function(){
		$("#next").hide();
		$("#question1").hide();
		$("#answer1").hide();
		$("#question2").show();
		$("#answer2").hide();
		$("#showanswer").show();
	});
	
	$("#showanswer").click(function(){
		$("#showanswer").hide();
		$("#answer1").hide();
		$("#answer2").show();
		$("#next").show();
	});
	
	$("#next").click(function(){
		$("#next").hide();
		$("#question2").hide();
		$("#answer2").hide();
		$("#question3").show();
		$("#answer3").hide();
		$("#showanswer").show();
	});
	
	$("#showanswer").click(function(){
		$("#showanswer").hide();
		$("#answer2").hide();
		$("#answer3").show();
		$("#next").show();
	});
	
});