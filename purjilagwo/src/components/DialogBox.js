import React, { useEffect, useState } from 'react'

import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, Box, Avatar, Button } from '@mui/material';
import { Close, InformationFilled, } from '@carbon/icons-react';
import OtpBox from './OtpBox';
import { CustomizedButton } from './Button';

export const OtpVerificationDialogBox = ({ openDialog, closeDialog, variant, handleSubmitOtp, setOtpMain, title, content }) => {
    const [otp, setOtp] = useState("");

    useEffect(() => {
        if (otp.trim().length === 6) {
            setOtpMain(otp)
        }
    }, [otp, setOtpMain])


    return (
        <>
            <Dialog open={openDialog} maxWidth="xs" fullWidth >
                <DialogTitle sx={{  position: "relative" }}>
                    <Typography sx={{textAlign: "center", fontWeight: 600, fontSize:"24px"}}>{title}</Typography>
                    <Button sx={{position: "absolute", right: 0, top:0}} onClick={closeDialog}><Close style={{width: 30, height: 30, color: "black"}} /></Button>
                </DialogTitle>
                <DialogContent sx={{ px: 4, mx: 2, borderRadius: "12px", py: 0 }} >
                    <Box sx={{ display: "flex", width: "100%", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>

                        <Avatar sx={{ bgcolor: "white", width: 60, height: 60, }}>
                            <InformationFilled size={"100%"} color={"#42A5F5"} />
                        </Avatar>
                        <Typography sx={{ py: 1, fontSize: "18px", color: "#42A5F5", textAlign: "center", fontWeight: 600 }}>{content}</Typography>

                        <Box>
                            <OtpBox setOtp={setOtp} />
                        </Box>

                    </Box>

                </DialogContent>
                <DialogActions>
                    <Box sx={{ width: "40%", mx: "auto" }}>
                        <CustomizedButton title={"Verify Otp"} onClick={() => handleSubmitOtp()} disabled={otp.trim().length < 6 ? true : false} />

                    </Box>


                </DialogActions>
            </Dialog>


        </>
    )
}

export const CancelDialogBox = ({opendialog, closeDialog, handleCancel}) => {
    return(
        <>
        <Dialog open={opendialog} maxWidth="xs" fullWidth>
            <DialogTitle>Booking Cancellation</DialogTitle>
            <DialogContent>
                <Typography>Are you sure you want to cancel the booking?</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeDialog}>No</Button>
                <Button onClick={handleCancel}>Confirm</Button>
            </DialogActions>

        </Dialog>
        </>
    )
}

