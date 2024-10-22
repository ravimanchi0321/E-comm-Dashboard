import React from "react";

const Kumar = () => {
  const updateDemoText = () => {
    document.getElementById("demo").innerText = "ravi";
  };

  const updateDemo1Text = () => {
    const demo1Element = document.getElementById("demo1");
    if (demo1Element.innerText === "Ravi Kumar Manchi") {
      demo1Element.innerText = "DevOps";
    } else {
      demo1Element.innerText = "Ravi Kumar Manchi";
    }
  };

  return (
    <div>
      <p id="demo">This is the 2nd Task page for Ravi Kumar Manchi</p>
      <button type="button" onClick={updateDemoText}>Click</button>
      
      <h3 id="demo1">DevOps</h3>
      
      <button type="button" onClick={updateDemo1Text}>Check</button>
    </div>
  );
};

export default Kumar;