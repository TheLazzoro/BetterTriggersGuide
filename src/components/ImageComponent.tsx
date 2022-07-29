import React, { FC, useState } from "react";

export const ImageComponent: FC<{img: string}> = ({ img }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleShowDialog = () => {
        setIsOpen(!isOpen);
        console.log("cliked");
    };

    return (
        <div>
            <img
                className="column-image"
                src={img}
                onClick={handleShowDialog}
                alt="no image"
            />
            {isOpen && (
                <dialog
                    className="dialog"
                    style={{ position: "absolute" }}
                    open
                    onClick={handleShowDialog}
                >
                    <img
                        className="image"
                        src={img}
                        onClick={handleShowDialog}
                        alt="no image"
                    />
                </dialog>
            )}
        </div>
    )
}