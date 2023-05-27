import { useState } from "react";
import ListConfigurations from "./configuration/ListConfigurations";

export default function FormSetting(props) {

    const [captcha, setCaptcha] = useState("");

    return (
    <>
        <div className="form settings">
            <input type="button" value="Save Settings" onClick={() => props?.saveSettings('settings', { captchaId: captcha, signId: ''} )}></input>
            <ListConfigurations allowRefresh={true} allowAdd={true} title="Google Captcha Configuration" name='captcha' 
                onChange={(value) => setCaptcha(value)}>
            </ListConfigurations>

            <ListConfigurations title="Adobe Sign Configuration" name='sign'></ListConfigurations>
        </div>
    </>)
  }