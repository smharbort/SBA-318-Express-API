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

const someQs = new Question ("Which is pink?", ["pikachu", "squirtle", "bulbasaur", "jigglypuff"], "jigglypuff", 4)
const trying = new User (16, [ { category: "pokemon", questions: [someQs] } ])

console.log(JSON.stringify(someQs, null, 5))
console.log("\n\n")
console.log(JSON.stringify(trying, null, 5))