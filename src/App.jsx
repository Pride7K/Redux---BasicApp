import './App.css';
import Intervalo from './Components/Intervalo/Intervalo';
import Media from "./Components/Media/Media"
import Soma from "./Components/Soma/Soma"
import Sorteio from "./Components/Sorteio/Sorteio"

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
        <Intervalo />
      </div>
      <div className="linha">
        <Media />
        <Soma />
        <Sorteio />
      </div>
    </div>
  );
}

export default App;
