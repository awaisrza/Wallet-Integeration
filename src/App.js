import './App.css';
import TestingCon from './wallet';
import Mint from './Mint';
import Balances from './balance_erc20';

function App() {
  return (
    <div className="App">
      
        <TestingCon/>
        <Balances/>
        <Mint/>
        
      
    </div>
  );
}

export default App;
