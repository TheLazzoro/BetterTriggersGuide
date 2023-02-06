import React from 'react'
import pngHive from "../images/hive-logo.png"
import pngGitHub from "../images/GitHub-Emblem.png"
import { ImageLink } from '../components/ImageLink'

export const Download = () => {
    return (
        <div className="App">
            <header className="App-header App-download">
                <h1>Download</h1>
                You can get Better Triggers from Hive Workshop or Github.
                <p/>
                <p/>
                <div className="row" >
                    <div className="column">
                        <ImageLink img={pngHive} link={"https://www.hiveworkshop.com/threads/better-triggers.341002/"} />
                    </div>
                    <div className="column-image">
                        <ImageLink img={pngGitHub} link={"https://github.com/TheLazzoro/BetterTriggers/releases"} />
                    </div>
                </div>
            </header>
        </div>
    )
}
