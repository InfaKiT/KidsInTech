import React, { useState } from 'react';

const questions = [
  {
    question: "What does ETL stand for?",
    options: [
      "Eat, Talk, Learn",
      "Extract, Transform, Load",
      "Enter, Test, Leave",
      "Explore, Teach, Log"
    ],
    answer: 1,
  },
  {
    question: "Which tool uses blocks to teach programming?",
    options: ["Scratch", "Excel", "Word", "PowerPoint"],
    answer: 0,
  },
  {
    question: "What is data?",
    options: [
      "Information stored and used by computers",
      "A type of food",
      "A video game",
      "A robot"
    ],
    answer: 0,
  },
  {
    question: "Why do we clean data?",
    options: [
      "To make information accurate and useful",
      "To decorate it",
      "To delete it immediately",
      "To print it"
    ],
    answer: 0,
  },
  {
    question: "Which of these is NOT a use of data?",
    options: ["Playing video games", "Eating lunch", "Sending messages", "Watching videos online"],
    answer: 1,
  },
  {
    question: "What kind of graph shows parts of a whole?",
    options: ["Bar chart", "Line graph", "Pie chart", "Scatter plot"],
    answer: 2,
  },
  {
    question: "Which platform is great for learning coding with blocks?",
    options: ["Scratch", "Python IDLE", "Excel", "PowerPoint"],
    answer: 0,
  },
  {
    question: "In programming, we use ___ to repeat actions multiple times.",
    options: ["Loops", "Variables", "Functions", "Comments"],
    answer: 0,
  }
];

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswer = (index) => {
    if (showFeedback) return; // Prevent multiple answers

    const correct = questions[current].answer === index;
    setIsCorrect(correct);
    if (correct) setScore(score + 1);
    setShowFeedback(true);
  };

  const nextQuestion = () => {
    setShowFeedback(false);
    setIsCorrect(null);
    setCurrent(current + 1);
  };

  if (current >= questions.length) {
    return (
      <div className="quiz-container">
        <h2>Quiz Over!</h2>
        <p>Your score: {score} out of {questions.length}</p>
        <button onClick={() => {
          setCurrent(0);
          setScore(0);
        }}>Restart Quiz</button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h2>Question {current + 1} of {questions.length}</h2>
      <p className="question-text">{questions[current].question}</p>
      <div className="options">
        {!showFeedback ? (
          questions[current].options.map((option, idx) => (
            <button key={idx} className="option-btn" onClick={() => handleAnswer(idx)}>
              {option}
            </button>
          ))
        ) : (
          <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
            {isCorrect ? "Correct! 🎉" : `Oops! Incorrect. The correct answer was: "${questions[current].options[questions[current].answer]}"`}
            <button className="next-btn" onClick={nextQuestion}>Next</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
