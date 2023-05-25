import { useState } from "react";

function Captcha(props) {
    const [name, setName] = useState("");
    const [siteKey, setSiteKey] = useState("");
    const [secretKey, setSecretKey] = useState("");

    const setValue = function (e) {
        const name = e.target.name;
        const value = e.target.value;
        if (name === 'name') {
            setName(value)
        } else if (name === 'siteKey') {
            setSiteKey(value)
        } else if (name === 'secretKey') {
            setSecretKey(value);
        }
    }

    return (
            <form>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" value={name} onChange={setValue} />
                </div>
                <div className="field">
                    <label>Site Key</label>
                    <input type="text" name="siteKey" value={siteKey} onChange={setValue} ></input>
                </div>
                <div className="field">
                    <label>Secret Key</label>
                    <input type="password" name="secretKey" value={secretKey} onChange={setValue}></input>
                </div>
                <div className="field">
                    <button type="submit"> Submit </button>
                </div>
            </form>
    );
}


export default Captcha;