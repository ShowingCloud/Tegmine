$(document).ready(function(){
	$.ui.splitview=false;
	$.ui.launch();
});

$.ui.showBackButton = false;

$("#welcome").ready(function(){
	setTimeout(function(){
		$("#welcome2").fadeIn(2000);
	},800);
	setTimeout(function(){
		$("#loginin").fadeIn(800);
	},2800);
});