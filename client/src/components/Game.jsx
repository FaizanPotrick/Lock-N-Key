import React, { useEffect } from "react";
import "./game.css";
import { Link, useNavigate } from "react-router-dom";
import Question from "./Questions";
import Cookies from "js-cookie";
const Game = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (Cookies.get("user_id") === undefined || Cookies.get("user_id") === "") {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div className="bg_img">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="border border-dark p-5 game_bg rounded">
          <div className="d-flex justify-content-center fs-1 p-2">
            <div className="square square-md bg-white rounded mx-2 px-3">
              <small>F</small>
              <p className="m-0 p-0 index">1</p>
            </div>
            <div className="square square-md bg-white rounded mx-2 px-3">
              <small>F</small>
              <p className="m-0 p-0 index">2</p>
            </div>
            <div className="square square-md bg-white rounded mx-2 px-3">
              <small>0</small>
              <p className="m-0 p-0 index">3</p>
            </div>
            <div className="square square-md bg-white rounded mx-2 px-3">
              <small>0</small>
              <p className="m-0 p-0 index">4</p>
            </div>
            <div className="square square-md bg-white rounded mx-2 px-3">
              <small>8</small>
              <p className="m-0 p-0 index">5</p>
            </div>
            <div className="square square-md bg-white rounded mx-2 px-3">
              <small>0</small>
              <p className="m-0 p-0 index">6</p>
            </div>
            <div className="square square-md bg-white rounded mx-2 px-3">
              <small>A</small>
              <p className="m-0 p-0 index">7</p>
            </div>
            <div className="square square-md bg-white rounded mx-2 px-3">
              <small>5</small>
              <p className="m-0 p-0 index">8</p>
            </div>
            <div className="square square-md bg-white rounded mx-2 px-3">
              <small>2</small>
              <p className="m-0 p-0 index">9</p>
            </div>
            <div className="square square-md bg-white rounded mx-2 px-3">
              <small>7</small>
              <p className="m-0 p-0 index">10</p>
            </div>
            <div className="square square-md bg-white rounded mx-2 px-3">
              <small>0</small>
              <p className="m-0 p-0 index">11</p>
            </div>
            <div className="square square-md bg-white rounded mx-2 px-3">
              <small>3</small>
              <p className="m-0 p-0 index">12</p>
            </div>
            <div className="square square-md bg-white rounded mx-2 px-3">
              <small>6</small>
              <p className="m-0 p-0 index">13</p>
            </div>
            <div className="square square-md bg-white rounded mx-2 px-3">
              <small>9</small>
              <p className="m-0 p-0 index">14</p>
            </div>
            <div className="square square-md bg-white rounded mx-2 px-3">
              <small>8</small>
              <p className="m-0 p-0 index">15</p>
            </div>
            <div className="square square-md bg-white rounded mx-2 px-3">
              <small>B</small>
              <p className="m-0 p-0 index">16</p>
            </div>
          </div>
          {/* one row */}
          <div className="d-flex justify-content-center fs-1 p-2">
            <div className="square square-md bg-white rounded mx-2 px-3">
              <small>C</small>
              <p className="m-0 p-0 index">17</p>
            </div>
            <div className="square square-md bg-white rounded mx-2 px-3">
              <small>E</small>
              <p className="m-0 p-0 index">18</p>
            </div>
            <div className="square square-md bg-white rounded mx-2 px-3">
              <small>1</small>
              <p className="m-0 p-0 index">19</p>
            </div>
            <div className="square square-md bg-white rounded mx-2 px-3">
              <small>2</small>
              <p className="m-0 p-0 index">20</p>
            </div>
            <div className="square square-md bg-white rounded mx-2 px-3">
              <small>F</small>
              <p className="m-0 p-0 index">21</p>
            </div>
            <div className="square square-md bg-white rounded mx-2 px-3">
              <small>F</small>
              <p className="m-0 p-0 index">22</p>
            </div>
            <div className="square square-md bg-white rounded mx-2 px-3">
              <small>C</small>
              <p className="m-0 p-0 index">23</p>
            </div>
            <div className="square square-md bg-white rounded mx-2 px-3">
              <small>D</small>
              <p className="m-0 p-0 index">24</p>
            </div>
            <div className="square square-md bg-white rounded mx-2 px-3">
              <small>B</small>
              <p className="m-0 p-0 index">25</p>
            </div>
            <div className="square square-md bg-white rounded mx-2 px-3">
              <small>6</small>
              <p className="m-0 p-0 index">26</p>
            </div>
            <div className="square square-md bg-white rounded mx-2 px-3">
              <small>4</small>
              <p className="m-0 p-0 index">27</p>
            </div>
            <div className="square square-md bg-white rounded mx-2 px-3">
              <small>5</small>
              <p className="m-0 p-0 index">28</p>
            </div>
            <div className="square square-md bg-white rounded mx-2 px-3">
              <small>2</small>
              <p className="m-0 p-0 index">29</p>
            </div>
            <div className="square square-md bg-white rounded mx-2 px-3">
              <small>A</small>
              <p className="m-0 p-0 index">30</p>
            </div>
          </div>
          {/* second row  */}

          {/* second row completed */}
          <Question />
          <div className="mt-5">
            <Link to="/final" className="startBtn px-4 py-2">
              FINAL
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
