
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";


const STATUSES = {
    SUCCESS: 'success',
    LOADING: 'loading',
    FAIL: 'fail'
}

export const signupUser = createAsyncThunk('user/signup', async (user) => {
    const data = await axios.post('http://localhost:5000/api/signup', user)
        .then(res => {
            toast.success(res.data.message)
            return res.data
        })
        .catch(err => {
            toast.error(err.response.data.message)
            throw new Error(err.response.data.message)
        })
    return data
})


const signupSlice = createSlice({
    name: 'user',
    initialState: {
        signupUserdata: [],
        status: STATUSES,
    },
    extraReducers: (builder) => {
        builder.addCase(signupUser.pending, (state, action) => {
            state.status = STATUSES.LOADING
        })
        builder.addCase(signupUser.fulfilled, (state, action) => {
            state.status = STATUSES.SUCCESS
            state.signupUserdata = action.payload
        })
        builder.addCase(signupUser.rejected, (state, action) => {
            // console.log(action, state)
            state.status = STATUSES.FAIL
        })
    }
})

export const loginUser = createAsyncThunk('user/login', async (user) => {
    const data = await axios.post('http://localhost:5000/api/login', user)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            toast.success(res.data.message)
            return res.data
        })
        .catch(err => {
            toast.error(err.response.data.message)
            throw new Error(err.response.data.message)

        })
    return data
})



const loginSlice = createSlice({
    name: 'user',
    initialState: {
        loginUserdata: [],
        status: STATUSES,
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state, action) => {
            state.status = STATUSES.LOADING
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.status = STATUSES.SUCCESS
            state.loginUserdata = action.payload
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            // console.log(action, state)
            state.status = STATUSES.FAIL
        })
    }
})








// export const signupUser = createAsyncThunk('user/signup', async (user) => {
//     const productsData = await fetch('http://localhost:5000/api/signup', {
//         method: 'POST',
//         body: JSON.stringify(user),
//         headers: {
//             'Content-type': 'application/json;',
//         }
//     })
//     // console.log('productsData ==> ', productsData);
//     const data = await productsData.json()
//     console.log(data);
//     return data
// })

const { reducer: signupReducer } = signupSlice
const { reducer: loginReducer } = loginSlice
export { signupReducer, loginReducer }

