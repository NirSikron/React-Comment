import { useState } from "react";
export default function Ex2(){
    const [count , setCount]=useState(0);
    const change = (e)=>{
        setCount(e.target.value.split(" ").length-1);
    };
        return(
        <div>
            <p>number of words:{count} </p>
            <input onChange={change}/>
         
        </div>
    );
}
