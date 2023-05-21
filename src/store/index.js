

import { configureStore } from '@reduxjs/toolkit'
import { loginReducer, signupReducer } from './AuthSlice'



export const store = configureStore({
    reducer: {
        signupAuth: signupReducer,
        loginAuth: loginReducer
    }
})
