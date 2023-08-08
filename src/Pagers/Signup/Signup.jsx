
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const { createUser } = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result=>{
                const loggedUser=result.user;
                console.log(loggedUser);
            })
    }

    console.log(watch("example"));

    return (
        <>
            <Helmet>
                <title>Bistro | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi..</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className='text-red-500'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                {errors.name && <span className='text-red-500'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password",
                                    {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600" role="alert">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600" role="alert">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600" role="alert">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600" role="alert">Password must have one upper case,one lower case,one number and one special character</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                            <p className=' ms-5 mb-3'>Have An Account? <Link className='text-yellow-500' to='/login'>Login Here </Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;