import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const Input = ({ messages, setMessages }) => {
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (input !== "") {
      setMessages([...messages, { input, id: uuidv4() }]);
    } else {
      alert("What's your plan today?");
    }
    setInput("");
  };
  return (
    <Wrapper>
      <div className="input-section">
        <input
          type="text"
          className="input"
          placeholder="Enter your task"
          onChange={inputHandler}
          value={input}
          required
        />
        <button type="submit" className="input-btn" onClick={submitHandler}>
          OK
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    text-align: center;
  }
`;

export default Input;
