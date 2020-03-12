import React, { Fragment } from 'react';

export const Basicvalidation = () => {
    return (
        <Fragment>
            <div className="basicValidation">
                <h4 className="font-weight-normal">Basic Validation</h4>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">First Name</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Last Name</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div>
                        <label htmlFor="validationTooltip04">Designation</label>
                        <select className="Title custom-select">
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Miss">Miss</option>
                            <option value="Dr">Dr</option>
                        </select>
                    </div>
                    <br />
                    <div><b>Is Active</b></div>
                    <div>
                        <div className="custom-control custom-radio">
                            <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="customRadio1">Yes</label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="customRadio2">No</label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg btn-block">Submit</button>
                </form>
            </div>
        </Fragment>
    )
}