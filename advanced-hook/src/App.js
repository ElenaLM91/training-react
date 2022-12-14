import "./App.css";
import ReactDOM from "react-dom";
import TextInputWithFocusButton from "./components/TextInputWithFocusButton";

function App() {
  return (
    <>
      {/* {ReactDOM.createPortal(
        <h1>Hello World!</h1>,
        document.querySelector("#hello")
      )}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        cumque odio quod natus ipsa temporibus esse eaque deserunt maiores non,
        doloremque sunt id, itaque dolore laudantium delectus a est ducimus!
      </p> */}
      <TextInputWithFocusButton/>
    </>
  );
}

export default App;
