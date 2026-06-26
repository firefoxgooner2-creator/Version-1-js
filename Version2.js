
const quiz = {
    name: "",
    score: 0,

    // Questions 
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

    // Gets the persons name
    getName() {
        this.name = prompt("Enter your name:");

        if (!this.name) {
            this.name = "Name";
        }

        alert(`Welcome ${this.name}!`);
    },

    // Checks if the answer is valid
    getAnswer(questionObj, index) {
        let response;

        do {
            response = prompt(
                `Question ${index + 1} of ${this.questions.length}\n\n${questionObj.text}`
            );

            if (response === null) {
                alert("No answer entered.");
                continue;
            }

            response = response.trim().toUpperCase();

            if (!["A", "B", "C", "D"].includes(response)) {
                alert("Please enter A, B, C, or D.");
            }

        } while (!["A", "B", "C", "D"].includes(response));

        return response;
    },

    // Checks answer and updates score
    checkAnswer(userAnswer, correctAnswer) {
        if (userAnswer === correctAnswer) {
            this.score++;
            alert(`Correct!\nCurrent score: ${this.score}/${this.questions.length}`);
        } else {
            alert(
                `Incorrect. The correct answer was ${correctAnswer}.\nCurrent score: ${this.score}/${this.questions.length}`
            );
        }
    },

    // Displays the final score
    showResults() {
        alert(
            `${this.name}, you scored ${this.score} out of ${this.questions.length}.`
        );
    },

    // Runs the quiz
    run() {
        this.score = 0;

        this.getName();

        for (let i = 0; i < this.questions.length; i++) {
            const answer = this.getAnswer(this.questions[i], i);
            this.checkAnswer(answer, this.questions[i].answer);
        }

        this.showResults();
    }
};

// Main program loop
let playAgain;

do {
    quiz.run();

    playAgain = prompt("Play again? (Y/N)");

    if (playAgain !== null) {
        playAgain = playAgain.trim().toUpperCase();
    }

} while (playAgain === "Y");

alert("Thanks for playing!");