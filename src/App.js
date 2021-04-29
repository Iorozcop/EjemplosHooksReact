import React, {useState} from "react";
import "./style.css";

export default function App() {

  const [count,setCount] = useState(0);

  return (
    <div>
      <h1>Contador</h1>
      <p>He hecho click {count} veces</p>
      <button onClick={()=>setCount(count +1)}>sumar</button>
      <button onClick={()=>setCount(count -1)}>restar</button> 
    </div>
  );
}
