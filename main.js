const btn = document.getElementById("bttn");
btn.addEventListener('click', (e)=> {
  e.preventDefault()
  score()
});

function score(){


// shows where the answers are
  var ans1 = document.quiz.q1.value;
  var ans2 = document.quiz.q2.value;
  var ans3 = document.quiz.q3.value;
  var ans4 = document.quiz.q4.value;


let myScore = 0;
// correct answers
if (ans1 === "YES") {
  myScore++
}
if (ans2 === "TRUE") {
  myScore++
}
if (ans3 === "ECMA") {
  myScore++
}
if (ans4 === "KENYATTA") {
  myScore++
}

var result = document.getElementById('result');
result.textContent = myScore;
quiz.style.display = 'none';

}

