import React, { useState } from 'react';

const Admin = () => {
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password === "admin") {
            setIsAuthenticated(true);
            setErrorMessage("");
        } else {
            setErrorMessage("Incorrect password, please try again");
        }
    };

    const updateGame = (event) => {

    }

    const deleteGame = (event) => {

    }

    const updateCourt = (event) => {

    }

    const deleteCourt = (event) => {

    }


    return (
        <div>
            {!isAuthenticated ? (
                <>
                    <h1> Enter Password </h1>
                    <form onSubmit={handleSubmit}>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button type="submit">Submit</button>
                        {errorMessage !== "" && <p style={{ color: "red" }}>{errorMessage}</p>}
                    </form>
                </>
            ) : (
                <div>
                    <h1>With great admin power comes great admin responsibility</h1>
                    <button onClick={updateGame}>Update Game</button>
                    <button onClick={deleteGame}>Delete Game</button>
                    <button onClick={updateCourt}>Update Court</button>
                    <button onClick={deleteCourt}>Delete Court</button>
                </div>
            )}
        </div>
    );
};

export default Admin
