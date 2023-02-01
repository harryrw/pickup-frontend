// Button trigger
const GameModal = () => {
    return (
    <div>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Register a new game</button>
        <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Register a new game</h5>
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <form>
                    <label for="title" className="col-form-label-lg">Title</label>
                    <input type="text" className="form-control form-control-lg"></input>
                    <br/>
                    <div class="form-group">
                        <label for="description">Description</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter any details that may be necessary"></textarea>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col">
                            <label for="date">Date</label>
                            <input type="date" className="form-control"></input>
                        </div>
                        <div className="col">
                            <label for="time">Time</label>
                            <input type="time" className="form-control"></input>
                        </div>
                    </div>
                    <br/>
                    <label for="address">Address</label>
                    <input type="text" className="form-control"></input>
                    <br/>
                    <div className="row">
                        <div className="col">
                            <label for="city">City</label>
                            <input type="text" className="form-control"></input>
                        </div>
                        <div className="col-md-3">
                            <label for="state">State:</label>
                            <select name="state" className="form-select">
                                <option selected></option>
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
                    <label for="skill">Skill Level:</label>
                    <select name="skill" className="form-select" id="floatingSelect" aria-label="Skill level">
                        <option value="any">Anyone's welcome</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>
                    
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                {/* add functionality to the save button */}
                <button type="button" className="btn btn-primary">Register game</button>
            </div>
            </div>
        </div>
        </div>
    </div>
    )
}

export default GameModal