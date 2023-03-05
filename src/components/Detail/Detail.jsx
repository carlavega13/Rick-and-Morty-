import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"


const Detail =()=>{
    const {id} =useParams()
    const [character,setCharacter]=useState({})
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [id]);

    return(
        
        <div>
           
            <h1>Name: {character?.name}</h1>
            <h2>Status: {character?.status}</h2>
            <h2>Origin: {character?.origin?.name}</h2>
            <img src={character?.image} alt="" />
            
        </div>
        
    )
}
export default Detail