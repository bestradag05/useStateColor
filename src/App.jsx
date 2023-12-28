import { useState } from "react";

function App() {

   const [color, setColor] = useState('#3498db');

   const changeColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    // #1a3e5f
    setColor(randomColor);
  }

  return (
    <div className="contenedorColor">
      <h1>UseState en React</h1>

      <div className="cajaColor" style={{background: color}}></div>

      <button onClick={() => changeColor()} className="botonColor">
        Cambiar color
      </button>
    </div>
  );
}

export default App;
