import s from "./SideBar.module.css"
import fuckyou1 from "./fuckyou1.png"
import{ Link , useLocation}from "react-router-dom"
import { useEffect, useState } from "react"
import{useSelector} from "react-redux"
export default function SideBar(){
  const [imgShown,setImgShown]=useState(false)
  let location = useLocation();
  let {sideBar}= useSelector((state)=>state)

if(location.pathname!== "/"&&sideBar){
  return(
      <div   className={s.sideBar}>
  <ul className={s.sideUl}>
    <li className={s.sideLi}>
      <Link to="/home">
       <a className={s.sideA}>Home</a>
      </Link>
    </li>
    <li className={s.sideLi}>
    <Link to="/favorites">
  <a className={s.sideA}>Favorites</a>
  </Link>
    </li>
    <li className={s.sideLi}>
    <Link to="/about">
  <a className={s.sideA}>About us</a>
  </Link>
    </li>
    <li className={s.sideLi}>
    <button className={s.logOut} onMouseEnter={()=>setImgShown(true)} onMouseLeave={()=>setImgShown(false)} >Log out</button>
  
    </li >
{imgShown&&<img className={s.logOutimg }src={fuckyou1} alt="" />}
  
    
  
    
  </ul>
            </div>
  )



}

}
