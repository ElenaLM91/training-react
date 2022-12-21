// import './Home.css';
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {});

  return (
    <>
      <h2>Home</h2>
      <p>
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y
        archivos de texto. Lorem Ipsum ha
      </p>
      <Link to={`/?page=${page - 1}`}>Prev</Link>
      <Link to={`/?page=${page + 1}`}>Next</Link>
    </>
  );
}

export default Home;
