import './App.css';
import TextField from './components/TextField';
import useSheets from '../api/useSheets.js';

function App() {
  const itemID = "urn:fnkconnection:afb.json:default:Description:firstName";
  const { data, errorMessage } = useSheets(itemID);
  console.log('sheet data', data);
  return (
    <div className="App">
       <TextField></TextField>
    </div>
  );
}

export default App;
