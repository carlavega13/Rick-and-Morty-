import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { addFavorite, deleteFavorite } from "../../redux/actions"



const Favorites=()=>{
    const [isFav,setIsFav]=useState(true)
    const myFavorites= useSelector((state)=>state.myFavorites)
    const dispatch=useDispatch()


    //?   Handle Favorite
    const handleFavorite=(id)=>{
      
        if(isFav){
        setIsFav(false)
        dispatch(deleteFavorite(id))
     
        }
     }

     //?    USE EFFECT
     useEffect(()=>{
if(!isFav){
    setIsFav(true)
}
     },[isFav])




     
    return(
        <div>
          {
            myFavorites.map((character)=>{
                return(
                    <div key={character.id}>
                       {
   isFav ? (
      <button onClick={()=>handleFavorite(character.id)}>❤️</button>
   ) : (
      <button onClick={()=>handleFavorite(character.id)}>🤍</button>
   )
 }
                    <Link to={`/detail/${character.id}`}>
                    <h1>{character.name}</h1>
                    </Link>
                    <h2>{character.species}</h2>
                    <h2>{character.gender}</h2>
                    <img  src={character.image} alt="" /> 
                    </div>
                )
            })
          }
        </div>
    )
}

export default Favorites
{/* */}