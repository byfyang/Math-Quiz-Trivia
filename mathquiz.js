//load the JS after pages loads
window.addEventListener("load", showQuestion);
//initiate the timer
window.addEventListener("load", countDownInit);
//show the highest score
window.addEventListener("load", priorhighScore);

// //counter of array starts at zero
var counter = 0;
//# of correct answers at zero  
var correct = 0;
//initialize global object/value 
var gameQuestion = {};

//Question Array database
var questionsArray = [
    [ "What is 10 + 4?", "12", "14", "16", "B" ],
	[ "What is 20 - 9?", "7", "13", "11", "C" ],
	[ "What is 7 x 3?", "21", "24", "25", "A" ],
	[ "What is 8 / 2?", "10", "2", "4", "C" ],
	[ "What is 55 / 5?", "10", "11", "4", "B" ],
	[ "What is 8 x 12?", "96", "76", "86", "A" ]
];

//get Element function to be used later
function getElement(x){
	return document.getElementById(x);
}

//timer for game
function countDownInit() {
    countDownNumber = 11;
    countDownTrigger();
}

//timer for game
function countDownTrigger(){
    if(countDownNumber > 0){
            countDownNumber--;
            document.getElementById('timer').textContent = countDownNumber + " seconds left";
            if(countDownNumber > 0){
                countDown = setTimeout('countDownTrigger()', 1000);
            }
    }
}

//random selection of question from questionsArray
var randomQuestion = function (){
	gameQuestion = Math.floor(Math.random() * questionsArray.length);
	return gameQuestion;
};

//display Question from question database
function showQuestion(){

	var arrayIndex = randomQuestion();

	//grab questionArea on DOM
	questionArea = getElement("questionArea");
	
	//checks counter to length of array to display completion
	if(counter >= questionsArray.length){
		questionArea.innerHTML = "<h2>You got "+ correct + " of " + questionsArray.length + " questions correct</h2>";
			getElement("test_status").textContent = "Test Completed";
		//position = 0;
		//correct = 0;
 		return false;
 	}

	//assign array content to variables 
	var question = questionsArray[arrayIndex][0];
	var choiceA = questionsArray[arrayIndex][1];
	var choiceB = questionsArray[arrayIndex][2];
	var choiceC = questionsArray[arrayIndex][3];


	//grab DOM element and assign content to DOM
	questionArea.innerHTML = "<h2>"+question+"</h2>";
	questionArea.innerHTML += "<input type='radio' name='choices' value='A'> "+choiceA+"<br>";
	questionArea.innerHTML += "<input type='radio' name='choices' value='B'> "+choiceB+"<br>";
	questionArea.innerHTML += "<input type='radio' name='choices' value='C'> "+choiceC+"<br><br>";
	questionArea.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";

	//count# for question appearance
	counter++;

	//reset button
	reset();
}

//checkAnswer function
function checkAnswer(){
	//select "choices" from DOM after being set in showQuestion function
	var choices = document.getElementsByName("choices");
	for (var i = 0; i < choices.length; i++){
		if (choices[i].checked){
			selectedAnswer=choices[i].value;
		}
	}
	//compare answers and selected radio button while increasing count of correct answers
	if(selectedAnswer == questionsArray[gameQuestion][4]){
		correct++;
		currentScore();
	}
	showQuestion();
}

function currentScore(){
	//grab DOM element and pushing in score
	getElement('score').innerHTML = "Score: " + correct;
	//update localStorage score if need to
	if (correct >= localStorage.getItem('existingScore')){
		localStorage.setItem('existingScore', correct);
	 }
}

//set prior score
function priorhighScore(){
	if (localStorage.getItem('exisitingScore') === null){
		localStorage.setItem('existing', 0);
	}else
		currentScore();
		getElement('priorScores').innerHTML = "High Score: " +localStorage.getItem('existingScore');
	 
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



