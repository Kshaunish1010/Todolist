import React, { useState } from "react";

function ToDoItem(props) {
  const [isValid, setValid] = useState(false);
  return (
    <div
      onClick={() => {
        setValid((preValue) => {
          return !preValue;
        });
        props.onChecked(props.id);
      }}
    >
      <li style={{ textDecoration: isValid ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
