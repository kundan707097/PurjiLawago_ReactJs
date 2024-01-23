import React from 'react'
import { Phone } from '@carbon/icons-react';
import Fab from '@mui/material/Fab';

const Call = () => {
    return (
        <>
            <a href="tel:+6205316232">

                <Fab color="primary" aria-label="add" sx={{ position: "fixed", bottom: "20px", right: "20px", backgroundColor: "#42A5F5" }}>

                    <Phone />
                </Fab>
            </a>
        </>
    )
}

export default Call