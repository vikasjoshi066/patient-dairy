export class Question {
    constructor(questionIdentifier, question, answerType, answers, order, questionDescription = '') {
        this.questionIdentifier = questionIdentifier;
        this.question = question;
        this.answerType = answerType;
        this.answers = answers;
        this.order = order;
        this.questionDescription = questionDescription;
    }
}

export class Answer {
    constructor(answer, order, answerIdentifier, value = null, clearOtherAnswers = false, answerDescription = '') {
        this.answer = answer;
        this.order = order;
        this.answerIdentifier = answerIdentifier;
        this.value = value;
        this.clearOtherAnswers = clearOtherAnswers;
        this.answerDescription = answerDescription;
    }
}
