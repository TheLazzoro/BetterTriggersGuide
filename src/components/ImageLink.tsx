import React, { FC } from 'react'

export const ImageLink: FC<{img: string, link: string}> = ({ img, link }) => {
    return (
        <div>
            <a href={link} target="_blank">
                <img style={{ width: "300px", float: "right" }} alt="no image" src={img} />
            </a>
        </div>
    )
}
