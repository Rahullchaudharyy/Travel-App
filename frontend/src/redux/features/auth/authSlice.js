import { createSlice } from "@reduxjs/toolkit";

// Initial state with userInfo and location
const initialState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
    location: localStorage.getItem('location') ? JSON.parse(localStorage.getItem('location')) : null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { userInfo, location } = action.payload;

            state.userInfo = userInfo;
            state.location = location;

            // Save userInfo and location to localStorage
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
            localStorage.setItem('location', JSON.stringify(location));

            // Set expiration time for the stored data
            const expirationTime = new Date().getTime() + 30 * 24 * 60 * 60 * 1000;
            localStorage.setItem('expirationTime', expirationTime);
        },

        logout: (state) => {
            state.userInfo = null;
            state.location = null;
            localStorage.clear();
        }
    }
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
