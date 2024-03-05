import React, { useState } from 'react'
import Cropper from 'react-easy-crop'

import { Box } from "@mui/material";

const ImageCropper = ({ image, onCrop, onCropCancel }) => {

    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);

    const [croppedArea, setCroppedArea] = useState(null);
    const [aspectRatio, setAspectRatio] = useState(1 / 1);

    const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
        setCroppedArea(croppedAreaPixels);
    }

    return (
        <div>
                <Cropper
                    image={image}
                    aspect={aspectRatio}
                    crop={crop}
                    zoom={zoom}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropComplete={onCropComplete}
                    style={{ containerStyle: { width: "60%", height: "70%", backgroundColor: "#FFF", margin: "auto" } }}
                />

                <Box sx={{bgcolor: "red"}}>
                    <Box component={"button"} onClick={onCropCancel}>Cancel</Box>
                    <Box component={"button"} onClick={() =>{
                        onCrop(croppedArea)
                    }}>Crop & Apply</Box>
                </Box>

        </div>
    )
}

export default ImageCropper