import React, { useState } from 'react'

const Admin = () => {
    const [password, setPassword] = useState("")
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [updateGameValue, setUpdateGameValue] = useState("")
    const [deleteGameValue, setDeleteGameValue] = useState("")
    const [updateCourtValue, setUpdateCourtValue] = useState("")
    const [deleteCourtValue, setDeleteCourtValue] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        if (password === "admin") {
            setIsAuthenticated(true)
            setErrorMessage("")
        } else {
            setErrorMessage("Incorrect password, please try again");
        }
    }

    const updateGame = () => {
        console.log(`Update Game with value: ${updateGameValue}`)
    }

    const deleteGame = () => {
        console.log(`Delete Game with value: ${deleteGameValue}`)
    }

    const updateCourt = () => {
        console.log(`Update Court with value: ${updateCourtValue}`)
    }

    const deleteCourt = () => {
        console.log(`Delete Court with value: ${deleteCourtValue}`)
    }

    return (
        <div>
            {!isAuthenticated ? (
                <form onSubmit={handleSubmit}>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Submit</button>
                    {errorMessage !== "" && <p style={{ color: "red" }}>{errorMessage}</p>}
                </form>
            ) : (
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <h1>With great admin power comes great admin responsibility</h1>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <input type="text" value={updateGameValue} onChange={(e) => setUpdateGameValue(e.target.value)} />
                        <button onClick={updateGame}>Update Game</button>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <input type="text" value={deleteGameValue} onChange={(e) => setDeleteGameValue(e.target.value)} />
                        <button onClick={deleteGame}>Delete Game</button>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <input type="text" value={updateCourtValue} onChange={(e) => setUpdateCourtValue(e.target.value)} />
                        <button onClick={updateCourt}>Update Court</button>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <input type="text" value={deleteCourtValue} onChange={(e) => setDeleteCourtValue(e.target.value)} />
                        <button onClick={deleteCourt}>Delete Court</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Admin