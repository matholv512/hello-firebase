import React, { useState, useEffect } from "react";
import firebase from "../db/firebase";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Ranking() {
  const [ranking, setRanking] = useState(["Loading..."]);

  useEffect(() => {
    const rankRef = firebase.database().ref("ranking");
    rankRef.on("value", (snapshot) => {
      const rank = snapshot.val();
      const rankList = [];
      for (let data in rank) {
        rankList.push({ id: data, ...rank[data] });
      }
      setRanking(rank);
    });
  }, []);

  return (
    <div className="divTable">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>User</th>
            <th id="th_Score">Score</th>
          </tr>
        </thead>
        <tbody>
          {ranking &&
            Object.keys(ranking).map((key) => {
              return (
                <tr>
                  <td>{key}</td>
                  <td>{ranking[key]}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}
