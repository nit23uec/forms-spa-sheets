import { useState } from "react";
import Captcha from "./Captcha";
import Sign from "./Sign";

function Integrations(props) {
    const [htab, setHtab] = useState(1);
    return (
        <div className="tab">
                <button className={`tablinks ${htab == 1 ? 'active' : ''}`} onClick={() => setHtab(1)}>Captcha</button>
                <button className={`tablinks ${htab == 2 ? 'active' : ''}`} onClick={() => setHtab(2)}>Sign</button>
                <button className={`tablinks ${htab == 3 ? 'active' : ''}`} onClick={() => setHtab(3)}>Document of Record</button>
            {htab == 1 ? (
                <Captcha></Captcha>
            ) : (htab == 2 ? 
                <Sign></Sign>
             : (htab === 3) ? 
                <input type="text" className="tabcontent" placeholder="Document of Record"></input>
             : '')}
        </div>
   );
}

export default Integrations;