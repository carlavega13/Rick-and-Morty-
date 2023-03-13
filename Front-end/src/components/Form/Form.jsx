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
<div className={s.fondo}>
    <div className={errors.password || errors.username? s.conteinerLogError:s.conteinerLog} >
        <form onSubmit={handleSubmit}>

    
            <div className={s.conteinerInputs}>
            
              <label htmlFor="username">Username </label>
            {errors.username?<ion-icon  name="mail-outline"></ion-icon>:<ion-icon  name="mail-open-outline"></ion-icon>}
        
              <input className={errors.username?s.inputError:s.inputSubmit} onChange={handleInputChange} name="username" value={userData.username} type="text"/>
            
              {errors.username&&<p className={s.pError}>{errors.username}</p>}
            </div>
          
            <div className={s.conteinerInputs}>
              <label htmlFor="password">Password </label>
                {errors.password?<ion-icon  name="lock-closed-outline"></ion-icon>:<ion-icon  name="lock-open-outline"></ion-icon>}
              <input className={errors.password?s.inputError:s.inputSubmit} onChange={handleInputChange} value={userData.password} type="password" name="password"/>
              {errors.password&&<p className={s.pError}>{errors.password}</p>}
            </div>
    
            <button className={errors.password || errors.username? s.submitError:s.submit}>Log in</button>
        </form>
    </div>
    </div>
   
)
}

