import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {addFavorite,deleteFavorite}from "../../redux/actions.js"

export default function Card(props) {
//?       DISPATCH
const dispatch =useDispatch()


//?    ESTADOS LOCAL
const [isFav,setIsFav]=useState(false)

//?       ESTADO GLOBAL
const myFavorites=useSelector((state)=>state.myFavorites)


//?     USE EFFECT
useEffect(() => {
for (let i = 0; i < myFavorites.length; i++) {
if(myFavorites[i].id === props.id){
   setIsFav(true)
}
   
}

}, [myFavorites]);


 

//?       HANLDE FAVORITE
const handleFavorite=()=>{
   if(isFav){
      setIsFav(false)
      dispatch(deleteFavorite(props.id))

   }else{
      setIsFav(true)
      dispatch(addFavorite(props))
   }
}

   return (
      <div>
         {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
 }
         <button onClick={()=>props.onClose(props.id)} >X</button>
          <Link to={`/detail/${props.id}`}>
         <h1>{props.name}</h1>
         </Link>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img  src={props.image} alt="" />
      </div>
   );
}
