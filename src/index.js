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

const buttonA = <button>Histórico</button>
const buttonB = <button>Saldo</button>
const exibe = false;

const ListClientes = [
  {
    id: 1,
    nome: 'Willian'
  },
  {
    id: 2,
    nome: 'Pedro'
  },
  {
    id: 3,
    nome: 'Maria'
  },
  {
    id: 4,
   nome: 'Julia'
  }
  ];

  const showEvent = (e) => {
    console.log('evento clicado');
    console.log(e);
  }

  const Button4 = <button onClick={showEvent}> Mostrar evento</button>

const App2 = () => {

  const handleChange = (e) => {
    const { value } = e.target;
    console.log(value);
  }
   return(
    <div>
      <input onChange={handleChange}/>
      {Button4}

    </div>
   );
}

 /* 
  const App2 = () => {

    const renderCustomers = (customer, index) => {
      return (
          <li key={index}> {customer.nome}</li>
      )
    }

    return(
       <div>
          <ul>
             {ListClientes.map(renderCustomers)}  
          </ul>
        
      </div>
    );
  };

*/
//condição If com ternário ? :
/* const App2 = () => {
  return(
    <div>
      {exibe ? (
        
        <div>{buttonA}</div>

      ) : (
        <div>{buttonB}</div>
      )} 
    </div>
  );
};

*/
//condição &&
/*
const App2 = () => {
  return(
    <div>
      {exibe && (
        
        <div>{buttonA}</div>

      )} 
    </div>
  );
};
*/
/*
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
    },)
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
*/
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
