import React from "react";

const InputArea = (props) => {
  return (
    <div className="form">
      <input onChange={props.changeInput} type="text" value={props.inputText} />
      <button onClick={props.addItem}>
        <span>Add</span>
      </button>
    </div>
  );
};

export default InputArea;
