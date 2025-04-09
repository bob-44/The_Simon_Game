
var gamePattern = [];
var color = ["green", "red", "yellow", "blue"];

var userClickedPattern = [];
var level = 0;



$(document).keypress(function () {
if (level===0) {
  
  nextSequence();
}
else if  (level===-1) {

  $("h1").text("Press A Keu to Start");
  $("body").removeClass("game-over");
  level=0;
  gamePattern=[];
  userClickedPattern=[];
  
  
  }


}
  
);
var keycount=0;
$(".btn").click(function () {
  
  var userClickedColor = $(this).attr("id");
  buttonPressedEffect(userClickedColor);
  console.log(userClickedColor);
  playSound(userClickedColor);
  userClickedPattern.push(userClickedColor);
  keycount++;

  if (keycount === gamePattern.length) {
    console.log("user : "+userClickedPattern);
    console.log("game : "+gamePattern);
    checkSequence();
  }
});

function nextSequence() {
  userClickedPattern = [];
  level++; 
  gameState(level); 
  randomButtonExecute();
  keycount=0;
  
}
function checkSequence() {
  if (arraysAreEqual(userClickedPattern, gamePattern)) {
    setTimeout(function () {
      nextSequence();
    }, 1000); 
   
    

  } else {
    level = -1;
    gameState(level);
  }
}
function randomButtonExecute() {
  var randomIndex = Math.floor(Math.random() * 4);

  var buttonName = $(".btn").eq(randomIndex).attr("id");

  buttonFadeEffect(buttonName);
  playSound(buttonName);
  gamePattern.push(buttonName);

}






function buttonFadeEffect(nameOfButton) {
  $("#" + nameOfButton).fadeIn(100).fadeOut(100).fadeIn(100);
}



function buttonPressedEffect(nameOfButton) {
  
  buttonPressed = $("#" + nameOfButton);
  buttonPressed.addClass("pressed");
  setTimeout(() => {
    buttonPressed.removeClass("pressed");
  }, 100);

}

function arraysAreEqual(array1, array2) {
  if (array1.length !== array2.length) return false;
  return array1.every((value, index) => value === array2[index]);
}




function playSound(nameOfButton) {
  var audio = new Audio("sounds/" + nameOfButton + ".mp3");
  audio.play();
}



function gameState(level) {

  var currentLevelText;
  if (level === 0) {
    currentLevelText = "Press A Key to Start";
    $("h1").text(currentLevelText);

  }
  else if (level > 0) {
    currentLevelText = "Level " + level;
    $("h1").text(currentLevelText);

  }
  else if (level===-1)
    {
      playSound("wrong");
    currentLevelText = "Game Over! Press any Key to Start Again!";
    $("h1").text(currentLevelText);
    $("body").addClass("game-over");
   
    
    }
  else {
    alert("Level equals to : " +level)
  }
}



