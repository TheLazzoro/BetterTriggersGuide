import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import pngNewProject from "../images/NewProject.png"
import pngLocalPlayer from "../images/LocalPlayer.png"
import pngFrameEvent from "../images/FrameEvent.png"
import pngSaveAs from "../images/pngSaveAs.png"
import { TableOfContents } from '../components/tableOfContents'


export const Guide = () => {

  return (
    <div className="App">
    <TableOfContents />
    <header className="App-header App-guide">
    <div style={{ maxWidth: "900px" }}>

            <h1>Guide</h1>
            <h2 id='requirements'>Requirements</h2>
            <ol>
              <li>Windows 7 or greater</li>
              <li><a className='default-li' style={{ padding: "0px" }} href='https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-desktop-5.0.17-windows-x64-installer' target="_blank">.NET 5.0 Desktop Runtime x64</a></li>
              <li>Warcraft III 1.32.0 or greater</li>
              <li>Your map saved in folder mode</li>
            </ol>
            <p></p>
            <h2 id='installation'>Installation</h2>
            <ol>
              <li>Download and extract the tool anywhere in your filesystem.</li>
              <li>Run 'Better Triggers.exe' to launch the program.</li>
              <li>When launching for the first time it will ask you to locate your Warcraft III installation directory.  Example: 'C:\User\Program Files\Warcraft III'.</li>
              You're now ready and set!
            </ol>
            <h2 id='create-a-project'>Create a project</h2>
            To create a project select 'File -&gt; New Project' in the top menu.<br/><br/>
            When you create a new project you can choose to either create an empty project or copy all triggers from an existing map.
            Creating an empty will generate a new map in the '/map' directory, and everything else is empty.<br/> <br/>
            When creating a project with existing triggers from a map the tool will extract all folders, triggers, variables, and scripts
            into the '/src' folder in your project. Comments in the Trigger Explorer menu are ignored. <br/>
            <b>NB:</b> If the map you're copying triggers from contains variables with upper-/lower case variations of the same name
            e.g. "myVar" and "MyVar" the Trigger Converter will rename the latter ones.
            This is because by default the filesystem isn't case sensitive and conflicts would occur. <br/>
            As a result, you may experience compile errors after porting.
            <p>
            <img
            className="image"
            src={pngNewProject}
            alt="no image"
            />
            </p>
            
            Creating a new project generates a folder with a project file and three subfolders:
            <p />
            <ul style={{ background: "transparent" }}>
              <li>The project file contains essential information about your project, and is the file you should point to when opening a project.</li>
              <li>The 'map' folder is not required, but it is the default map location when creating a new project.</li>
              <li>The 'src' folder contains all source files i.e. triggers, variables, scripts etc.</li>
              <li>The 'dist' folder contains the final map when you click 'Export Map'.</li>
            </ul>

            <h2 id='expanded-functionality'>GUI dos and don'ts</h2>
            <h3 id='gui-natives'>Local Player</h3>
            Better Triggers has implemented '<code>GetLocalPlayer</code>' in GUI.
            This should only be used in if-then-else actions like so:
            <p>
            <img
            className="image"
            src={pngLocalPlayer}
            alt="no image"
            />

            <h3 id='frames'>Frames</h3>
            Since Blizzard has not implemented a generic event for frames Better Triggers has done a workaround to bring
            frame natives to GUI triggers. The generic frame event actually uses '<code>TriggerRegisterVariableEvent</code>' under the hood,
            but is made more user-friendly for GUI users. There are a few points to make about this:<br/><br/>

            When referring to the player that triggered the event you cannot use 'Triggering Player' or '<code>GetTriggerPlayer()</code>'.
            You must use 'Triggering Frame Player' or '<code>GetTriggerFramePlayerBT()</code>' as shown here: <br/><br/>
            <img
            className="image"
            src={pngFrameEvent}
            alt="no image"
            />
            <br/>
            This is also the case for a number of other natives, though is mostly relevant for scripting:
            <li>'<code>GetTriggerFrame()</code>' -&gt; '<code>GetTriggerFrameBT()</code>'</li>
            <li>'<code>BlzGetTriggerFrameEvent()</code>' -&gt; '<code>GetTriggerFrameEventBT()</code>'</li>
            <li>'<code>BlzGetTriggerFrameValue()</code>' -&gt; '<code>GetTriggerFrameValueBT()</code>'</li>
            <li>'<code>BlzGetTriggerFrameText()</code>' -&gt; '<code>GetTriggerFrameTextBT()</code>'</li>

            </p>
            <h2 id='remarks'>Remarks</h2>
            Working with an external tool like this comes with its set of limitations by working outside the boundaries of the World Editor:
            <ol>
              <li>Because Better Triggers overwrites the 'war3map.j' file in your map you are required to test your map through it, and not through the World Editor.</li>
              <li>There are no warnings when deleting anything inside the World Editor. The World Editor does not know what exists outside of it.
                Better Triggers only scans for changes when you save your map, but it will notify you with a list of changed triggers.</li>
              <li>Renaming regions, cameras and sounds will reset all their references in Better Triggers.
                They have no ID so it's only possible to track them via name.</li>
              <li>Renaming an object editor ID will reset all its references in Better Triggers.</li>
            </ol>
          </div>
          
      </header>
    </div>
  )
}