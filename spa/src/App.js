import './App.css';
import Wizard from './components/Wizard';
import Integrations from "./components/Integrations";
import Submit from "./components/Submit";

function App() {
  return (
    <div className="App">
       <Wizard >
          <iframe title="Editor" src="http://localhost:4502" width="1000" height="1000"></iframe>
          <Integrations title="Integrations" />
          <Submit title="Submit" />
       </Wizard>
    </div>
  );
}

export default App;
