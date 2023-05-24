import { useState } from "react";

function Wizard(props) {
    const [tab, setTab] = useState(1);
    return (
        <div>
            <div>
                <button onClick={() => setTab(1)}>Tab 1</button>
                <button onClick={() => setTab(2)}>Tab 2</button>
                <button onClick={() => setTab(3)}>Tab 3</button>
            </div>
            {tab == 1 ? (
            <div class="tab">
                <iframe src="http://localhost:4502" width="800" height="1000"></iframe>
            </div>) : (tab == 2 ? 
            <div className="tab">
                <input type="text" placeholder="Input for Tab 2"></input>
            </div> : (tab === 3) ? <div className="tab">
                <input type="text" placeholder="Input for Tab 3"></input>
            </div> : '')}
        </div>
   );
}

export default Wizard;