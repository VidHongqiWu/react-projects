import logo from './logo.svg';
import React, {useState} from 'react';

function App() {
  const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
  const [color, setColor] = useState('#f1f5f8');

  return (
    <main>
      <div>
        <h1>Background Color: {' '}
          <span className="color" data-testid="color">
            {color}
          </span>
        </h1>
      </div>
    </main>
  );
}

export default App;
