import React, { useContext, useReducer } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({Message}) => {

  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)

  console.log(Message)
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src= {Message.senderId === currentUser.uid ? currentUser.photoURL : useReducer.photoURL}
          alt=""
          className=""
        />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img
          src="https://images.pexels.com/photos/13936081/pexels-photo-13936081.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          className=""
        />
      </div>
    </div>
  );
};

export default Message;
