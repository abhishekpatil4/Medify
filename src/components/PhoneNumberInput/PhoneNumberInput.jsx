import React from 'react'
import { MuiTelInput } from 'mui-tel-input'
import { Box } from '@mui/material'

const PhoneNumberInput = () => {
    const [phone, setPhone] = React.useState('+91')

    const handleChange = (newPhone) => {
        setPhone(newPhone)
    }

    return (
        <MuiTelInput value={phone} onChange={handleChange} sx={{ backgroundColor: 'white', minWidth: '25rem', border: '1px solid #F0F0F0' }} />
    )
}

export default PhoneNumberInput;