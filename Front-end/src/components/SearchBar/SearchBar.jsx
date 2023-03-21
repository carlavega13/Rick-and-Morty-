import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCharacter, delelteAll } from "../../redux/actions";
import s from "./SearchBar.module.css"

export default function SearchBar(props) {
   const [character, setCharacter] = useState("")
   const {characters}=useSelector(state=>state)

   // !         FUNCION QUE ME DEJA BUSCAR CUANDO APRIETO ENTER
   const enter=(event)=>{
      if(event.keyCode===13){
    props.onSearch(character)
    event.target.value=""
}
   }

   //! BOTON CLOSE ALL
const dispatch=useDispatch()
   const handlerCloseAll=()=>{
      dispatch(delelteAll())
         }
     //! BOTON RANDOM
  const handlerRandom=()=>{
   let random= Math.floor(Math.random() * (826 - 1 + 1) + 1)
   const found=characters.find(char=>char.id===random)
if(found){
  return handlerRandom()
}else{
 props.onSearch(random)
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
      <button onClick={handlerRandom} className={s.addRandom}>Add Random</button>
      <button onClick={handlerCloseAll} className={s.closeAll}>Close All</button>
      </div>  
      </div>
   );
}

