import { useState } from "react";
export default function Ex3(){
    const [text,setText]=useState("");
    const [strings, setStrings]=useState([]);
    const addString=()=>{
        setStrings((old) => [...old,text]);
        setText("");
    };
    const keyDown = (e) => {
        if (e.key == "Enter") addString();
       };
    return(
       <div>
            <><input
               value={text}
               onChange={(e) => setText(e.target.value)}
               onKeyDown={keyDown} /><button onClick={addString}>Add</button><hr /></>
       {strings.map((val,i)=>(
        <p key={i}>{val}</p>
       ))}
        </div>
    );
}