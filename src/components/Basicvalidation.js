import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';

export const Basicvalidation = () => {
    const { handleSubmit, register, errors, getValues } = useForm();
    const onSubmit= data => {
        console.log(data)
    }
    return (
        <Fragment>
            <div className="basicValidation">
                <h4 className="font-weight-normal">Field Comparision</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Password</label>
                        <input type="password" autoComplete="password" className="form-control" id="exampleInputEmail1" name="pwd" ref={register({ required: 'Password is required' })} placeholder="Your password" />
                        {errors.pwd && <span className="error">password is required</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Retype Password</label>
                        <input type="password" autoComplete="password" name="pwdConfirmation"  placeholder="Repeat password" className="form-control" ref={register({ required: 'Confirm password!',
                        validate: {
                            matchesPreviousPassword: (val) => {
                            const { pwd } = getValues();
                            return pwd === val || 'Passwords should match!';
                            },
                        }
                        })} />
                        {errors.pwdConfirmation && <span className="error">Password must match</span>}
                    </div>
                    <button className="btn btn-primary btn-lg btn-block">Submit</button>
                </form>
            </div>
        </Fragment>
    )
}