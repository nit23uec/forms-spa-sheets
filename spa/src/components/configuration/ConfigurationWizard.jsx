import Wizard from "../Wizard";
import Configuration from "./Configuration";


export default function ConfigurationWizard(props) {

    return (
        <>
        {props.integrations ? 
            <Wizard>
                <Configuration title='Azure Blob' type='blob' onClose={() => props.onClose()}></Configuration>
                <Configuration title='MS Dynamics' type='sign'></Configuration>
            </Wizard>
            :
            <Wizard>
                <Configuration title='Google Captcha' type='captcha' onClose={() => props.onClose()}></Configuration>
                <Configuration title='Sign' type='sign'></Configuration>
            </Wizard>
        }</>
    )
}