import { useState } from "react";

function Captcha(props) {
    const [captcha, setCaptcha] = useState(
        {
            name: "", 
            siteKey: "",
            secretKey: ""
        }
    );
    return (
        <div className='tabcontent'>
            <label>Name</label>
            <input type="text" name="name" value={captcha.name} onChange={e => setCaptcha({name: e.target.value, siteKey: captcha.siteKey, secretKey: captcha.secretKey})}></input>
            <label>Site Key</label>
            <input type="text" name="siteKey" value={captcha.siteKey} onChange={e => setCaptcha({name: captcha.name, siteKey: e.target.value, secretKey: captcha.secretKey})} ></input>
            <label>Secret Key</label>
            <input type="password" name="secretKey" value={captcha.secretKey} onChange={e => setCaptcha({name: captcha.name, siteKey: captcha.siteKey, secretKey: e.target.value})}></input>
        </div>
    );
}


export default Captcha;