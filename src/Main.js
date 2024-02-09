import React, { useState } from "react";
import questions from "./questions";

function calculatePercentage(number, total) {
  // Check if total is not 0 to avoid division by zero
  if (total === 0) {
    throw new Error("Total cannot be zero");
  }
  // Calculate the percentage
  const percentage = ((total - number) / total) * 100;
  return percentage;
}

function Main() {
  const [checkedCount, setCheckedCount] = useState(0);

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setCheckedCount((prevCount) => prevCount + 1);
    } else {
      setCheckedCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="App border-2 border-black">
      <div className="header">
        <h2 className="subtitle">the official</h2>
        <h1 className="title">Vevo Purity Test</h1>
        <p className=" ital desc">
          The Purity Test has historically served as a segue from O-week to true
          college life at Vevo. It's a voluntary opportunity for ICCA groups to
          bond, and for students to track the maturation of their experiences
          throughout Vevo.
        </p>

        <p className=" bold desc">
          Caution: This is not a bucket list. Completion of all items on this
          test will likely result in shame.
        </p>
        <p className=" desc">
          Click on every item you have done. MPS stands for Member of the
          Preferred Sex.
        </p>
      </div>

      {questions.map((question, i) => {
        return (
          <div className=" question ">
            {i + 1}. <input type="checkbox" onChange={handleCheckboxChange} />
            <label>{question}</label>
            <br />
          </div>
        );
      })}

      <p>Checked Count: {checkedCount}</p>
      <p>List Count: {questions.length}</p>
      <p>
        Percent unchecked: {calculatePercentage(checkedCount, questions.length)}
      </p>
    </div>
  );
}

export default Main;
