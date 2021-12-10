import './styles/App.css';
import Parent from './components/Parent';
import Clock from './components/Clock'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>How to transfer data between Child and Parent component both way</h3>
        <Clock />
        <Parent />
      </header>
    </div>
  );
}

export default App;
