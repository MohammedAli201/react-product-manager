import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserState } from '../Redux/reducer/User';

const Register = () => {
    const user = useSelector((state) => state.User);
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(user.password);

    const handleUpdateUserState = (e) => {
        e.preventDefault();
        dispatch(
            updateUserState({
                firstName,
                lastName,
                email,
                password,
                isLogin: true,
            })
        );
    };

    return (
        <form onSubmit={handleUpdateUserState}>
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <br />
            <label>
                First Name:
                <input
                    type="text"
                    name="firstname"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </label>
            <br />
            <label>
                Last Name:
                <input
                    type="text"
                    name="lastname"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </label>
            <br />
            <label>
                Password:
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <br />
            <button type="submit">Submit</button>
            <p>Updated User Info:</p>
            <p>First Name: {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
        </form>
    );
};

export default Register;
