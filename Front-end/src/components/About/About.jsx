// import { Link } from "react-router-dom"
import s from "./About.module.css"
const About = ()=>{
return (
    <div>
   <div>
    <a className={s.aLogo} href="https://github.com/carlavega13"> <ion-icon size="large" name="logo-github"></ion-icon></a>
  <a className={s.aLogo} href="https://www.linkedin.com/in/carla-vega-441b91249/"><ion-icon size="large" name="logo-linkedin"></ion-icon></a>
   <a className={s.aLogo} href="https://wa.me/541136403564"> <ion-icon size="large" name="logo-whatsapp"></ion-icon>  </a>

   

   </div>
   
    </div>
)
}


export default About