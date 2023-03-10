import React, { useState } from 'react'

const NewGame = ({ addGame }) => {
    const [title, setTitle] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity ] = useState('')
    const [state, setState] = useState('')
    const [time, setTime] = useState('')
    const [date, setDate] = useState('')
    const [skillLevel, setSkillLevel] = useState('any')
    const [description, setDescription] = useState('')

    // New game submission function
    function submit(evt) {
        evt.preventDefault()
        console.log("Submitting form with values:", title, address, city, state, time, date, skillLevel, description)
        addGame(title, address, city, state, time, date, skillLevel, description)
        alert('Game successfully submitted!')
    }

    return (
    <div>
        <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Register a new game</button>
        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Register a new game</h5>
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <form onSubmit={submit}>
                    <label htmlFor="title" className="col-form-label-lg">Title</label>
                    <input type="text" className="form-control form-control-lg"  value={title} onChange={(evt) => setTitle(evt.target.value)}></input>
                    <br/>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter any details that may be necessary" value={description} onChange={(evt) => setDescription(evt.target.value)}></textarea>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="date">Date</label>
                            <input type="date" className="form-control" value={date} onChange={(evt) => setDate(evt.target.value)}></input>
                        </div>
                        <div className="col">
                            <label htmlFor="time">Time</label>
                            <input type="time" className="form-control" value={time} onChange={(evt) => setTime(evt.target.value)}></input>
                        </div>
                    </div>
                    <br/>
                    <label htmlFor="address">Address</label>
                    <input type="text" className="form-control" value={address} onChange={(evt) => setAddress(evt.target.value)}></input>
                    <br/>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="city">City</label>
                            <input type="text" className="form-control" value={city} onChange={(evt) => setCity(evt.target.value)}></input>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="state">State:</label>
                            <select name="state" className="form-select" value={state} onChange={(evt) => setState(evt.target.value)}>
                                <option defaultValue=""></option>
                                <option value="ACT">ACT</option>
                                <option value="NSW">NSW</option>
                                <option value="NT">NT</option>
                                <option value="QLD">QLD</option>
                                <option value="SA">SA</option>
                                <option value="TAS">TAS</option>
                                <option value="VIC">VIC</option>
                                <option value="WA">WA</option>
                            </select>
                        </div>
                    </div>
                    <br/>
                    <label htmlFor="skill">Skill Level:</label>
                    <select name="skill" className="form-select" id="floatingSelect" aria-label="Skill level" value={skillLevel} onChange={(evt) => setSkillLevel(evt.target.value)}>
                        <option value="any">Anyone's welcome</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>              
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-warning" onClick={submit} data-bs-dismiss="modal">Register game</button>
            </div>
            </div>
        </div>
        </div>
    </div>
    )
}

export default NewGame