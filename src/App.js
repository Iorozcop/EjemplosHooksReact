import React, {useState, useEffect} from "react";
import "./style.css";

export default function App() {

  const [count,setCount] = useState(0);
  const [words, setWords] = useState('');
  const [persons, setPersons] = useState('');

  const names =['Carlos','Isa','Jose'];
  const addNames = () => names.map((name,key) => name + ', ');
  
  useEffect(()=>{
    if(count>0){
      setWords('Yo aparezco solo cuando aparecen los nombres y count es >0');
    }
    console.log('yo salgo cuando aparecen los nombres y count es >0');
  },[persons]);

  useEffect(()=>{
    console.log('yo salgo solo cuando cambia el contador');
  },[count]);

  useEffect(()=>{
    setWords('yo aparezco en el primer render');  
    console.log('yo salgo en el primer render');
  },[]);

  useEffect(()=>{ 
    console.log('yo salgo siempre que se renderiza');
  });

  return (
    <>
    <div>
      <h1>Ejemplo useState</h1>
      <p>He hecho click {count} veces</p>
      <button onClick={()=>setCount(count +1)}>sumar</button>
      <button onClick={()=>setCount(count -1)}>restar</button> 
      <button onClick={()=>setPersons(addNames)}>Mostrar Nombres</button>
    </div>

    <div>
      <h1>Ejemplo useEffect</h1>
      <p>{words}</p>
      <p>{persons}</p>
    </div>
    </>
  );
}

