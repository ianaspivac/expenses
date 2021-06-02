import "./NewExpenseForm.scss";
import React, { useState } from "react";

function FormButton(props) {

    const formPresenceHandler=()=>{};
  return (
    <div>
        <button onClick={formPresenceHandler}>
            Add new expense
        </button>
    </div>
  );
}

export default FormButton;
