import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from './../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home';
    const history = useHistory();
    const manageRedirect = () => {
        signInUsingGoogle()
            .then(() => {
                history.push(redirect_url);
            })
    }
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={manageRedirect} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;