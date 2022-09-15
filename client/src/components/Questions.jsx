import React, { useState, useEffect } from "react";

const Question = () => {
  const [questions, setQuestions] = useState([]);
  const getQuestions = async () => {
    const response = await fetch("/api/user/questions");
    const data = await response.json();
    setQuestions(data);
  };
  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div className="mt-4">
      <img
        src={questions[0]}
        alt=""
        className="p-2"
        style={{
          width: "200px",
          height: "200px",
        }}
      />
      <div className="d-flex gap-4 justify-content-center">
        {questions &&
          questions.map((question, idx) => {
            return (
              <a
                href={question}
                key={idx}
                className="btn btn-success px-4"
                target="_blank"
                rel="noreferrer"
              >
                Question {idx + 1}
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default Question;
