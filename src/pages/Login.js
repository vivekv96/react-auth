import axios from 'axios';
import { React, useState, SyntheticEvent } from 'react';
import { Redirect } from 'react-router';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await axios.post("login", {
            email,
            password,
        });

        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to="/" />
    }

    return (
        <form className="form-signin" onSubmit={submit}>
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

            <input type="email" className="form-control" placeholder="Email" required
                onChange={e => setEmail(e.target.value)} />

            <input type="password" className="form-control" placeholder="Password" required
                onChange={e => setPassword(e.target.value)} />

            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
    );
};

export default Login;