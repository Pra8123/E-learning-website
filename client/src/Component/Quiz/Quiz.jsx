

import React, { useState } from 'react';
import './Quiz.css';

const quizzes = [
  {
    id: 'c',
    name: 'C Programming',
    description: 'Test your knowledge of C Programming',
    questions: [
      { question: 'Which symbol is used for pointers?', options: ['*', '&', '$', '#'], answer: 0 },
      { question: 'Which function is used for output?', options: ['scanf', 'printf', 'cout', 'print'], answer: 1 },
      { question: 'What is the correct file extension for C programs?', options: ['.cpp', '.c', '.cs', '.java'], answer: 1 },
      { question: 'Which keyword is used to define a constant in C?', options: ['const', 'constant', 'final', 'define'], answer: 0 },
      { question: 'Which data type is used to store a single character?', options: ['char', 'string', 'int', 'float'], answer: 0 },
      { question: 'What will be the output of printf("%d", 5/2)?', options: ['2.5', '2', '5/2', 'Error'], answer: 1 },
      { question: 'Which loop is guaranteed to execute at least once?', options: ['for', 'while', 'do-while', 'None'], answer: 2 },
      { question: 'Which operator is used for memory allocation?', options: ['new', 'malloc', 'allocate', 'mem'], answer: 1 },
      { question: 'Which header file is required for using printf()?', options: ['stdio.h', 'stdlib.h', 'conio.h', 'math.h'], answer: 0 },
      { question: 'Which function is used to read a string in C?', options: ['gets', 'scanf', 'input', 'read'], answer: 0 }
    ]
  },

  {
    id: 'html',
    name: 'HTML Basics',
    description: 'Challenge yourself with HTML concepts',
    questions: [
      { question: 'Which tag is used for links?', options: ['<div>', '<a>', '<p>', '<link>'], answer: 1 },
      { question: 'What does HTML stand for?', options: ['Hyper Text Markup Language', 'High Transfer Machine Language', 'Hyperlink and Text Markup Language', 'None'], answer: 0 },
      { question: 'Which tag is used to define an unordered list?', options: ['<ul>', '<ol>', '<li>', '<list>'], answer: 0 },
      { question: 'Which attribute specifies an image source in an <img> tag?', options: ['href', 'src', 'alt', 'link'], answer: 1 },
      { question: 'Which HTML element is used to define a table row?', options: ['<td>', '<th>', '<tr>', '<table>'], answer: 2 },
      { question: 'Which tag is used to create a dropdown list?', options: ['<select>', '<dropdown>', '<option>', '<list>'], answer: 0 },
      { question: 'Which element is used to create a line break?', options: ['<br>', '<break>', '<lb>', '<hr>'], answer: 0 },
      { question: 'Which doctype is correct for HTML5?', options: ['<!DOCTYPE HTML5>', '<!DOCTYPE html>', '<!DOCTYPE HTML PUBLIC>', '<!DOCTYPE XHTML>'], answer: 1 },
      { question: 'Which tag is used to make text bold?', options: ['<bold>', '<b>', '<strong>', '<text-bold>'], answer: 1 },
      { question: 'Which element is used to define metadata about a document?', options: ['<meta>', '<head>', '<title>', '<data>'], answer: 0 }
    ]
  }, {
    id: 'react',
    name: 'React Basics',
    description: 'Test your knowledge of React concepts',
    questions: [
      { question: 'What is React?', options: ['A library for building UI', 'A database', 'A backend framework', 'An operating system'], answer: 0 },
      { question: 'Which hook is used for state management?', options: ['useEffect', 'useState', 'useReducer', 'useRef'], answer: 1 },
      { question: 'Which function is used to create a component?', options: ['createComponent()', 'React.create()', 'Function()', 'A function returning JSX'], answer: 3 },
      { question: 'How do you pass data from parent to child in React?', options: ['Using state', 'Using props', 'Using Redux', 'Using Context'], answer: 1 },
      { question: 'What does JSX stand for?', options: ['JavaScript XML', 'Java Syntax Extension', 'JSON XML', 'JavaScript Extension'], answer: 0 },
      { question: 'Which hook is used for side effects?', options: ['useEffect', 'useState', 'useCallback', 'useMemo'], answer: 0 },
      { question: 'Which method is used to update the state?', options: ['setState', 'updateState', 'changeState', 'modifyState'], answer: 0 },
      { question: 'What is a React fragment?', options: ['A way to group elements without adding extra nodes', 'A component wrapper', 'A lifecycle method', 'A styling technique'], answer: 0 },
      { question: 'Which hook is used to access context values?', options: ['useEffect', 'useRef', 'useContext', 'useState'], answer: 2 },
      { question: 'What is the purpose of React Router?', options: ['State management', 'API handling', 'Navigation between pages', 'Component styling'], answer: 2 }
    ]
  }

];

const Quiz = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const startQuiz = (quiz) => {
    setSelectedQuiz(quiz);
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
  };

  const handleAnswer = (index) => {
    if (index === selectedQuiz.questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < selectedQuiz.questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  if (!selectedQuiz) {
    return (
      <div className='sel-quiz'>
        <img src='https://thumbs.dreamstime.com/b/megaphone-quiz-time-speech-alert-bubble-business-banner-contest-game-competition-vector-illustration-realistic-d-text-235768874.jpg' alt='main' />
        <h2>Programming Quiz Platform</h2>
        <p>Test your knowledge in different programming languages</p>
        <div className='main-quiz'>
          {quizzes.map((quiz) => (

            <div className='quiz-sel-card'>
              <h1>{quiz.name}</h1>
              <p>{quiz.description}</p>
              <button className='btn-quiz' key={quiz.id} onClick={() => startQuiz(quiz)}>Start Quiz</button>
            </div>

          ))}
        </div>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className='result-quiz'>
        <img src='https://img.freepik.com/free-vector/trophy-award-laurel-wreath-composition-with-realistic-image-golden-cup-decorated-with-garland-with-reflection_1284-32301.jpg' alt='trophy' />
        <h2>Quiz Completed!</h2>
        <p> Your Score {score} out of  {selectedQuiz.questions.length} questions</p>
        <button className='btn-result' onClick={() => setSelectedQuiz(null)}>Try Another Quiz</button>
      </div>
    );
  }

  return (
    <div className='quiz'>
      <h2>{selectedQuiz.name}</h2>
      <p>Question {currentQuestion + 1} / {selectedQuiz.questions.length}</p>
      <h3>{selectedQuiz.questions[currentQuestion].question}</h3>
      {selectedQuiz.questions[currentQuestion].options.map((option, index) => (
        <button className='quess-btn' key={index} onClick={() => handleAnswer(index)}>{option}</button>
      ))}
    </div>
  );
};

export default Quiz;
