import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Button from './Button';
import ComponenteA from './ComponenteA';
import ComponenteB from './ComponenteB';

const element = 'Willian';
const element2 = <h1>Olá Brasil</h1>

class App2 extends Component {

  constructor(props){
    super(props);

    this.state = {
      clock: 1000,
      copo: 'água'
    }
  }
  componentDidMount(){
    window.setTimeout(() =>{
      this.setState({
        copo: 'suco'
      })
    }, 3000)
  }

  alterarCopo = () => {
    this.setState({
      copo: 'refrigerante'
    });
  }

    render(){
      const { clock, copo } = this.state
      
      return(
        <div>
          <h1> {clock}</h1>
          <button onClick={() => this.alterarCopo()}>{copo}</button>
        </div>
      )
    }

}

/*
function soma(a,b) {
  alert(a+b)
}

function App2() {
  return (
    <div>
      {element}
      {element2}
      <Button onClick={() => soma(20,20)} name="Willian Barata" />
      <ComponenteA>
            <ComponenteB>
            <Button onClick={() => soma(100,100)} name="Novo Botão" />
            </ComponenteB>
        </ComponenteA>
    </div>
  );
}
*/
const rootElement = document.getElementById('root');

ReactDOM.render(<App2 />, rootElement);



reportWebVitals();
