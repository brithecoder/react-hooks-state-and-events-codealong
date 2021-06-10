import React, {useState} from "react";

function Toggle() {
  
  const [toggler,setToggler] = useState(false);
  
  function handleClick(){
   setToggler ((toggler) => !toggler);
  }
  const color = toggler? "red":"white";
  return <button onClick={handleClick} style={{background :color}}> {toggler ? "ON":"OFF"}</button>;
}

export default Toggle;
