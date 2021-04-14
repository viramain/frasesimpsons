import "./App.css";
// siempre debe hacerse este import si se usa bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Se debe importar cada componente de react-bootstrap
import Button from "react-bootstrap/Button";

import Frase from "./components/Frase";
import { useEffect, useState } from "react";

function App() {
  // crear state personaje que es un objeto vacio
  const [personaje, setPersonaje] = useState({});

  useEffect(() => {
    //aqui escribo la logica. los corchetes vacios es para que se actualice solo en el montaje []
    consultarAPI();
  }, []);

  //Se consulta a la API que traera aleatoriamente un personaje con su frase e imagen al presionar boton "Obtener Frase"
  //se espera respuesta de La PROMESA de la API. Async() y await se usan siempre para esperar respuesta de la API antes de continuar
  const consultarAPI = async () => {
    // constante RESPUESTA recibe la respuesta de la API. con fetch paso la URL de la pag de
    const respuesta = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
      //extraigo resultados de formato json
      const resultado = await respuesta.json(); 
      console.log(resultado[0]);
      //guardar los datos ddel objeto de la posiciob 0 en el state, para enviar por props al componenete frase
      setPersonaje(resultado[0])
  };
  return (
    <section className="container my-5 d-flex flex-column align-items-center">
      {/* devuelve direccion del proyecto y concateno con + el archivo de la imagen*/}
      <img
        src={process.env.PUBLIC_URL + "logo.png"}
        alt="logo de los simpsons"
        className="w-75 my-4"
      />

      {/* los componente de react-bootstrap empiezan con mayuscula */}
      {/* cuando uso onclick, llamar a la funcion usando SIEMPRE funcion anonima */}
      <Button variant="warning" onClick={()=>{consultarAPI()}}>Obtener Frase</Button>

      {/* llamo al componente del personaje con su frase e imagen del personaje */}
      {/* mando por props el objeto personaje */}
      <Frase personaje={personaje}></Frase>
    </section>
  );
}

export default App;
