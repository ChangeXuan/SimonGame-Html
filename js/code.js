
var colorAry = [2];
var buttonAry = [];
var timeColor;
var difficultyFlag = true;
var btnSoundOne = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
var btnSoundTwo = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3 ");
var btnSoundThree = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3 ");
var btnSoundFour = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3 ");

function clearState() {
	if (difficultyFlag) {
		if (colorAry.length > 1) {
			colorAry.pop();
		}
		buttonAry = [];
		playIng();
	} else {
		alert("replay");
		colorAry = [2];
		buttonAry = [];
		playIng();
	}
}

function isNext() {
	if (buttonAry.length == colorAry.length) {

		if (buttonAry[buttonAry.length-1] != colorAry[colorAry.length-1]) {
			clearState();
			btnSoundTwo.play();
			return 0;
		}

		if (buttonAry.toString() == colorAry.toString()) {
			btnSoundOne.play();
			colorAry.push(Math.floor(Math.random()*4));
			buttonAry = [];
			playIng();
		}
	} else {
		btnSoundOne.play();
	}
}

function playIng() {

	if (colorAry.length >= 21) {
		alert("success");
		return 0;
	}

	var i = 0;
	timeColor = setInterval(function(){ 
		changeHeartColor(colorAry[i]);
		i++;
	},1000);
	$("#num").html(colorAry.length);
}

function changeHeartColor(colorNum) {

	$("#heart").removeClass();

	switch(colorNum) {
		case 0:
			$("#heart").addClass("heartR");
			break;
		case 1:
			$("#heart").addClass("heartY");
			break;
		case 2:
			$("#heart").addClass("heartB");
			break;
		case 3:
			$("#heart").addClass("heartG");
		break;
		default:
			$("#heart").addClass("heartW");
			clearInterval(timeColor);
			break;
	}

}

$( document ).ready(function() {

	$("#colorOne").click(function(){
		$("#colorOne").animate({
        	backgroundColor: "rgba(255,0,0, 1)"
      	}, 500);
      	$("#colorOne").animate({
        	backgroundColor: "rgba(255,128,128, 1)"
      	}, 500);
		buttonAry.push(0);
		isNext();
	});

	$("#colorTwo").click(function(){
		$("#colorTwo").animate({
        	backgroundColor: "rgba(255,255,0, 1)"
      	}, 500);
      	$("#colorTwo").animate({
        	backgroundColor: "rgba(255,255,128, 1)"
      	}, 500);
		buttonAry.push(1);
		isNext();
	});

	$("#colorThree").click(function(){
		$("#colorThree").animate({
        	backgroundColor: "rgba(0,0,255, 1)"
      	}, 500);
      	$("#colorThree").animate({
        	backgroundColor: "rgba(128,255,255, 1)"
      	}, 500);
		buttonAry.push(2);
		isNext();
	});

	$("#colorFour").click(function(){
		$("#colorFour").animate({
        	backgroundColor: "rgba(0,255,0, 1)"
      	}, 500);
      	$("#colorFour").animate({
        	backgroundColor: "rgba(128,255,128, 1)"
      	}, 500);
		buttonAry.push(3);
		isNext();
	});

	$("#oneClass").click(function(){

		difficultyFlag = true;

   		$(".well").animate({
        	backgroundColor: "rgba(245,245,245, 1)"
      	}, 1000);

      	$("h2").animate({
        	color: "#003366"
      	}, 1000);

	});

	$("#twoClass").click(function(){

		difficultyFlag = false;

   		$(".well").animate({
       	 	backgroundColor: "rgba(0,0,0,1)"
      	}, 1000);

      	$("h2").animate({ 
        	color: "#fff"
      	}, 1000);

	});

	$("#play").click(function(){
		playIng();
	});

	$("#replay").click(function(){
		colorAry = [2];
		buttonAry = [];
		playIng();
	});

});