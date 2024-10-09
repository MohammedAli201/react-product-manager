import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFirstName } from '../Redux/reducer/User';

const HomePage = () => {
    const user = useSelector((state) => state.User);
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState(user.firstName);

    useEffect(() => {
        // Sync local state with Redux state whenever the user in the Redux store changes
        setFirstName(user.firstName);
    }, [user.firstName]);

    const handleUpdateFirstName = () => {
        dispatch(updateFirstName({ firstName: "Abdullahi" }));
    };

    return (
        <div>
            <h1>{firstName}</h1>
            <button onClick={handleUpdateFirstName}>
                Update First Name
            </button>
        </div>
    );
};

export default HomePage;
