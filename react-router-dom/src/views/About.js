// import './About.css';

import { useParams } from "react-router-dom";

function About() {
  const {id} = useParams()
  console.log(id);
  return (
    <>
      <h2>About</h2>
      <p>
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y
        archivos de texto. Lorem Ipsum ha
      </p>
      {id && <p>Id: {id}</p>}
    </>
  );
}

export default About;
