import { useContext, useState } from "react";
import { SpreadsheetContext } from "../SpreadsheetContext";

const configurations = {
    captcha : {
        keys : ['secretKey'],
        fields : [ 
            {title : 'Site Key', name : 'siteKey'},
            {title : 'Secret Key', name : 'secretKey'}
        ]
    },
    blob : {
        keys : ['accountKey'],
        fields : [ 
            {title : 'Account Name', name : 'accountName'},
            {title : 'Account Key', name : 'accountKey'}
        ]
    },
    sign : {
        keys : ['clientSecret'],
        fields : [ 
            {title : 'Client Id', name : 'clientId'},
            {title : 'Client Secret', name : 'clientSecret'},
            {title : 'Auth Url', name : 'url'}
        ]
    },
}

function Configuration(props) {
    const {type} = props || {type: 'sign'};
    const {context, setContext} = useContext(SpreadsheetContext)
    const [config, saveConfig] = useState({});
    const setValue = function (e) {
        const name = e.target.name;
        const value = e.target.value;
        config[name] = value;
        saveConfig(config);
    }

    const saveConfiguration = async() => {
        console.log("Config", config);
        config.env = 'both';

        await fetch(`http://localhost:8787/vault`,
         {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({data: config, type: type, keys: configurations[type].keys})
        }) 

        props.onClose();
        context.reloadConfig = !context.reloadConfig;
        setContext(context);
    }

    return ( (<div className="form">
                <div className="field">
                    <input type="checkbox"></input>
                    Use Same for Stage & Live
                </div>
                <br></br>
                <div className="field">
                    <label>Title</label>
                    <input type="text" name="title" onChange={setValue} />
                </div>
                {configurations?.[type]?.fields?.map((field) => 
                    <div className="field">
                        <label>{field.title}</label>
                        <input type="text" name={field.name} onChange={setValue} ></input>
                    </div>
                )}
                <div className="field">
                    <button type="button" onClick={() => saveConfiguration()}> Create Configuration </button>
                </div>
            </div>));
}


export default Configuration;