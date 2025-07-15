import React, { useState } from "react";

const LiveIn = () => {
  const [value, setValue] = useState("");
  const [string, setString] = useState("");
  const [input, setInput] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="Place your Name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <h2>You typed: {value}</h2>
      <h4>character lenght: {value.length}</h4>
      <button
        onClick={() => {
          setValue("");
        }}
      >
        Reset
      </button>

      <input type="text" placeholder="Enter your name" />
      <button onClick={() => alert("Hello, Nasir!")}>submit</button>

      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setString(e.target.value)}
      />

      <h3>You typed: {string}</h3>

      {string.length > 10 && <p style={{ color: "red" }}>Too long!</p>}

      <input
        type="text"
        value={input}
        placeholder="enter your name"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (input.length === 0) {
            alert("Please enter your name");
          } else {
            alert(`Hello, ${input}!`);
          }
        }}
      >
        Submit
      </button>
    </>
  );
};

export default LiveIn;
