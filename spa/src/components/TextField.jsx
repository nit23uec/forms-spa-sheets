function TextField(props) {
    return (
        <div itemtype="urn:fnk:type/component" itemid={generateItemId(props['Name'])} itemScope>
            <label itemprop="Title" itemtype="text" htmlFor="name">{props['Title']}</label>
            <input type={props['Type']} id="name" name={props['Name']} required minLength="4" maxLength="8" size="10"></input>
        </div>
    );
}

function generateItemId(name) {
    return "urn:fnkconnection:afb.json:default:Name:" + name;
}

export default TextField;