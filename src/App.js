import logo from './logo.svg';
import DocumentInput from './DocumentInput';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Dynamic CPF/CNPJ field simple implementation
        </p>
        <DocumentInput/>
      </header>
    </div>
  );
}

export default App;
