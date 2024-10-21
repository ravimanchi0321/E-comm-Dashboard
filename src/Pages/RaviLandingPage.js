import React from "react";

const RaviLandingPage = () => {
    function myFunction(){
        const text=document.getElementById("demo")
        text.innerText="Vmshi"
      }
      
    return (
        <div>
            <p id = "demo">Ravi Kumar DevOps</p>
            <button type = "button" onClick={myFunction}>Try it</button>
            {/* <a href="https://medium.com/@ravimanchi32/git-and-github-part-2-6c53ec889107" target="_blank"  rel="noreferrer">medium!</a> */}
        </div>
    );
};
export default RaviLandingPage; 