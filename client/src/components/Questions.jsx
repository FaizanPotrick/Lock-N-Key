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
    <div id="carouselExampleControls" className="carousel mt-4">
      <div className="carousel-inner">
        {questions &&
          questions.map((question, index) => {
            return (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <img
                  className="key img-fluid"
                  src={question}
                  alt="..."
                  style={{ height: "50%", width: "50%" }}
                />
              </div>
            );
          })}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon bg-success px-4 py-5 rounded"
          aria-hidden="true"
        />
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon bg-success px-4 py-5 rounded"
          aria-hidden="true"
        />
      </button>
    </div>
  );
};

export default Question;
