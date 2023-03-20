import { useState } from "react";
import s from "./SearchBar.module.css"

export default function SearchBar(props) {
   const [character, setCharacter] = useState("")
   
   // ?         FUNCION QUE ME DEJA BUSCAR CUANDO APRIETO ENTER
   const enter=(event)=>{
      if(event.keyCode===13){
    props.onSearch(character)
    event.target.value=""
}
   }



   return (
      <div className={s.principalBox}>
      <div className={s.buscadorCaja}>
         <input id="inputS" className={s.inputSearch} type='text' onKeyUp ={enter}  onChange={(event)=>{
            setCharacter(event.target.value)
         }}/>
      <button className={s.butonSearch} onClick={()=>props.onSearch(character)}>Add</button>
      </div>
          
        <div className={s.boxSecundaryButtons}>  
      <button className={s.addRandom}>Add Random</button>
      <button className={s.closeAll}>Close All</button>
      </div>  
      </div>
   );
}

