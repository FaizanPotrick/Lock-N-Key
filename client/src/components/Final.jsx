import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./final.css";

const Final = () => {
  const navigate = useNavigate();
  const [colorCode, setColorcode] = useState("");

  const final = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/user/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ answer: colorCode }),
    });
    if (response.status === 200) {
      setColorcode("");
      navigate("/");
    }
  };

  return (
    <div className="bg_img">
      <div
        className="container-fluid d-flex p-5 text-light"
        style={{ minHeight: "100vh" }}
      >
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <form
            onSubmit={final}
            className="d-flex flex-column border border-light justify-content-center align-items-center answer-div p-3"
          >
            <p className="fs-1 context">
              You have only one chance! be careful...
            </p>
            <input
              className="form-control w-50 p-3 mx-3 text-center"
              type="text"
              placeholder="Enter the code"
              name="colorCode"
              onChange={(e) => setColorcode(e.target.value)}
              value={colorCode}
              required
            />
            <button className="startBtn px-4 py-1 my-3" type="submit">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Final;
