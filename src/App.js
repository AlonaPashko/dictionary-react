import './App.css';
import Dictionary from './Dictionary.js';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">Dictionary
     </header>
     <main>
      <Dictionary defaultKeyword="sunrise"/>
     </main>
     <footer className="App-footer">
      Coded by Alona Pashko <a href="https://github.com/AlonaPashko/dictionary-react" target="_blank" rel="noreferrer">(open-sourced)</a>
     </footer>
      </div>
    </div>
  );
}

