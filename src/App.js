import { useState } from "react";
import "./app.css";
import { Modal } from "./components/toastify";
function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [msg, setMsg] = useState("");

  const CalcularImc = () => {
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    if (imc < 18.6) {
      setMsg("Ta magro(a) tipo seu madruga! IMC " + imc.toFixed(2));
    } else if (imc >= 18.6 && imc < 24.9) {
      setMsg("Ta bem demais. Peso ideal! IMC " + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 34.9) {
      setMsg("Ta gordin! Seu IMC foi: " + imc.toFixed(2));
    } else if (imc > 34.9) {
      setMsg("Deu ruim! Obeso(a) "+ imc.toFixed(2) );
    }
  };
 
  
   const limparDados = () => {

    return (
      setMsg(''),
      setAltura(''),
      setPeso('')
    );
  };
  

  return (
    <div className="App">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC? </span>
      <div className="area-input">
        <input
          type="text"
          placeholder="informe seu peso em (kg) exemplo 80"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="informe sua altura em cm exemplo 180"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        ></input>
        <button onClick={CalcularImc}><Modal/></button>
        <button className="limpar" onClick={limparDados}>Limpar</button>
      </div>
      <h2>{msg}</h2>
    </div>
  );
}

export default App;
