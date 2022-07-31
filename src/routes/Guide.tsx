import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export const Guide = () => {
    return (
        <div className="App">
            <header className="App-header App-guide">

                <h1>Guide</h1>
                <h2 className='requirements'>Requirements</h2>
                <ol>
                    <li>Windows 10 or greater</li>
                    <li><a className='default-li' href='https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-desktop-5.0.17-windows-x64-installer' target="_blank">.NET 5.0 Runtime x64</a></li>
                    <li>Warcraft III 1.32.0 or greater</li>
                </ol>
                <p></p>
                <h2>Installation</h2>
                <ol>
                    <li>Download and extract the tool anywhere in your filesystem.</li>
                    <li>Run 'Better Triggers.exe' to launch to program.</li>
                    <li>When launching for the first time it will ask you to locate your Warcraft III installation directory.  Example: 'C:\User\Program Files\Warcraft III'.</li>
                    You're now set and ready!
                </ol>
                <h2>Create a project</h2>
                Creating a project generates a folder with a project file and three subfolders:
                <p />
                <ul style={{ background: "transparent" }}>
                    <li>The project file contains essential information about your project, and is the file you should point to when opening a project.</li>
                    <li>The 'map' folder is not required, but it is the default map location when creating a new project.</li>
                    <li>The 'src' folder contains all source files i.e. triggers, variables, scripts etc.</li>
                    <li>The 'dist' folder contains the final map when you click 'Export Map'.</li>
                </ul>

                <p />
                To create a project select File -> New Project

                <h2>Port existing triggers</h2>
                <p>
                    If you instead wish to port existing triggers from a project select Tools -> Trigger Converter


                    <p/>
                    NB: If the map you're porting contains variables with upper-/lower case variations of the same name e.g. "myVar" and "MyVar"
                    the Trigger Converter will rename the latter ones. This is because by default the filesystem isn't case sensitive and conflicts would occur.
                    <p>
                        As a result, you may experience compile errors.
                    </p>
                </p>
                <h2>Remarks</h2>
                Working with an external tool like this comes with its set of drawbacks dictated by the limitations of working outside the boundaries of the World Editor:
                <ol>
                    <li>Because Better Triggers overwrites the 'war3map.j' file in your map you are required to test your map through it, and not through the World Editor.</li>
                    <li>There are no warnings when deleting anything inside the World Editor. The World Editor does not know what exists outside of it.
                        Better Triggers only scans for changes when you save your map. However, it will notify you with a list of changed triggers.</li>
                    <li>Renaming regions, cameras and sounds will reset all their references in Better Triggers.
                        They have no ID so it's only possible to track them via name.</li>
                    <li>Renaming an object editor ID will reset all its references in Better Triggers.</li>
                </ol>
            </header>
        </div>
    )
}