// Code Keypad Component Here
import React from "react";

function Keypad() {

  function passwordEnter(){
    return console.log("Entering password...")
  }

  return (
    <input type="password" onChange={passwordEnter}></input>
  );
}

export default Keypad;