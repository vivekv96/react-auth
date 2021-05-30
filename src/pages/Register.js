import React, { SyntheticEvent, useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const sumbit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await axios.post('http://localhost:8000/api/register', {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        })

        console.log(response);
    }

    return (
        <form className="form-signin" onSubmit={sumbit}>
            <h1 className="h3 mb-3 font-weight-normal">Please register</h1>

            <input className="form-control" placeholder="First Name" required
                onChange={e => setFirstName(e.target.value)} />

            <input className="form-control" placeholder="Last Name" required
                onChange={e => setLastName(e.target.value)} />

            <input type="email" className="form-control" placeholder="Email" required
                onChange={e => setEmail(e.target.value)} />

            <input type="password" className="form-control" placeholder="Password" required
                onChange={e => setPassword(e.target.value)} />

            <input type="password" className="form-control" placeholder="Confirm Password" required
                onChange={e => setConfirmPassword(e.target.value)} />

            <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
        </form>
    );
};

export default Register;