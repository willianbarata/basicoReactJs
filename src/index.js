import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const element = 'Willian';
const element2 = <h1>Olá Brasil</h1>

function App2() {
  return (
    <div>
      {element}
      {element2}
    </div>
  );
}

const rootElement = document.getElementById('root');

ReactDOM.render(<App2 />, rootElement);



reportWebVitals();
