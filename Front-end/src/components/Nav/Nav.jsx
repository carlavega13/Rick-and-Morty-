import s from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar.jsx"
import { Link, useLocation } from "react-router-dom"
import {RxHamburgerMenu} from "react-icons/rx"
import { useEffect, useState, } from "react"
import { useDispatch } from 'react-redux'
import { showSideBar } from "../../redux/actions"

export default function Nav(props){ 
  //! ESTADO LOCAL PARA LA SIDE BAR
   const [toggle,setToggle]=useState(false)
   const dispatch=useDispatch()
   const handlerToggle=()=>{
    toggle?setToggle(false):setToggle(true)

   }
   useEffect(()=>{
dispatch(showSideBar(toggle))
   },[toggle])

  let location = useLocation();
if(location.pathname!== "/"){
   return (
    <div className={s.allBox}>
        <div className={s.navBar}>

        <Link to="/home">
          <img className={s.fotoHome} src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png" alt="Not Found" />
        
          </Link>

          <SearchBar onSearch={props.onSearch}/>  
          <header className={s.burgerBox}>

               <RxHamburgerMenu onClick={handlerToggle} className={s.burger}/>
          </header>
       

        </div>


        
          
 </div>
    )
}
     

}
        
