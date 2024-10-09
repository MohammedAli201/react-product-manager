import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    firstName: 'Mohammad',
    lastName: '',
    email: '',
    password: '',
    isLogin: false,
};

const User = createSlice({
    name: 'User',
    initialState,
    reducers: {
        updateFirstName: (state, action) => {
            state.firstName = action.payload.firstName;
        },
        updateUserState: (state, action) => {
            return {...state, ...action.payload};

        }



    }

});

export const {updateFirstName} = User.actions;
export const {updateUserState} = User.actions;
export default User.reducer;
