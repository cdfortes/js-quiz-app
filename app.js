const form = document.querySelector('.quiz-form')
const finalScoreContainer = document.querySelector('.final-score-container')

const correctAnswers = ['B', 'B', 'D', 'A']

let score = 0

const getUserAnswwers = () => {
  const userAnswers = []
  correctAnswers.forEach((_, index) => {
    const userAnsewer = form[`inputQuestion${index + 1}`].value
    userAnswers.push(userAnsewer)
  })

  return userAnswers
}

const calculateUserScore = (userAnswers) => {
  const calculateScore = (userAnswer, index) => {
    const isCorrectAnswer = userAnswer === correctAnswers[index]
    if (isCorrectAnswer) {
      score += 25
    }
  }
  userAnswers.forEach(calculateScore)
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
      score = 0
    }
    finalScoreContainer.querySelector('span').textContent = `${counter++}%`
  }, 10)
}

const handleFormSubmit = (event) => {
  event.preventDefault()

  const userAnswers = getUserAnswwers()

  calculateUserScore(userAnswers)
  showFinalScore()
  animateFinalScore()
}

form.addEventListener('submit', handleFormSubmit)
