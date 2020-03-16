import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';

export const Basicvalidation = () => {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
        console.log('loading ...')
        setTimeout(function () { console.clear(); }, 1500);
    }
    return (
        <Fragment>
            <div className="basicValidation">
                <h4 className="font-weight-normal">Basic Validation</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">First Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" name="firstname" ref={register({ required: true, maxLength: 6 })} placeholder="Your first name" />
                        {errors.firstname && <span className="error">This field is required with six max</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Last Score</label>
                        <input type="number" className="form-control" id="exampleInputEmail1" name="age" ref={register({ min: 18, max: 99 })} placeholder="Last score" />
                        {errors.age && <span className="error">This field must be minimum of 5 characters and</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" name="email"
                            ref={register({ required: true })} placeholder="Your email" />
                        {errors.email && <span className="error">This field is required</span>}
                    </div>
                    <div>
                        <label htmlFor="validationTooltip04">Designation</label>
                        <select className="Title custom-select" name="designation" ref={register({ required: true })}>
                            <option value="">Choose one</option>
                            <option value="Mr">Designer</option>
                            <option value="Mrs">Frontend Developer</option>
                            <option value="Miss">Backend Developer</option>
                            <option value="Dr">Full Stack</option>
                        </select>
                        {errors.designation && <span className="error">This field is required</span>}
                    </div>
                    <br />
                    <div><b>Is Active</b></div>
                    <div>
                        <div className="custom-control flex custom-radio">
                            <input ref={register({ required: true })} type="radio" id="customRadio1" name="active" className="custom-control-input" />
                            <div className="flex error">{errors.active && <span>This field is required</span>}</div>
                            <label className="custom-control-label" htmlFor="customRadio1">Yes</label>
                        </div>
                        <div className="custom-control flex custom-radio">
                            <input ref={register({ required: true })} type="radio" id="customRadio2" name="active" className="custom-control-input" />
                            <div className="flex error">{errors.active && <span>This field is required</span>}</div>
                            <label className="custom-control-label" htmlFor="customRadio2">No</label>
                        </div>
                    </div>
                    <button className="btn btn-primary btn-lg btn-block">Submit</button>
                </form>
            </div>
        </Fragment>
    )
}