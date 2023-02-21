const quizData = [
	{
		question: "1) In which country is the Taj Mahal?",
		a: "Germany",
		b: "USA",
		c: "Mexico",
		d: "India",
		correct: "d",
	},
	{
		question: "2) Which language is spoken in Australia?",
		a: "German",
		b: "English",
		c: "French",
		d: "Turkish",
		correct: "b",
	},
	{
		question: "3) What is the highest mountain in the world?",
		a: "Mount Everest",
		b: "Mount Fuji",
		c: "Mount Kilimanjaro",
		d: "Mount Elbrus",
		correct: "a",
	},
	{
		question: "4) Helsinki is the capital city of which country?",
		a: "France",
		b: "Finland",
		c: "İndia",
		d: "Ukraine",
		correct: "b",
	},
	{
		question: "5) How many days are there in a Year?",
		a: "367",
		b: "364",
		c: "363",
		d: "365",
		correct: "d",
	},
	{
		question: "6) What is the most used programming language in 2019?",
		a: "Java",
		b: "C",
		c: "Python",
		d: "JavaScript",
		correct: "d",
	},
	{
		question: "7) Which of the following is the city of Turkey?",
		a: "Helsinki",
		b: "İstanbul",
		c: "İmishli",
		d: "Ahmedli",
		correct: "b",
	},
	{
		question: "8) What is the capital of Azerbaijan?",
		a: "Astara",
		b: "Imishli",
		c: "Baku",
		d: "Quba",
		correct: "c",
	},
];

const totalQuestion = document.querySelector(".total-question");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

setTimeout(total, 4000);

function total() {
	totalQuestion.innerHTML = "";
}

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
	deselectAnswers();
	const currentQuizData = quizData[currentQuiz];
	questionEl.innerText = currentQuizData.question;
	const quiz = document.getElementById("quiz");
	a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;
}

function getSelected() {
	let answer = undefined;
	answerEls.forEach((answerEl) => {
		if (answerEl.checked) {
			answer = answerEl.id;
		}
	});
	return answer;
}

function deselectAnswers() {
	answerEls.forEach((answerEl) => {
		answerEl.checked = false;
	});
}

submitBtn.addEventListener("click", () => {
	const answer = getSelected();
	if (answer) {
		if (answer === quizData[currentQuiz].correct) {
			score++;
		}

		currentQuiz++;

		if (currentQuiz < quizData.length) {
			loadQuiz();
		} else {
			quiz.innerHTML = `
    <h2>Your Score: ${score}/${quizData.length}</h2> <button onClick="location.reload()">To Try Again.</button>
    `;
		}
	}
});
