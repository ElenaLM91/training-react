import { useOutletContext } from "react-router-dom";
// import './Survey;

function Survey() {
  const outletContext = useOutletContext();

  return (
    <>
      <h2>Survey</h2>
      <p>{outletContext}</p>
      <p>
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y
        archivos de texto. Lorem Ipsum ha
      </p>
    </>
  );
}

export default Survey;
