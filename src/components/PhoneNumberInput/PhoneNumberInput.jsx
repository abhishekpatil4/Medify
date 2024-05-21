import React from 'react'
import { MuiTelInput } from 'mui-tel-input'
import { Box } from '@mui/material'

const PhoneNumberInput = ({minWidth='25rem'}) => {
    const [phone, setPhone] = React.useState('+91')

    const handleChange = (newPhone) => {
        setPhone(newPhone)
    }

    return (
        <MuiTelInput value={phone} onChange={handleChange} sx={{ backgroundColor: 'white', minWidth: minWidth, border: '1px solid #F0F0F0' }} />
    )
}

export default PhoneNumberInput;