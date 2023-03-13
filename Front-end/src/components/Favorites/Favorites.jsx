import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { addFavorite, deleteFavorite, orderCards,filterCards } from "../../redux/actions"



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


//?    HANDLER SELECT CHANGE
const handlerSelectChange=(event)=>{
if(event.target.name==="Order"){
    dispatch(orderCards(event.target.value))
}
if(event.target.name==="Filter"){
    dispatch(filterCards(event.target.value))
}
}

     
    return(
        <div>
            <div>
                <select onChange={handlerSelectChange} name="Order">
                <option disabled="disable" value="Order" >Order By </option>
                    <option value="Ascendente" >Ascendente </option>
                    <option value="Descendente">Descendente</option>
                </select>

                <select onChange={handlerSelectChange} name="Filter">
                <option disabled="disable" value="Filter" >Filter By</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Genderless">Genderless</option>
                    <option value="Unknown">Unknown</option>
                </select>
            </div>
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