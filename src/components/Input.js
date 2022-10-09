import React from "react";
import "./Input.css";

function Input(Input) {
  return (
    <div>
      <form>
        <input
          ref={(c) => (this.title = c)}
          id="input"
          type="text"
          placeholder="Search or jump to... "
          className="input"
        />
      </form>
    </div>
  );
}

export default Input;
