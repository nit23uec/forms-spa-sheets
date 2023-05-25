import { useState } from "react";
import Captcha from "./Captcha";
import Sign from "./Sign";
import Wizard from "./Wizard";

function Integrations(props) {
    const [htab, setHtab] = useState(1);
    return (<Wizard className="integrations">
        <Captcha title="Captcha" />
        <Sign title="Sign" />
        <div title="Document of Record"></div>
    </Wizard>)
}

export default Integrations;