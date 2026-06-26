const quiz = {
    name: "",
    score: 0,
    highScore: 0,

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
            alert(
                `Correct!\nCurrent score: ${this.score}/${this.questions.length}`
            );
        } else {
            alert(
                `Incorrect. The correct answer was ${correctAnswer}.\nCurrent score: ${this.score}/${this.questions.length}`
            );
        }
    },

    // Calculates percentage
    calculatePercentage() {
        return Math.round(
            (this.score / this.questions.length) * 100
        );
    },

    // Calculates grade
    getGrade() {
        const percentage = this.calculatePercentage();

        if (percentage <= 49) {
            return "N";
        } else if (percentage <= 64) {
            return "A";
        } else if (percentage <= 80) {
            return "M";
        } else {
            return "E";
        }
    },

    // Gives feedback
    getFeedback() {
        const grade = this.getGrade();

        if (grade === "N") {
            return "You need to study more.";
        } else if (grade === "A") {
            return "Good work, you attained an A grade.";
        } else if (grade === "M") {
            return "Well done, you achieved an M in this quiz.";
        } else {
            return "You are exceptional, your hard work has paid off, you attained an E.";
        }
    },

    // Updates high score
    updateHighScore() {
        if (this.score > this.highScore) {
            this.highScore = this.score;
        }
    },

    // Displays the final score
    showResults() {

        this.updateHighScore();

        alert(
            `${this.name}, you scored ${this.score} out of ${this.questions.length}.

Percentage: ${this.calculatePercentage()}%

Grade: ${this.getGrade()}

${this.getFeedback()}

Highest Score: ${this.highScore}/${this.questions.length}`
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

alert(
    `Thanks for playing!

Highest score achieved: ${quiz.highScore}/${quiz.questions.length}`
);