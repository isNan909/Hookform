import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';

export const Basicvalidation = () => {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit= () => {
        console.log('loading ...')
        setTimeout(function () { console.clear(); }, 1500);
    }
    const timeLag = ms => new Promise(resolve => setTimeout(resolve, ms));
    const  selectedDesignation= async (value) => {
            await timeLag(2000);
            if(value > 5){
                return true;
            }
            else{
                return false;
            }
    };
    return (
        <Fragment>
            <div className="basicValidation">
                <h4 className="font-weight-normal">Custom Validation</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">First Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" name="firstname" ref={register({ required: true, maxLength: 6 })} placeholder="Your first name" />
                        {errors.firstname && <span className="error">This field is required with six max</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Age</label>
                        <input type="number" className="form-control" id="exampleInputEmail1" name="age" ref={register({ required: true, min: 18, max: 99 })} placeholder="Last score" />
                        {errors.age && <span className="error">This field must be less than 99 and not less than 18</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input className="form-control" id="exampleInputEmail1" name="email"
                            ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })} placeholder="Your email" />
                        {errors.email && <span className="error">This field must filled with email address</span>}
                    </div>
                    <div>
                        <label htmlFor="validationTooltip04">Years of Experience</label>
                        <select className="Title custom-select" name="experience" ref={register({ required: true, validate: selectedDesignation })}>
                            <option value="">Choose years</option>
                            <option value="2">2</option>
                            <option value="4">4</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>
                        {errors.experience && <span className="error">This experience is not enough</span>}
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