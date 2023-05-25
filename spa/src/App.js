import './App.css';
import Wizard from './components/Wizard';
import Integrations from "./components/Integrations";
import Submit from "./components/Submit";
import { SpreadsheetContext } from './components/SpreadsheetContext';
import config from './config.json'

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const formUrl = urlParams.get('formUrl');
  const folder = urlParams.get('folder');
  const config = {
    formUrl,
    folder,
    appURL
  }
  return (
    <div className="App">
      <SpreadsheetContext.Provider value={config}>
        <Wizard >
            <UE>

            <Integrations title="Integrations" folder={folder}/>
            <div title="Document of Record" ></div>
        </Wizard>
       </SpreadsheetContext.Provider>
    </div>
  );
}

export default App;
