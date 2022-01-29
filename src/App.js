import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Input from "./components/Input";
import List from "./components/List";

function App() {
  const [messages, setMessages] = useState(() => {
    const saveTodo = localStorage.getItem("tasks");
    if (saveTodo) {
      return JSON.parse(saveTodo);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(messages));
  }, [messages]);
  return (
    <Wrapper>
      <div className="to-do box">
        <h1>What's your plan?</h1>
        <Input messages={messages} setMessages={setMessages} />
        <List messages={messages} setMessages={setMessages} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  margin: 5rem auto;
  width: 50rem;
  background-color: rgba(128, 128, 128, 0.8);
  border-radius: 20px;
  h1 {
    text-align: center;
    color: #fff;
    font-size: 3rem;
  }
  @media only screen and (max-width: 768px) {
    width: 30rem;
  }
  @media only screen and (max-width: 600px) {
    width: 20rem;
    h1 {
      font-size: 1rem;
    }
  }
`;

export default App;
