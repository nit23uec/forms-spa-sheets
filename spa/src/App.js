import './App.css';
import Form from './components/Form';

function App() {
  const itemID = "urn:fnkconnection:/afb.json:default";
  return (
    <div className="App">
       <Form itemID={itemID}></Form>
    </div>
  );
}

export default App;
