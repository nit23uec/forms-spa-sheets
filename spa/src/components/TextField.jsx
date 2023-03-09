function TextField() {
    return (
        <div>
            <label htmlFor="name">Name (4 to 8 characters):</label>
            <input type="text" id="name" name="name" required minLength="4" maxLength="8" size="10"></input>
        </div>
    );
}

export default TextField;