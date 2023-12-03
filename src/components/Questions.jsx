/* eslint-disable react/prop-types */
import React from 'react';

export default function Questions({ questions }) {
  return (
    <div>
      {questions.map((question) => (
        <h3 key={question.question}>{question.question}</h3>
      ))}
    </div>
  );
}
