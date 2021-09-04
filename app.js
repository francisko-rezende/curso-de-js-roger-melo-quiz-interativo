const form = document.querySelector('.quiz-form')
const finalScoreContainer = document.querySelector('.final-score-container')

const correctAnswers = ['A','B','C','D']

let score = 0

const getUserAnswers = () => correctAnswers.map((_, index) => 
    form[`inputQuestion${index + 1}`].value)

const calculateUserScore = userAnswers => {
    userAnswers.forEach((answer, index) => {
        const isUserAnswerCorrect = answer === correctAnswers[index]

        if (isUserAnswerCorrect) {
            score += 25
        }
    })
}

const showFinalScore = () => {
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
    finalScoreContainer.classList.remove('d-none')
}

const animateFinalScore = () => {
    let counter = 0


    const timer = setInterval(() => {
        if (counter === score) {
            clearInterval(timer)
        }

        finalScoreContainer.querySelector('span').textContent = `${counter++}%`
    }, 10)
}

form.addEventListener('submit', event => {
    event.preventDefault()


    //obtém as respostas do usuário
    const userAnswers = getUserAnswers()

    // calcula a pontuação do usuário
    calculateUserScore(userAnswers)
    
    // exibe a pontuação final
    showFinalScore()
    
    // anima pontuação final
    animateFinalScore()
})