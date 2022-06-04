// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
  
  function gettingFocus(){
    return console.log("Good!")
  }

  function gettingBlurry(){
    return console.log("Hey! Eyes on me!")
  }

  return (
    <button onFocus={gettingFocus} onBlur={gettingBlurry}>Eyes on me</button>
  );
}

export default EyesOnMe;