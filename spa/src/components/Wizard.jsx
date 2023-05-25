import { useState, React } from "react";
import Integrations from "./Integrations";
import Submit from "./Submit";

function Wizard(props) {
    const [tab, setTab] = useState(1);

    return (
        <div>
            <div>
                <button onClick={() => setTab(1)}>Editor</button>
                <button onClick={() => setTab(2)}>Integrations</button>
                <button onClick={() => setTab(3)}>Submit</button>
            </div>
            {tab == 1 ? (
            <div class="tab">
                <iframe src="http://localhost:4502" width="800" height="1000"></iframe>
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