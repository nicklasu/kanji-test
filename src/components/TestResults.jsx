import React from 'react';

const TestResults = ({ kanjiArray }) => {
  const totalKanji = kanjiArray.length;
  const correctAnswers = kanjiArray.filter(item => item.correct === true).length;
  const percentageCorrect = totalKanji > 0 ? (correctAnswers / totalKanji) * 100 : 0;

  return (
    <div>
      <h1>Test Ended</h1>
      <p>Correct Answers: {correctAnswers} / {totalKanji}</p>
      <p>Percentage Correct: {percentageCorrect.toFixed(2)}%</p>
    </div>
  );
};

export default TestResults;
