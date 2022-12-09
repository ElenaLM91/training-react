import "./App.css";
import Testimonio from "./components/Testimonio";

function App() {
  return (
    <div className="App">
        <div className="contenedor-principal">
      <h1>Título principal de la aplicación</h1>
      <Testimonio
      nombre="Tony Stark"
      pais="EEUU"
      imagen="Testimonio"
      cargo="Sueperheroe"
      empresa="Vengadores"
      testimonio="skjfjbñkj libsdjlwe dqwwd qwd qwwdwedew dqwwd qwd qwwd we wefas dasdqw
      dqwd qwef wef qwdd qwwfe qef qw dqw wwdw eerf ref ewr fwr fw ef qwd s
      ad d qwdqdqwdqwdq qwdqwdqw" />
       <Testimonio
      nombre="Black Widow"
      pais="EEUU"
      imagen="Testimonio1"
      cargo="Superheroina"
      empresa="Vengadores S.A"
      testimonio="skjfjbñkj libsdjlwe dqwwd qwd qwwdwedew dqwwd qwd qwwd we wefas dasdqw
      dqwd qwef wef qwdd qwwfe qef qw dqw wwdw eerf ref ewr fwr fw ef qwd s
      ad d qwdqdqwdqwdq qwdqwdqw" />
       <Testimonio
      nombre="Peter Parker"
      pais="EEUU"
      imagen="Testimonio2"
      cargo="Amigo y Vecino"
      empresa="Queens"
      testimonio="skjfjbñkj libsdjlwe dqwwd qwd qwwdwedew dqwwd qwd qwwd we wefas dasdqw
      dqwd qwef wef qwdd qwwfe qef qw dqw wwdw eerf ref ewr fwr fw ef qwd s
      ad d qwdqdqwdqwdq qwdqwdqw" />
      </div>
    </div>
  );
}

export default App;
