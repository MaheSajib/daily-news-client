import React from 'react';
import { useForm } from "react-hook-form";

const AddAdmin = () => {
    const { register, handleSubmit } = useForm();

    return (
        <div>
            <h1>Make Admin</h1>
            <div style={{ backgroundColor: '#F5F5F5', height: '100px', borderRadius: '10px' }} className="container m-5 w-75 justify-content-center">
                <form >
                    <div className="row ">
                        <div>
                            <h5>Email</h5>
                            <div className="d-flex">
                                <input type="text" className="form-control px-5" placeholder="email@email.com" {...register("email")} />
                                <input type="submit" className="btn-success mx-2" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAdmin;