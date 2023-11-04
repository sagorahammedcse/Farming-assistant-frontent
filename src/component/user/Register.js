import React, { Fragment, useEffect, useRef } from 'react';
import Loader from '../Layout/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { AppRegistrationOutlined } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { clearErrors, register } from '../action/userAction';
import { toast } from 'react-toastify';

const Register = () => {
    const dispatch = useDispatch();
    const { loading, error, isAuthenticated, user } = useSelector((state) => state.user);

    const navigate = useNavigate();
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    console.log(user);

    const registerSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const myForm = new FormData();
        myForm.set("name", name);
        myForm.set("email", email);
        myForm.set("password", password);
        dispatch(register(myForm));

    }
    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }
        if (isAuthenticated === true) {
            toast.success("Register successfully");
            navigate("/profile");
        }
    }, [dispatch, isAuthenticated, error, navigate]);

    return (
        <Fragment>
            {
                loading ? (
                    <Loader />
                ) :
                    (
                        <Fragment>
                            <div className="flex justify-center items-center flex-col translate-y-1/2">
                                <div className="card w-96 bg-accent text-neutral-content shadow-2xl">
                                    <h1 className='flex justify-center items-center text-4xl text-black font-bold py-5 gap-4'> <AppRegistrationOutlined /> Register user </h1>
                                    <div>
                                        <form className='p-7 flex flex-col gap-5' onSubmit={registerSubmit}>
                                            <input
                                                ref={nameRef}
                                                type="name"
                                                placeholder="Enter your name"
                                                className="input input-bordered input-secondary w-full"
                                                style={{ outline: 'none' }}
                                            />
                                            <input
                                                ref={emailRef}
                                                type="email"
                                                placeholder="Enter your email"
                                                className="input input-bordered input-secondary w-full"
                                                style={{ outline: 'none' }}
                                            />
                                            <input
                                                ref={passwordRef}
                                                type="password"
                                                placeholder="Enter your password"
                                                className="input input-bordered input-secondary w-full"
                                                style={{ outline: 'none' }}
                                            />
                                            <input type="submit" value="Login" className="btn btn-active btn-primary" />
                                        </form>
                                        <p className='flex justify-between items-center p-8 text-primary'>  <Link> Forgot password </Link>
                                            <Link> No account? </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    )
            }
        </Fragment>
    );
};

export default Register;