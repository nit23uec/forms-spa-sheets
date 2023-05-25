import { useState, React } from "react";
import Integrations from "./Integrations";
import Submit from "./Submit";

function Wizard(props) {
    const [tab, setTab] = useState(1);
    const urlParams = new URLSearchParams(window.location.search);
    const formUrl = urlParams.get('formUrl');
    const folder = urlParams.get('folder');
    return (
        <div>
            <div>
                <button onClick={() => setTab(1)}>Editor</button>
                <button onClick={() => setTab(2)}>Integrations</button>
                <button onClick={() => setTab(3)}>Submit</button>
            </div>
            {tab == 1 ? (
            <div class="tab">
                <iframe src={`https://localhost.corp.adobe.com:12400/canvas/${formUrl}?folder=${folder}`} width="2000" height="1000"></iframe>
            </div>) : (tab == 2 ? 
            <div>
               <Integrations></Integrations>
            </div> : (tab === 3) ? <div>
                <Submit></Submit>
            </div> : '')}
        </div>
   );
}

export default Wizard;