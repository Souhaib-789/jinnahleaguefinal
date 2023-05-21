

import { Button } from '@mui/material'
import React from 'react'

const AppButton = ({ text, onClickFunc, disabled, style }) => {
    return (
        <div>
            {/* <button style={style} disabled={disabled} onClick={onClickFunc} className='btn btn-primary'> {text}</button> */}
            <Button style={style} disabled={disabled} onClick={onClickFunc} variant="contained">{text}</Button>
        </div>
    )
}

export default AppButton