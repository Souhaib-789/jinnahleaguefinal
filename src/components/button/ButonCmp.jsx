import React from 'react'
// import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const ButonCmp = ({ text, onClick, className }) => {
    return (
        <>
            {/* STACK BY DEFAULT DISPLAY (FLEX) LATA HA  */}

            <Stack spacing={2} justifyContent="center" direction="row">
                {/* <Button variant="text">Text</Button> */}
                <Button variant="contained" color="grey" size="small" onClick={onClick} sx={{ border: 1 }} className={className}>{text}</Button>
                {/* <Button variant="outlined">Outlined</Button> */}
            </Stack>
        </>
    )
}

export default ButonCmp