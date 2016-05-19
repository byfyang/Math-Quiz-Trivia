//load the JS after pages loads
window.addEventListener("load", showQuestion, countDown);

//position of array starts at zero
var position = 0;
//position of correct answers at zero  
var correct = 0;

//Question Array database
var questionsArray = [
    [ "What is 10 + 4?", "12", "14", "16", "B" ],
	[ "What is 20 - 9?", "7", "13", "11", "C" ],
	[ "What is 7 x 3?", "21", "24", "25", "A" ],
	[ "What is 8 / 2?", "10", "2", "4", "C" ]
];

function countDown(secs, elem){
	secs = 10;
	elem ="";
	var element = document.getElementsByID("clock");
	console.log(element);
	element.innerHTML = "Remaing Time: " + secs + " seconds";
	if (secs <1){
		clearTimeout(timer);
		element.innerHTML = "<p>Too Slow</p>";

	}
	secs--;
	var timer = setTimeout('countDown('+secs+',"'+ elem +'")',1000);
}



//get Element function
function getElement(x){
	return document.getElementById(x);
}

//display Question from question database
function showQuestion(){
	questionArea = getElement("questionArea");
	
	if(position >= questionsArray.length){
		questionArea.innerHTML = "<h2>You got "+ correct + " of " + questionsArray.length + " questions correct</h2>";
			
			getElement("test_status").textContent = "Test Completed";

	position = 0;
	correct = 0;
 	return false;



 }

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
	}
	position++;
	showQuestion();

}

// $('.flashcard').on('click', function() {
// 	$('.flashcard').toggleClass('flipped');
// 	});

	






//reset button function
function reset(){
	var reset = document.getElementById('StartOver');
		reset.addEventListener('click', startOver);
}
//reset function - location.reload
function startOver(){
	location.reload();
}





// function Quiz(theQuestion, theChoices, theAnswer){
// 	this.question = theQuestion;
// 	this.choice = theChoices;
// 	this.answer = theAnswer;
// 	this.userAnswer = "";
 

// $(document).ready(function() {
//   $('.flashcard').on('click', function() {
//     $('.flashcard').toggleClass('flipped');
//   });
// });




