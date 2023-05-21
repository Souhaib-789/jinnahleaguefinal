

import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import React, { useState } from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const OutlinedTextField = ({ label, InputIcon, style, onChangeFunc }) => {
    return (
        <div>
            <FormControl sx={{ mt: 2 }} style={style}>
                <InputLabel htmlFor="outlined-adornment-amount">{label}</InputLabel>
                <OutlinedInput
                    onChange={onChangeFunc}
                    // id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start">
                        <InputIcon />
                    </InputAdornment>}
                    label={label}
                />
            </FormControl>
        </div>
    )
}




const OutlinedPasswordTextField = ({ label, InputIcon, style, onChangeFunc }) => {


    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <div>
            <FormControl sx={{ mt: 2 }} variant="outlined" style={style}>
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    startAdornment={
                        <InputAdornment position="start">
                            <InputIcon />
                        </InputAdornment>}
                    onChange={onChangeFunc}
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>
        </div>
    )
}


export { OutlinedTextField, OutlinedPasswordTextField }
