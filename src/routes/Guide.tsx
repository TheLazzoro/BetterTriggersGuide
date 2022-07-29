import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles.css'

export const Guide = () => {
    return (
        <div className="App">
            <header className="App-guide">
                <h1>Guide</h1>
                <h2>Requirements</h2>
                <ol>
                    <li>Windows 10 or greater</li>
                    <li><a className='default-li' href='https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-desktop-5.0.17-windows-x64-installer' target="_blank">.NET 5.0 Runtime x64</a></li>
                </ol>
                <p></p>
                <h2>Installation</h2>
            </header>
        </div>
    )
}