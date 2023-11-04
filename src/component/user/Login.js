import { LoginOutlined } from '@mui/icons-material';
import React, { Fragment, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { clearErrors, login } from '../action/userAction';
import { toast } from 'react-toastify';
import Loader from "../Layout/Loader";
const Login = () => {
    const dispatch = useDispatch();
    const { loading, isAuthenticated, error, user } = useSelector((state) => state.user);
    const navigate = useNavigate();
    console.log(user);
    // get value by using ref
    const emailRef = useRef();
    const passwordRef = useRef();
    // hook for get location 
    const location = useLocation();
    //    function for submit value 
    const loginSubmitHandler = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(email, password);
        dispatch(login(email, password));
    }
    const redirect = location.search ? location.search.split("=")[1] : "/profile";
    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }
        if (isAuthenticated === true) {
            toast.success("আপনি লগইন করছেন !!");
            navigate(redirect)
        }
    }, [error, dispatch, isAuthenticated, navigate,redirect])

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
                                    <h1 className='flex justify-center items-center text-2xl text-black font-bold py-5 gap-4'> <LoginOutlined /> Login </h1>
                                    <div>
                                        <form className='p-7 flex flex-col gap-5' onSubmit={loginSubmitHandler}>
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
                                            <Link to="/register"> No account? </Link>
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

export default Login;