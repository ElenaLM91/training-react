import "./App.css";
import CardWrapper from "./components/CardWrapper";
import CardImg from "./components/CardImg";
import CardInfo from "./components/CardInfo";
import {freelances} from "./db/frelancers";

function App() {
  const freelance = [
    {
      id: 0,
      title: "MR",
      lastName: "ROBERT",
      role: "UI/UX Designer",
      fee: 85,
      reviws: 105,
    },
  ];
  return (
    <div className="card-container">
      <CardWrapper>
        <CardImg></CardImg>
        <CardInfo></CardInfo>
      </CardWrapper>
    </div>
  );
}

export default App;