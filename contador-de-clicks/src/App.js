import "./App.css";
import Boton from "./componentes/Boton";
import Contador from "./componentes/Contador";
import logo from "./img/logo.png";
import { useState } from "react";

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={logo}
          alt="Logo de freeCodeCamp"
        />
      </div>
      <div className="contenedor-principal">
        <Contador numClicks={numClicks} />
        <Boton texto="Click" esBotonClick={true} manejarClick={manejarClick} />
        <Boton
          texto="Reiniciar"
          esBotonClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
