import './App.css';
import Wizard from './components/Wizard';
import Integrations from "./components/Integrations";
import { SpreadsheetContext } from './components/SpreadsheetContext';
import FormSetting from './components/FormSetting';
import UE from './components/UE';

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const formUrl = urlParams.get('formUrl');
  const folder = urlParams.get('folder');
  const config = {
    formUrl,
    folder,
    appUrl: 'https://nitins-mbp-3.corp.adobe.com:12400',
    reloadConfig : false
  };

  const saveSettings = async (configType, data) => {
    await fetch(`https://script.google.com/macros/s/AKfycby7Qr16DFNc8yXxcA-SZfBUeiTJtUfd0OiYTeEbs9tkA381UNNqrH54AKaztAbo-XcuCQ/exec?requestType=createformconfig&folder=${folder}&configname=${configType}`,
    {
     method: 'POST',
     headers: {
         "Content-Type": "text/plain;charset=utf-8",
     },
     body: JSON.stringify(data)
     })
     alert('Setting saved')
 }

  return (
    <div className="App">
      <SpreadsheetContext.Provider value={config}>
        <Wizard >
            <div title="Style"></div>
            <UE title="Editor"></UE>
            <FormSetting title="Form Settings" saveSettings={saveSettings}></FormSetting>
            <Integrations title="Integrations" saveSettings={saveSettings} folder={folder}/>
            <div title="Document of Record" ></div>
        </Wizard>
       </SpreadsheetContext.Provider>
    </div>
  );
}

export default App;
