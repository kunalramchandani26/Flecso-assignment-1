import React from "react";

export default function CycleTime() {
  return (
    <div className="container d-flex inline">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">Cycle Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Live Issues</td>
            <td>
              2 Days <span style={{ color: "green" }}>(0)</span>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>PR</td>
            <td>
              1 Day <span style={{ color: "green" }}>(0)</span>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Story</td>
            <td>
              15 Days <span style={{ color: "red" }}>(-5)</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
