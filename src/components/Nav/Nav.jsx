import s from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar.jsx"
import { Link, useLocation } from "react-router-dom"


export default function Nav(props){
  let location = useLocation();
if(location.pathname!== "/"){
   return (
 
        <div className={s.divNavBar}>
            {/* ACA IMAGENNN!!!!!!!!!!!! */}
        <Link to="/home">
          <img className={s.foto} src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png" alt="Not Found" />
          </Link>
          <Link to="/favorites">
          <button>Favorites</button>
          </Link>
          <SearchBar onSearch={props.onSearch}/>  
          <button onClick={props.logout}>Log out</button>
        </div>
    )
}
     

}
        
        
