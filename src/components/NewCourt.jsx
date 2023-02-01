const CourtModal = () => {
    return (
    <div>
        <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#myModal">Add a new court</button>
        <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Register a new court</h5>
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <form>
                    <label for="courtName" className="col-form-label-lg">Court Name</label>
                    <input type="text" className="form-control form-control-lg"></input>
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
                    <div className="form-group">
                        <label for="description">Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Description of the court(s) - i.e. surface quality, number of hoops, etc."></textarea>
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                {/* add functionality to the save button */}
                <button type="button" className="btn btn-primary">Register court</button>
            </div>
            </div>
        </div>
        </div>
    </div>
    )
}

export default CourtModal