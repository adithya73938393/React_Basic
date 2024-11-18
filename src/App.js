import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('');
  const [color1, setColor1] = useState('');
  function getColor(newColor) {
    setColor(newColor);
  }
  function getColor1(newColor) {
    setColor1(newColor);
  }

  return (
    <div className="App" style={{ display: "flex", height: "100vh", width: "100vw" }}>
    <div style={{ backgroundColor: color, height: "100%", width: "50vw" }}>
      <input
        type="text"
        onChange={(e) => getColor(e.target.value)}
        placeholder="Enter a color (e.g., red, blue)"
        style={{ padding: '10px', fontSize: '16px',border:`5px solid ${color1}` }}
      />
    </div>
    <div style={{ backgroundColor: color1, height: "100%", width: "50vw" }}>
      <input
        type="text"
        onChange={(e) => getColor1(e.target.value)}
        placeholder="Enter a color (e.g., red, blue)"
        style={{ padding: '10px', fontSize: '16px' ,border:`5px solid ${color}`}}
      />
    </div>
  </div>
  );
}
export default App;