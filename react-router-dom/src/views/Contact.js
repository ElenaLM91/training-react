// import './Contact.css';
import { Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Contact() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      // setLoggedIn(true);
      navigate("/")
    }, 3000);
  }, []);

  return (
    <>
      {loggedIn && <Navigate to="/" />}
      <h2>Contact</h2>
      <p>
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y
        archivos de texto. Lorem Ipsum ha
      </p>
    </>
  );
}

export default Contact;
