import s from "./App.module.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

function App() {
  //?   ESTADO LOCAL
  const [characters, setCharacters] = useState([]);

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

    characters.forEach((character) => {
      if (character.id.toString() === id) {
        flag = true;
      }
    });

    if (!flag) {
      //!                                      https://rickandmortyapi.com/api/character/${id}
      console.log(id);
      fetch(`http://localhost:3001/rickandmorty/characters/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        });
    }
    input.value = "";
  };

  //?  FUNCION ONCLOSE
  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  return (
    <>
      <Nav logout={logout} onSearch={onSearch} />

      <Routes>
        <Route path="/" element={<Form login={login} />} />

        <Route
          path="/home"
          element={<Cards onClose={onClose} characters={characters} />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/detail/:id" element={<Detail />} />

        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
