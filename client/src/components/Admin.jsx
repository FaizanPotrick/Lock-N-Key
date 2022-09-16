import React, { useState, useEffect } from "react";
import moment from "moment";

function Admin() {
  const [user, setUser] = useState([]);

  const getWinners = async () => {
    const response = await fetch("/api/admin/winners");
    const data = await response.json();
    data.map((e) => {
      const timeCreated = moment(`${e.createdAt}`).format("h:mm:ss");
      const timeUpdated = moment(`${e.updatedAt}`).format("h:mm:ss");
      const arr1 = timeCreated.split(":");
      const timeTaken1 = arr1[0] * 3600 + arr1[1] * 60 + arr1[2] * 1;
      const arr2 = timeUpdated.split(":");
      const timeTaken2 = arr2[0] * 3600 + arr2[1] * 60 + arr2[2] * 1;
      const timeTaken = Math.abs(parseInt((timeTaken2 - timeTaken1) / 60));
      return (e.timeTaken = timeTaken);
    });

    const sortedResult = data.sort((a, b) => {
      return a.timeTaken - b.timeTaken;
    });
    setUser(sortedResult);
  };
  useEffect(() => {
    getWinners();
  }, []);
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#212529",
      }}
    >
      <table className="table text-light">
        <thead className="text-success">
          <tr>
            <th scope="col"> # </th>
            <th scope="col"> Team Name </th>
            <th scope="col"> Login </th>
            <th scope="col"> Logout </th>
            <th scope="col"> Time Taken </th>
          </tr>
        </thead>
        <tbody>
          {user.map((e, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{e.team_name}</td>
                <td>{moment(`${e.createdAt}`).format("LTS")}</td>
                <td>{moment(`${e.updatedAt}`).format("LTS")}</td>
                <td>{e.timeTaken}mins</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
