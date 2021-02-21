import ReactDOM from "react-dom";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import FirstComponent from "./components/first-component";
import SecondComponent from "./components/second-component";

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <main>
      <h1>Importing Font Awesome Global Components</h1>
      <FirstComponent />
      <SecondComponent />
    </main>
  );
}

export default App;
