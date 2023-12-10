import React from 'react'
import pngHive from "../img/hive-logo.png"
import pngGitHub from "../img/GitHub-Emblem.png"
import { ImageLink } from '../components/ImageLink'
import styles from '../components/counters.module.css'

export const Download = () => {
    return (
        <div className="App">
            <header className="App-header App-download">
            <br/>
                You can get Better Triggers from Hive Workshop or Github.
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="row" >
                    <div className={styles.columnDownload1}>
                        <ImageLink img={pngHive.src} link={"https://www.hiveworkshop.com/threads/better-triggers.341002/"} />
                    </div>
                    <div className={styles.columnDownload2}>
                        <ImageLink img={pngGitHub.src} link={"https://github.com/TheLazzoro/BetterTriggers/releases"} />
                    </div>
                </div>
            </header>
        </div>
    )
}
