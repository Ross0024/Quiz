const form = document.querySelector('form');
const submitBtn = document.querySelector('.submit-btn');

form.addEventListener('submit', (event) => {
  event.preventDefault();
});

submitBtn.addEventListener('click', () => {
  let score = 0;
  const answers = ['a', 'd'];
  const userAnswers = [
    document.querySelector('input[name="question1"]:checked').value,
    document.querySelector('input[name="question2"]:checked').value
  ];

  userAnswers.forEach((answer, index) => {
    if (answer === answers[index]) {
      score++;
    }
  });

  alert(`You scored ${score} out of ${answers.length}`);
});
