import TextField from "./TextField";
import useSheets from "../api/useSheets";
function Form(props) {
    const { data, errorMessage } = useSheets(props.itemID);
    console.log('sheet data', data);
    return (
        <div itemtype="urn:fnk:type/form" itemid={props.itemID} itemscope>
            <form>
                <TextField data={data[0]}></TextField>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default Form;