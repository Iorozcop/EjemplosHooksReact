import React, {useState, useEffect} from "react";
import "./style.css";

export default function App() {

  const [count,setCount] = useState(0);
  const [words, setWords] = useState('');

  useEffect(()=>{
    if(count>0){
      setWords('Yo aparezco solo cuando count cambia');
    }
  },[count]);

  return (
    <>
    <div>
      <h1>Ejemplo useState</h1>
      <p>He hecho click {count} veces</p>
      <button onClick={()=>setCount(count +1)}>sumar</button>
      <button onClick={()=>setCount(count -1)}>restar</button> 
    </div>

    <div>
      <h1>Ejemplo useEffect</h1>
      <p>{words}</p>
    </div>
    </>
  );
}

