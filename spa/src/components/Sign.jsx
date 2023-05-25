function Sign(props) {

    return (
        <div className='tabcontent'>
            <label>Name</label>
            <input type="text" name="name"></input>
            <label>Client Id</label>
            <input type="text" name="clientId"></input>
            <label>Client Secret</label>
            <input type="password" name="clientSecret"></input>
            <label>OAuth Url</label>
            <input type="text" name="oauthUrl"></input>
        </div>
    );
}

export default Sign;