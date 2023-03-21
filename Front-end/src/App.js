import s from "./App.module.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import SideBar from "./components/SideBar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { addCharacter } from "./redux/actions";

function App() {
  //?  ESTADO GLOBAL
  const charactersGlobal = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  //? CONSTANTES DE LOGIN
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const username = "cvega@gmail.com";
  const password = "cacas13";

  //?  PA VACIAR INPUTS
  const input = document.getElementById("inputS");

  //?   USE EFFECT
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  //?    FUNCION LOGIN
  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    }
  };

  //?   FUNCION LOG OUT
  const logout = () => {
    setAccess(false);
  };

  //?    FUNCION ONSEARCH
  const onSearch = function (id) {
    let flag = false;

    charactersGlobal.forEach((character) => {
      if (character.id.toString() === id) {
        flag = true;
      }
    });

    if (!flag) {
      fetch(`http://localhost:3001/rickandmorty/onsearch/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            dispatch(addCharacter(data));
          } else {
            window.alert("No hay personajes con ese ID");
          }
        });
    }
    input.value = "";
  };

  return (
    <div className={s.app}>
      <Nav logout={logout} onSearch={onSearch} />
      <SideBar className={s.sideBar} />
      <Routes>
        <Route path="/" element={<Form login={login} />} />

        <Route path="/home" element={<Cards />} />

        <Route path="/about" element={<About />} />

        <Route path="/detail/:id" element={<Detail />} />

        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
