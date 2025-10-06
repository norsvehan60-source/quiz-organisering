
const quizData = [
    {
        question: "Hva er en mappe på en datamaskin?",
        options: ["Et program", "Et sted for å lagre filer", "En type virus", "En internettforbindelse"],
        answer: 1
    },
    {
        question: "Hva betyr det å 'slette' en fil?",
        options: ["Å kopiere den", "Å gjøre den større", "Å fjerne den fra enheten", "Å sende den til en venn"],
        answer: 2
    },
    {
        question: "Hvor havner filer vanligvis når du sletter dem på PC?",
        options: ["Internett", "Papirkurven", "Skrivebordet", "Dokumenter"],
        answer: 1
    },
    {
        question: "Hva er en god måte å organisere bilder på mobilen?",
        options: ["Slette alle bilder", "Lage mapper eller album", "Skrive ut bildene", "Dele dem på sosiale medier"],
        answer: 1
    },
    {
        question: "Hva betyr det å 'komprimere' en fil?",
        options: ["Å gjøre den større", "Å gjøre den mindre i størrelse", "Å kopiere den", "Å slette den"],
        answer: 1
    }
];

let currentQuestion = 0;

function loadQuestion() {
    const container = document.getElementById("quiz-container");
    container.innerHTML = "";
    const q = quizData[currentQuestion];
    const questionEl = document.createElement("h2");
    questionEl.textContent = q.question;
    container.appendChild(questionEl);

    q.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(index);
        container.appendChild(btn);
    });
}

function checkAnswer(selected) {
    const correct = quizData[currentQuestion].answer;
    const container = document.getElementById("quiz-container");
    const result = document.createElement("p");
    result.textContent = selected === correct ? "✅ Riktig!" : "❌ Feil svar.";
    container.appendChild(result);

    currentQuestion++;
    if (currentQuestion < quizData.length) {
        setTimeout(loadQuestion, 1500);
    } else {
        setTimeout(() => {
            container.innerHTML = "<h2>Quiz ferdig!</h2>";
        }, 1500);
    }
}

window.onload = loadQuestion;
