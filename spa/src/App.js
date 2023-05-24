import './App.css';
import Wizard from './components/Wizard';
function App() {
  const itemID = "urn:fnkconnection:/afb.json:default";
  return (
    <div className="App">
       <Wizard itemID={itemID}></Wizard>
    </div>
  );
}

export default App;
