import React, { useState } from "react";
import "./faq-question.scss";

const FAQQuestion = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className="faq-questions-answer-wrapper">
      <div
        className="d-flex justify-content-between align-items-center mb-3 faq-question-wrapper"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <h2 className="faq-question">{question}</h2>
        {showAnswer ? (
          <p className="faq-toggle-button">-</p>
        ) : (
          <p className="faq-toggle-button">+</p>
        )}
      </div>
      {showAnswer && <p className="faq-answer">{answer}</p>}
    </div>
  );
};

export default FAQQuestion;
