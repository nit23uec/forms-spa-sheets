import TextField from "./TextField";
import useSheets from "../api/useSheets";
function Form(props) {
    const { data, errorMessage } = useSheets(props.itemID);
    console.log('sheet data', data);
    if (data) {
        return (
            <div itemType="urn:fnk:type/form" itemID={props.itemID} itemScope>
                <form>
                    <TextField {...data[0]}></TextField>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        );
    }
}

export default Form;