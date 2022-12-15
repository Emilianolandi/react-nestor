// import logo from './logo.svg';
import Title from './components/Title';
import Mascotas from './components/Mascotas';
import Card from './components/Card';
import './App.css';

function App() {
  const numeros = [45, 78, 12, 767, 341];
  return (
    <div className="App">

      {numeros.map(numero => (
          <p>El numero es: {numero}</p>
      ))}
      <Title titulo = {"Hola, como va!!!!"}
        subtitulo = {"Este es el subtitulo"}
      />
      <Card/>
      <Mascotas/>
      <header className="App-header">
      <img src='img/gatitos.jpg' alt="imag" />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
