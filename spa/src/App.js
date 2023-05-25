import './App.css';
import Wizard from './components/Wizard';
import Integrations from "./components/Integrations";
import Submit from "./components/Submit";

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const formUrl = urlParams.get('formUrl');
  const folder = urlParams.get('folder');
  return (
    <div className="App">
       <Wizard >
          <iframe title="Editor" src={`https://nitins-mbp-3.corp.adobe.com:12400/canvas/${formUrl}?folder=${folder}`} width="2000" height="1000"></iframe>
          <Integrations title="Integrations" />
          <Submit title="Submit" />
       </Wizard>
    </div>
  );
}

export default App;
