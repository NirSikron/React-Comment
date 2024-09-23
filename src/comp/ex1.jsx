import { useState } from "react";

export default function Ex1(){
   const [lastpressed, setLastPressed]=useState("");
    return(
        <div>
            <p>Last button pressed{lastpressed}</p>
            <button onClick={() => setLastPressed("A")}>A</button>
            <button onClick={() => setLastPressed("B")}>B</button>
            <button onClick={() => setLastPressed("c")}>C</button>
        </div>
    )
}