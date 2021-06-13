const correctAnswers = ['B', 'B', 'B', 'A']
const form = document.querySelector('.quiz-form')
let score = 0

const alertResult = document.createElement('div')

const insertAlertOfResultInDOM = () => {
  alertResult.setAttribute('class', 'alert alert-warning')
  alertResult.setAttribute('role', 'alert')
  alertResult.textContent = `A sua pontuação é de: ${score} pontos`
  form.insertAdjacentElement('afterbegin', alertResult)
  score = 0
}

const compareAnswers = (event) => {
  event.preventDefault()

  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
  ]

  const hasCorrectAnswer = (userAnswer, index) => {
    const isCorrectAnswer = userAnswer === correctAnswers[index]
    if (isCorrectAnswer) {
      score += 25
    }
  }

  userAnswers.forEach(hasCorrectAnswer)
  insertAlertOfResultInDOM()
}

form.addEventListener('submit', compareAnswers)
