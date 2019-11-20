let game = {

    score: 0,
    nextQuestionIndex: 0,

    run() {

        if (!this.isQuestionExists()) {
            console.log(`Игра окончена, ваш счет ${this.score} `);
            this.nextQuestionIndex= 0;
            this.score= 0;
            if (confirm("Хотите сыграть еще?")) {
                this.run();
            }
            return;
        }
        let result = leader.askQuestion(question[this.nextQuestionIndex]);
        if (result) {
            this.score++;
        }
        this.nextQuestionIndex++;
        this.run();
    },

    isQuestionExists() {
        return question[this.nextQuestionIndex]
        !== undefined;
    },

};

console.log("Добро пожаловать в игру Кто хочет стать миллионером, предстоит ответить на 5 вопросов, на каждый вопрос предлагается 4 варианта ответа а, б, в или г.");
console.log("Чтобы начать игру наберите game.run() и нажмите Enter.");



















