import React, { useState } from "react";
import "./home.css";
import { useNavigate, Link } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [team, setTeam] = useState({
    email_address: "",
    password: "",
  });
  const login = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/user/login", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(team),
    });
    if (response.status === 200) {
      setTeam({
        email_address: "",
        password: "",
      });
      navigate("/game");
    }
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setTeam({ ...team, [name]: value });
  };
  return (
    <div className="view bg_img">
      <div
        style={{ minHeight: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <form
          onSubmit={login}
          className="container-fluid border border-dark w-50 p-3 login rounded"
        >
          <img className="security py-2" src="images/login.png" alt="" />
          <div className="d-flex flex-column justify-content-center align-items-center my-4">
            <label className="py-2 text-white">TEAM MAIL</label>
            <input
              className="team-name w-50 p-2"
              placeholder="ENTER YOUR TEAM EMAIL"
              type="text"
              name="email_address"
              onChange={onChange}
              maxLength="30"
              value={team.email_address}
            />
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center my-4">
            <label className="py-2 text-white">PASSWORD</label>
            <input
              className=" w-50 p-2"
              placeholder="ENTER YOUR PASSWORD"
              type="password"
              name="password"
              onChange={onChange}
              maxLength="10"
              value={team.password}
            />
          </div>
          <button className="startBtn px-4 py-2" type="submit">
            LOGIN
          </button>
          <p className="text-light mt-3">
            If you are new here,&nbsp;
            <Link to="/register" className="text-light">
              Register Here!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
