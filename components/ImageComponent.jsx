import { Box, Button, Modal, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import styles from './counters.module.css'

export const ImageComponent = ({ img, text }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleShowDialog = () => {
        setIsOpen(!isOpen);
    };

    const theText = {__html:text} // hack

    return (
        <div>
            <div className={styles.column1} dangerouslySetInnerHTML={theText}>
            {text.innerHTML}
            </div>
            <div className={styles.column2}>
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
                    style={{ float: "right" }}
                    src={img.src}
                    onClick={handleShowDialog}
                    alt="no image"
                />
            </div>
        </div>
    )
}