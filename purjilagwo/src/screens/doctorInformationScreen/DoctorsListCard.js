import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, Button, Typography } from "@mui/material";
import { CardActionArea } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { LocationFilled } from '@carbon/icons-react';

const DoctorsList = (props) => {
    return (
        <>
            <Card sx={{ width: 400, boxShadow: "0px 4px 6px rgba(0,0,0, 0.05)", border: "2px solid #E5EAF2", }}  >
                <CardActionArea sx={{ p: "20px" }}>
                    <Box sx={{ display: "flex", alignItems: "start", }}>
                        <Avatar
                            alt="Remy Sharp"
                            src="../../images/doc-1.jpg"
                            sx={{ width: 100, height: 100, border: "1px solid #42A5F5", mt: "1rem" }}
                        />
                        <CardContent sx={{height:140}}>
                            <Typography variant="h5" component="div">
                                {props.user_Name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" lineHeight={1.5}>
                                {props.speciality}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" lineHeight={1.5}>
                                {props.experience} experience
                            </Typography>
                            <Typography variant="body2" color="text.secondary" lineHeight={1.5}>
                                {props.education}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" lineHeight={1.5} fontWeight={600}>
                                Starts at ₹{props.fees}
                            </Typography>
                        </CardContent>
                    </Box>
                    <Box>
                        <Box sx={{ display: "flex", alignItems: "center", mb: "5px" }}><img src="../images/language.png" alt="" style={{ width: "2rem" }} /><Typography sx={{ ml: "10px", fontSize: "15px" }}>English, Hindi</Typography></Box>
                        <Box sx={{ display: "flex", alignItems: "center", }}><LocationFilled color='#0A6BD2' size={20} /><Typography sx={{ ml: "21px", fontSize: "15px" }}>{props.address}</Typography></Box>
                    </Box>
                    <Button
                        variant="contained"
                        sx={{ width: "100%", background: "#42A5F5", borderRadius: "12px", mt: "10px" }}
                    >
                        Consult Now
                    </Button>
                </CardActionArea>
            </Card>

        </>
    )
}

export default DoctorsList