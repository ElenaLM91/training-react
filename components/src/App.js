import "./App.css";
import Welcome from "./components/Welcome";


function App() {
  let today = new Date(Date.now()).toLocaleDateString();

  const veryWelcome = (today) => {
    console.log(today);
    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    h1.innerHTML = `hoy es ${today}`;
    div.appendChild(h1);
    let prap = {
      userName: "John",
      todayDate: today
    }
  };

  return (
    <div className="main">
      <Welcome userName="Laura" today={today}></Welcome>
      <Welcome userName="Jane" today={today}></Welcome>
      <Welcome userName="Work" today={today}></Welcome>
    </div>
  );
}

export default App;