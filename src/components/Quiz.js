import React, { useState, useEffect } from 'react';
import { Card, Button, Form, Alert } from 'react-bootstrap';

const Quiz = () => {
  const questions = [
    {
      question: 'What is Bitcoin, and how does it differ from traditional currencies?',
      options: [
        "It's a digital currency",
        "It's a commodity like gold",
        "It's a physical coin used in some countries",
        "It's a type of stock",
      ],
      answer: "It's a digital currency",
    },
    {
      question: 'What technology underlies Bitcoin and ensures its transactions?',
      options: [
        'Cloud Computing',
        'Blockchain',
        'Artificial Intelligence',
        'Quantum Computing',
      ],
      answer: 'Blockchain',
    },
    {
      question: 'Which of the following is an advantage of using Bitcoin for transactions?',
      options: [
        'High transaction fees',
        'Speedy cross-border transactions',
        'Full government control',
        'Guaranteed value stability',
      ],
      answer: 'Speedy cross-border transactions',
    },
    {
      question: 'What is Bitcoin mining?',
      options: [
        'Extracting digital coins from the internet',
        'Verifying and adding transactions to the blockchain',
        'Creating new Bitcoin by cracking complex codes',
        'Trading Bitcoin on exchanges',
      ],
      answer: 'Verifying and adding transactions to the blockchain',
    },
    {
      question: 'What is the safest method to store Bitcoin?',
      options: [
        'In a bank account',
        'On a USB drive',
        'In a digital wallet',
        'In a cloud storage service',
      ],
      answer: 'In a digital wallet',
    },
    {
      question: 'How does Bitcoin ensure the security of transactions?',
      options: [
        'Using encrypted QR codes',
        'Through a centralized ledger',
        'By requiring passwords for all transactions',
        'Using cryptographic techniques on a decentralized ledger',
      ],
      answer: 'Using cryptographic techniques on a decentralized ledger',
    },
    {
      question: 'What environmental concern is associated with Bitcoin mining?',
      options: [
        'Water pollution',
        'High energy consumption',
        'Deforestation',
        'Noise pollution',
      ],
      answer: 'High energy consumption',
    },
    {
      question: 'Why is Bitcoin known for its price volatility?',
      options: [
        'It’s influenced by government policies',
        'Limited supply and high market speculation',
        'It’s backed by gold reserves',
        'It’s a widely stable currency',
      ],
      answer: 'Limited supply and high market speculation',
    },
    {
      question: 'Which of the following best describes the legal status of Bitcoin in most countries?',
      options: [
        'It’s universally accepted as legal tender',
        'It’s banned in most countries',
        'It’s regulated differently depending on the country',
        'It’s illegal to own or trade',
      ],
      answer: 'It’s regulated differently depending on the country',
    },
    {
      question: 'What is a Bitcoin fork, such as Bitcoin Cash?',
      options: [
        'A method to split a Bitcoin into smaller parts',
        'A software update that creates a new version of Bitcoin',
        'A tool for mining Bitcoin',
        'A new currency created by duplicating the Bitcoin blockchain',
      ],
      answer: 'A new currency created by duplicating the Bitcoin blockchain',
    },
  ];

  const [quizStarted, setQuizStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [feedback, setFeedback] = useState('');

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selected === '') {
      setShowAlert(true);
      return;
    }
    setShowAlert(false);
    const correct = selected === questions[current].answer;
    setFeedback(correct ? 'Correct!' : `Incorrect! The correct answer is: ${questions[current].answer}`);
    if (correct) {
      setScore(score + 1);
    }
    setTimeout(() => {
      if (current + 1 < questions.length) {
        setSelected(''); // Reset the selected option before moving to the next question
        setFeedback('');
        setCurrent(current + 1);
      } else {
        setShowResult(true);
      }
    }, 1000); // 1-second delay before moving to the next question or showing the result
  };

  const restartQuiz = () => {
    setCurrent(0);
    setSelected('');
    setScore(0);
    setShowResult(false);
    setQuizStarted(false);
  };

  if (!quizStarted) {
    return (
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Bitcoin Quiz</Card.Title>
          <Card.Text>Test your knowledge about Bitcoin. Click the button below to start the quiz!</Card.Text>
          <Button onClick={startQuiz} variant="primary">Start Quiz</Button>
        </Card.Body>
      </Card>
    );
  }

  if (showResult) {
    return (
      <Card>
        <Card.Body>
          <Card.Title>Quiz Result</Card.Title>
          <Alert variant="info">
            You scored {score} out of {questions.length}
          </Alert>
          <Button onClick={restartQuiz} variant="primary">Restart Quiz</Button>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>Bitcoin Quiz</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>{questions[current].question}</Form.Label>
            {questions[current].options.map((option, index) => (
              <Form.Check
                type="radio"
                name="quiz"
                label={option}
                value={option}
                key={index}
                checked={selected === option} // Ensure the radio button reflects the selected value
                onChange={(e) => setSelected(e.target.value)}
              />
            ))}
          </Form.Group>
          {showAlert && <Alert variant="warning">Please select an option.</Alert>}
          {feedback && <Alert variant={feedback.includes('Correct') ? 'success' : 'danger'}>{feedback}</Alert>}
          <Button variant="primary" type="submit" className="mt-3">
            {current + 1 === questions.length ? 'Finish Quiz' : 'Next Question'}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Quiz;
