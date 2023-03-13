function TextField(props) {
    return (
        <div className='form-text-input' itemType="urn:fnk:type/component" itemID={generateItemId(props['Name'])} itemScope>
            <label itemProp="Title" itemType="text" htmlFor="name">{props['Title']}</label>
            <input type={props['Type']} id="name" name={props['Name']} required minLength="4" maxLength="8" size="10"></input>
        </div>
    );
}

function generateItemId(name) {
    return "urn:fnkconnection:/afb.json:default:Name:" + name;
}

export default TextField;