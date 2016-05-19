//load the JS after pages loads
window.addEventListener("load", showQuestion);
//position of array starts at zero
var position = 0;
//# of correct answers at zero  
var correct = 0;

//Question Array database
var questionsArray = [
    [ "What is 10 + 4?", "12", "14", "16", "B" ],
	[ "What is 20 - 9?", "7", "13", "11", "C" ],
	[ "What is 7 x 3?", "21", "24", "25", "A" ],
	[ "What is 8 / 2?", "10", "2", "4", "C" ],
	[ "What is 55 / 5?", "10", "11", "4", "B" ],
	[ "What is 8 x 12?", "96", "76", "86", "A" ]
];

//random selection of question from questionsArray
var randomQuestion = function (){
	var cQuestion = Math.floor(Math.random() * questionsArray.length);
	return cQuestion;
};




//timer for game
// function countDown(secs, elem){
// 	secs = 10;
// 	var element = document.getElementsByID('timer');
// 	console.log(element);
// 	element.innerHTML = "<p1>Remaing Time: " + secs + " seconds</p1>";
// 	if (secs <1){
// 		clearTimeout(timer);
// 		element.innerHTML = "<p2>Too Slow</p2>";

// 	}
// 	secs--;
// 	var timer = setTimeout('countDown('+secs+',"'+ elem +'")',1000);
// }



//get Element function
function getElement(x){
	return document.getElementById(x);
}

//display Question from question database
function showQuestion(){
	
	//initiate priorhighScore() function so it displays on DOM
	priorhighScore();

	//grab questionArea on DOM
	questionArea = getElement("questionArea");
	
	//checks position relative to length of array to display completion
	if(position >= questionsArray.length){
		questionArea.innerHTML = "<h2>You got "+ correct + " of " + questionsArray.length + " questions correct</h2>";
			getElement("test_status").textContent = "Test Completed";
		position = 0;
		correct = 0;
 		return false;
 	}

 	//var cQuestion = Math.floor(Math.random() * questionsArray.length);
	//assign array content to variables 
	var question = questionsArray[position][0];
	var choiceA = questionsArray[position][1];
	var choiceB = questionsArray[position][2];
	var choiceC = questionsArray[position][3];

	//assign content to DOM
	questionArea.innerHTML = "<h2>"+question+"</h2>";
	questionArea.innerHTML += "<input type='radio' name='choices' value='A'> "+choiceA+"<br>";
	questionArea.innerHTML += "<input type='radio' name='choices' value='B'> "+choiceB+"<br>";
	questionArea.innerHTML += "<input type='radio' name='choices' value='C'> "+choiceC+"<br><br>";
	questionArea.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
	console.log(document.getElementsByName('choices'));

	//reset button
	reset();
}

//checkAnswer function
function checkAnswer(){
	var choices = document.getElementsByName("choices");
	for (var i = 0; i < choices.length; i++){
		if (choices[i].checked){
			selectedAnswer=choices[i].value;
		}
	}
	if(selectedAnswer == questionsArray[position][4]){
		//alert("correct");
		correct++;
		currentScore();
	}
	position++;
	showQuestion();
}

function currentScore(){
	//set current score
	getElement('score').innerHTML = "Score: " + correct;
	//update localStorage score if need to
	if (correct > localStorage.getItem('existingScore')){
		localStorage.setItem('existingScore', correct);
	 }
}

//set prior score
function priorhighScore(){
	getElement('priorScores').innerHTML = "Prior High Score: " +localStorage.getItem('existingScore');
}

//reset button function
function reset(){
	var reset = document.getElementById('StartOver');
		reset.addEventListener('click', startOver);
}
//reset function - location.reload
function startOver(){
	location.reload();
}


// $('.flashcard').on('click', function() {
// 	$('.flashcard').toggleClass('flipped');
// 	});


// $(document).ready(function() {
//   $('.flashcard').on('click', function() {
//     $('.flashcard').toggleClass('flipped');
//   });
// });


//randomword - arrayOfWords[Math.floor(Math.random()*arrayofWords.length)];



