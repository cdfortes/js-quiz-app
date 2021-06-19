const form = document.querySelector('.quiz-form')
const finalScoreContainer = document.querySelector('.final-score-container')

const correctAnswers = ['B', 'B', 'D', 'A']

let score = 0

const getUserAnswwers = () =>
  correctAnswers.map((_, index) => form[`inputQuestion${index + 1}`].value)

const calculateUserScore = (userAnswers) => {
  userAnswers.forEach((userAnswer, index) => {
    const isCorrectAnswer = userAnswer === correctAnswers[index]
    if (isCorrectAnswer) {
      score += 25
    }
  })
}

const showFinalScore = () => {
  scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
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

const resetScore = () => {
  score = 0
}

const handleFormSubmit = (event) => {
  event.preventDefault()

  const userAnswers = getUserAnswwers()

  resetScore()
  calculateUserScore(userAnswers)
  showFinalScore()
  animateFinalScore()
}

form.addEventListener('submit', handleFormSubmit)
