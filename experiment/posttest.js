///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////THIS A LOGIC TO IMPLEMENT THE QUIZ///////////////////////////////////////////////////////////
var currentQuestion= 0;
var score = 0;
var totQuestion = parseInt(questions.length);
var container= document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
function loadQuestion(questionIndex)
{
  var q = questions[questionIndex];
  questionEl.textContent = (questionIndex + 1)+ '.' + q.question;
  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
  opt3.textContent = q.option3;
  opt4.textContent = q.option4;
}
 function loadNextQuestion()
 {
  var selectedOption = document.querySelector('input[type=radio]:checked');
  if(!selectedOption)
  {
  alert("Please select your answer!");
  return;
   };

var answer = selectedOption.value;
if(questions[currentQuestion].answer == answer){
score += 10;
}
selectedOption.checked = false;
currentQuestion++;
if(currentQuestion === totQuestion-1)
{
	nextButton.textContent='Finish';
}
if(currentQuestion == totQuestion)
{
 container.style.display ='none';
 resultCont.style.display ='';
 resultCont.textContent ='Your Score:' + score;
 return;
}
loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////THIS IS A ARRAY OF 10 QUESTIONS  WRITE EXACTLY SAME AS WRITTEN/////////////////////////////////////////
var questions = [{
	"question":"Recursive solution of Tower of Hanoi problem is an example of which of the following algorihm ?",
	"option1": "Divide and Conquer",
	"option2":"Dynamic Programming",
	"option3":"Backtracking",
	"option4":"Greedy Algorithm",
	"answer":"1"
},{
	"question":"Which among the followingis not a palindrome ?",
	"option1": "Madam",
	"option2":"Maadam",
	"option3":"Dad",
	"option4":"Malayalam",
	"answer":"2"
},{
	"question":"Which data structure can be used suitably to solve the Tower of Hanoi problem ?",
	"option1": "Tree",
	"option2":"Heap",
	"option3":"Stack",
	"option4":"Priority Queue",
	"answer":"3"
},{
	"question":"Space complexity of recursive solution of Tower of Hanoi Puzzle ?",
	"option1": "O(n)",
	"option2":"O(1)",
	"option3":"O(logn)",
	"option4":"O(nlogn)",
	"answer":"1"
},{
	"question":"Minimum number of moves required to solve a Tower of Hanoi problem with n disks is ?",
	"option1": "2^n+1",
	"option2":"2^n-1",
	"option3":"2n-1",
	"option4":"2n+1",
	"answer":"2"
},{
	"question":"The time complexity of the soluton Tower of Hanoi problem using recursion ?",
	"option1": "O(n^2)",
	"option2":"O(nlogn)",
	"option3":"O(n)",
	"option4":"O(2^n)",
	"answer":"4"
},{
	"question":"What is the objective of Tower of Hanoi Puzzle ?",
	"option1": "To move all the disks to other rod by following rules. ",
	"option2":"To divide the disks equally among the three rods by following rules.",
	"option3":"To move all the disks to some other rod in random order.",
	"option4":"None of the above",
	"answer":"1"
},{
	"question":"The Tower of Hanoi has many useful applications.It is used in which of the following field(s) ?",
	"option1": "Computer Programming and Algorithms",
	"option2":"Psychological Research",
	"option3":"Data Backup rotation scheme",
	"option4":"All of the above.",
	"answer":"2"
},{
	"question":"What is the equation that is used to solve the puzzle of Tower of Hanoi ?",
	"option1": "Arithmetic Progression",
	"option2":"Geometric Progression",
	"option3":"Recurrence Relation",
	"option4":"Fibonacci Sequence",
	"answer":"3"
},{
	"question":"The Tower of Hanoi is a mathemtical Puzzle that was invented back in 1883 by a French Mathematician.Who was she/he ?",
	"option1": "Leonardo da Pisa",
	"option2":"Pierra Fermat",
	"option3":"Edouard Lucas",
	"option4":"None of the above",
	"answer":"3"
}]


