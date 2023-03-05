import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import s from "./Form.module.css"
import validation from "./validation"



export default function Form (props){
//?     ESTADOS LOCALES 
    const [userData,setUserData]=useState({
        username:"",
        password:""
    })
    const [errors,setErrors]=useState({
        username:"",
        password:""
    })

    //?   USEEFFECT
    useEffect(()=>{
validation(userData,setErrors,errors)
},[userData])

//?    HANDLE SUBMIT
const handleSubmit=(event)=>{
event.preventDefault()
props.login(userData)
}
    
//?    HANDLE INPUT CHANGE
  const handleInputChange=(event)=>{
setUserData({
    ...userData,
    [event.target.name]:event.target.value
})
}

  
return(
    <div>
        <form onSubmit={handleSubmit}>

    
            <div>
              <label htmlFor="username">Username: </label>
              <input onChange={handleInputChange} name="username" value={userData.username} type="text"/>
              <p>{errors.username?errors.username:""}</p>
            </div>
          
            <div>
              <label htmlFor="password">Password: </label>
              <input onChange={handleInputChange} value={userData.password} type="password" name="password"/>
              <p>{errors.password?errors.password:""}</p>
            </div>
    
            <button>Log in</button>
        </form>
    </div>
)
}

