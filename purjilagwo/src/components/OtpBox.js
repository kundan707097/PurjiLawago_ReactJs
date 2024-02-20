import React, { useEffect, useState } from 'react'
import { Box, Container, Typography } from '@mui/material';
import "./style/InputBox.css"

const OtpBox = (props) => {

    const [otp, setOtp] = useState(new Array(6).fill(""));

    const handleChangeOtp = (element, index) => {
        if (isNaN(element.value)) return false;
    
        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    
        //Focus next input
        if (element.nextSibling) {
          element.nextSibling.focus();
        }
      };

    useEffect(() => {
        props.setOtp(otp.join(""));
    }, [otp])
    

    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "center", transitionDuration: "100ms" }}>

                {otp.map((data, index) => {
                    return (
                        <input
                            className="otp-field"
                            type="text"
                            name="otp"
                            maxLength="1"
                            key={index}
                            value={data}
                            onChange={e => handleChangeOtp(e.target, index)}
                            onFocus={e => e.target.select()}
                        />
                    );
                })}

            </Box>

        </>
    )
}

export default OtpBox