var startBtn = document.getElementById("start")
console.log(startBtn)

var quizBank = [{
    prompt: "Hey I'm the qustion prompt",
    choices: [{ value: "Cynthia", isCorrect: true },{value: "Mike", isCorrect: false}]
},
{
    prompt: "Hey I'm the 22222 prompt",
    choices: [{ value: "4234", isCorrect: true },{value: "M234ike", isCorrect: false}]
}

]
var currentIndex;

console.dir(startBtn)



console.log(startBtn.parentElement.nextElementSibling)


function checkAnswer(event){
    event.preventDefault()
    console.log(event)
    console.dir(event.target)
    console.log(this)
    if(event.target.id === "start"){
}

    if (event.target.textContent == "Current Correct Answer") {
    // do what we do if it's correct
    console.log("correct")
} else {
    console.log("incorrect")
}

// if you have more questions?
//currentIndex ++
showQuiz()
}

startBtn.parentElement.nextElementSibling.setAttribute("correct", "true")
startBtn.parentElement.nextElementSibling.addEventListener("click", handleEvent)

function showQuiz(){
var currentQuestion = quizBank[currentIndex]
//target the question prompt, and then populate the text with the currentQuestion prompt

//iterate through the currentQuestion options,
create a button for each
populate it with the value
document.createElement("button")
if it's correct, add something unique to that node
addeventListern, checkAnswer


}

function startQuiz(event){
    event.preventDefault()
    startBtn.parentElement.nextElementSibling.removeAttribute("hidden")
    startBtn.parentElement.hidden=true
    currentIndex = 0
    showQuiz()
}


startBtn.addEventListener("click", startQuiz)