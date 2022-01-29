import React from "react";
import styled from "styled-components";
import Message from "./Message";
const List = ({ messages, setMessages }) => {
  return (
    <Wrapper>
      <div className="list-section">
        {messages.map((msg) => (
          <Message
            msg={msg}
            messages={messages}
            setMessages={setMessages}
            key={msg.id}
          />
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin-top: 3rem;
  height: 80%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  .list-section {
  }
`;

export default List;
