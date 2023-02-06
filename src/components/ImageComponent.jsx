import { Box, Button, Modal, Typography } from "@mui/material";
import React, { FC, useState } from "react";

export const ImageComponent = ({ img }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleShowDialog = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <Modal sx= {{ display: "flex", justifyContent: "center", alignItems: "center" }}
                open={isOpen}
                onClose={handleShowDialog}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ outlineWidth: "0px" }}>
                    <img
                        className="image"
                        src={img}
                        onClick={handleShowDialog}
                        alt="no image"

                        style={{ display: "flex" }}
                    />
                </Box>
            </Modal>


            <img
                style={{ width: "300px", float: "right" }}
                src={img}
                onClick={handleShowDialog}
                alt="no image"
            />
        </div>
    )
}