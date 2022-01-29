import React, { useState } from "react";
import styled from "styled-components";
import {
  AiOutlineCheckCircle,
  AiOutlineEdit,
  AiOutlineDelete,
} from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
const Message = ({ msg, messages, setMessages }) => {
  const [edit, setEdit] = useState(false);

  const [newTodo, setnewTodo] = useState("");
  //delete message
  const deleteHandler = () => {
    setMessages(messages.filter((m) => m.id !== msg.id));
  };

  //edit task
  const editHandler = () => {
    setEdit(true);
  };
  const editChange = (e) => {
    setnewTodo(e.target.value);
  };

  //update task
  const updateHandler = (e) => {
    e.preventDefault();
    if (newTodo !== "") {
      setMessages([...messages, { input: newTodo, id: uuidv4() }]);
      setEdit(false);
      setTimeout(() => {
        deleteHandler(msg);
      }, 3000);
    } else {
      alert("What do you want to update?");
    }
  };
  return (
    <Wrapper>
      <div className="message-section">
        <ul>
          {edit ? (
            <div className="edit-section">
              <input
                type="text"
                value={newTodo}
                onChange={editChange}
                className="edit-input"
                placeholder={msg.input}
              />
              <button
                type="submit"
                className="edit-btn"
                onClick={updateHandler}
              >
                Update
              </button>
            </div>
          ) : (
            <li className="list">
              <AiOutlineCheckCircle
                className=" check-btn btn"
                onClick={() => deleteHandler(msg)}
              />
              <p>{msg.input || msg.newTodo}</p>
              <div className="msg-btn">
                <AiOutlineEdit className="btn" onClick={editHandler} />
                <AiOutlineDelete
                  className="btn"
                  onClick={() => deleteHandler(msg)}
                />
              </div>
            </li>
          )}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .message-section {
    border: 1px solid #000;
    width: 40rem;
    height: 5rem;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    position: relative;
    border-radius: 20px;
  }
  .msg-btn {
    display: flex;
    gap: 0.5rem;
    position: absolute;
    right: 1%;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .list {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .btn {
    font-size: 2.5rem;
    cursor: pointer;
  }
  .btn:hover {
    color: #555;
    transition: all linear 0.3s;
  }
  .check-btn {
    position: absolute;
    left: 1%;
  }
  .check-btn:hover {
    color: #254117;
  }
  p {
    font-size: 2rem;
    margin-left: 1rem;
  }
  .edit-btn {
    position: absolute;
    right: 10%;
  }

  @media only screen and (max-width: 768px) {
    width: 30%;
    .message-section {
      width: 28rem;
    }
    .btn {
      font-size: 2rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
  @media only screen and (max-width: 600px) {
    .message-section {
      width: 19rem;
    }
    .btn {
      font-size: 1.5rem;
    }
    .edit-btn {
      right: 7%;
      top: 14%;
    }
  }
`;
export default Message;
