import React, {useState} from 'react';

function App() {
  const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
  const [color, setColor] = useState('#f1f5f8');

  const changeColor = () => {
    const randomNumber = Math.floor(Math.random() * colors.length);
    setColor(colors[randomNumber]);
  }

  const setHexColor = () => {
    const hexColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setColor(hexColor);
  }

  return (
    <main style={{ backgroundColor: color }}>
      <div className='container'>
        <h1>Background Color: {' '}
          <span className="color" data-testid="color">
            {color}
          </span>
        </h1>
        <button className="btn btn-hero" onClick={changeColor}>
          Change Color
        </button>
        <button className="btn btn-hero" onClick={setHexColor}>
          Set Hex Color
        </button>
      </div>
    </main>
  );
}

export default App;
