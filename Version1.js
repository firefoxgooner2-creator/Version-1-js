const quiz = {
    Name: "",
    score: 0,
    questions: [
        {
            text: "What's the largest animal?\nA) Elephant\nB) Blue Whale\nC) Giraffe\nD) Lion",
            answer: "B"
        },
        {
            text: "What's the fastest animal?\nA) Mouse\nB) Cat\nC) Cheetah\nD) Panther",
            answer: "C"
        },
        {
            text: "What's the smallest animal?\nA) Dog\nB) Rat\nC) Hippo\nD) Monkey",
            answer: "B"
        },
        {
            text: "What's the most human-like animal?\nA) Chimpanzee\nB) Baboon\nC) Gorilla\nD) Fox",
            answer: "A"
        },
        {
            text: "Which animal is known as the King of the Jungle?\nA) Tiger\nB) Elephant\nC) Lion\nD) Gorilla",
            answer: "C"
        }
    ],

    getName() {
        this.Name = prompt("What is your name?") || "Name";
        alert(`Welcome ${this.Name}! Let's go!`);
    },

    askQuestion(questionObj, index) {
        const response = prompt(`Question ${index + 1}:\n${questionObj.text}`);

        if (!response) {
            alert("No answer given. Next question.");
            return;
        }

        const normalized = response.trim().toUpperCase();

        if (normalized === questionObj.answer) {
            alert("Correct!");
            this.score++;
        } else {
            alert(`Wrong! The correct answer was ${questionObj.answer}.`);
        }
    },

    run() {
        this.score = 0; // Reset score each game
        this.getName();

        this.questions.forEach((question, index) => {
            this.askQuestion(question, index);
        });

        this.showResults();
    },

    showResults() {
        alert(`${this.Name}, you scored ${this.score} out of ${this.questions.length}.`);
    }
};

let playAgain;

do {
    quiz.run();
    playAgain = prompt("Play again? (Y/N)")?.trim().toUpperCase();
} while (playAgain === "Y");

alert("Thanks for playing!");