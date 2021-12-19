import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Button from './Button';

const element = 'Willian';
const element2 = <h1>Olá Brasil</h1>

function soma(a,b) {
  alert(a+b)
}

function App2() {
  return (
    <div>
      {element}
      {element2}
      <Button onClick={() => soma(20,20)} name="Willian Barata" />
    </div>
  );
}

const rootElement = document.getElementById('root');

ReactDOM.render(<App2 />, rootElement);



reportWebVitals();
