import logo from './logo.svg';
import './App.css';
import News from './component/News';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <News/>
    </div>
  );
}

export default App;
