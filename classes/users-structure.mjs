class User {

    constructor (userId, quizzes) {
        this.userId = userId,
        this.quizzes = quizzes
    }
}

class Question {

    constructor (question, options, correct, answNum) {
        this.question = question,
        this.options = options,
        this.correct = correct,
        this.answNum = answNum
    }
}

export { User, Question }