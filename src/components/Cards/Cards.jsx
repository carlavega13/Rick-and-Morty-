import Card from '../Card/Card.jsx';
import s from "./Cards.module.css"

export default function Cards(props) {
   
  const {characters}=props


  return <div className={s.Cards}>
{
 characters.map((character)=>{
   return  <Card key={character.id}  onClose={props.onClose} id={character.id} name={character.name} species={character.species} gender={character.gender} image={character.image}/>
   })
 }
    </div>;
 }


