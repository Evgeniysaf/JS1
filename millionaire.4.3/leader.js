let leader = {

    askQuestion(question) {
        let variations = "";
        for (let key in question.answerOptions) {
            variations += `${key}: ${question.answerOptions[key]}\n`;
        }

        let answer = prompt(`${question.orderOfIssues},Варианты ответа: \n ${variations}`);
        return answer === question.correctAnswer;
    }

};



