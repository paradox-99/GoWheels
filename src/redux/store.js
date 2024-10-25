import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../redux/userDataSlice'
import agencyReducer from '../redux/agencyDataSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        agency: agencyReducer
    }
})

export default store;