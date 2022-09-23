import { useState } from 'react';
import './App.css';
import Allgun from './components/Allgun/Allgun';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0)
  const countIncrease = () => {
    setCount(count + 1)
  }
  return (
    <div className="App bg-slate-50">
      <Navbar count={count}></Navbar>
      <  Allgun increase={countIncrease}></Allgun>
    </div>
  );
}

export default App;
