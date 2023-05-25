
export default function ChooseCloudConfig(props) {
  return (<div className="config-chooser">
    <label>Choose {props.type}</label>
    <input type="text" name="config"/>
  </div>)
}