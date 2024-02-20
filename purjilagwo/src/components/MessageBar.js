import React, { useEffect, useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, Box, Avatar, Button } from '@mui/material';
import { CheckmarkFilled, InformationFilled, Misuse } from '@carbon/icons-react';

const MessageBar = ({ title, content, closeDialog, openDialog, variant }) => {

    const [bgColor, setBgColor] = useState("#42A5F5")

    useEffect(() => {
        if (variant === "success") {
            setBgColor("#4CAF50")
        } else if (variant === "error") {
            setBgColor("#F44336")
        } else {
            setBgColor("#42A5F5")
        }
    }, [variant])    

    return (
        <>
            <Dialog onClose={closeDialog} open={openDialog} maxWidth="xs" fullWidth >
                <DialogTitle sx={{ textAlign: "center", fontWeight: 600 }}>{title}</DialogTitle>
                <DialogContent sx={{ px: 4, mx: 2, borderRadius: "12px", py:0 }} >
                    <Box sx={{ display: "flex", width: "100%", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                        {variant === "success" && (
                            <Avatar sx={{ bgcolor: "white", width: 60, height: 60 }}>
                                <CheckmarkFilled size={"100%"} color={bgColor} />
                            </Avatar>
                        )}
                        {variant === "error" && (
                            <Avatar sx={{ bgcolor: "white", width: 60, height: 60, }}>
                                <Misuse size={50} color={bgColor} />
                            </Avatar>)}
                        {variant === "info" && (
                            <Avatar sx={{ bgcolor: "white", width: 60, height: 60, }}>
                                <InformationFilled size={"100%"} color={bgColor} />
                            </Avatar>)}
                        <Typography sx={{ py: 1, fontSize: "18px", color: bgColor, textAlign: "center", fontWeight:600 }}>{content}</Typography>

                    </Box>

                </DialogContent>
                <DialogActions>

                    <Button
                        variant="contained"
                        style={{ backgroundColor: "grey" }}
                        sx={{
                            textTransform: "none",
                            borderRadius: "10px",
                            width: "8rem",
                            mx: "auto"
                        }}
                        onClick={closeDialog}
                    >
                        Close
                    </Button>

                </DialogActions>
            </Dialog>
        </>
    )
}

export default MessageBar