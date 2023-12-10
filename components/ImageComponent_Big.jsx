import { Box, Button, Modal, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import styles from './counters.module.css'

export const ImageComponent_Big = ({ img }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleShowDialog = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <Modal sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                open={isOpen}
                onClose={handleShowDialog}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ outlineWidth: "0px" }}>
                    <img
                        className={styles.expandedImage}
                        src={img.src}
                        onClick={handleShowDialog}
                        alt="no image"

                        style={{ display: "flex" }}
                    />
                </Box>
            </Modal>


            <img
                className={styles.notYetExpandedImage}
                src={img.src}
                onClick={handleShowDialog}
                alt="no image"
            />
        </div>
    )
}