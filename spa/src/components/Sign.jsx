import { useState } from "react";
function Sign(props) {


    const [name, setName] = useState("");
    const [clientId, setClientId] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [oauthUrl, setOauthUrl] = useState("");


    const setValue = function (e) {
        const name = e.target.name;
        const value = e.target.value;
        if (name === 'name') {
            setName(value)
        } else if (name === 'clientId') {
            setClientId(value)
        } else if (name === 'clientSecret') {
            setClientSecret(value);
        } else if (name === 'oauthUrl') {
            setOauthUrl(value);
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
                    <input type="text" name="clientId" value={clientId} onChange={setValue} ></input>
                </div>
                <div className="field">
                    <label>Secret Key</label>
                    <input type="password" name="clientSecret" value={clientSecret} onChange={setValue}></input>
                </div>
                <div className="field">
                    <label>OAuth Url</label>
                    <input type="text" name="oauthUrl" value={oauthUrl} onChange={setValue}></input>
                </div>
                <div className="field">
                    <button type="submit"> Submit </button>
                </div>
            </form>
    );
}

export default Sign;