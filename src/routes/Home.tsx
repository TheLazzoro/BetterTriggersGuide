import React from 'react'
import '../App.css'
import { ImageComponent } from '../components/ImageComponent'
import gifFileSystem from "../images/FileSystem.gif"
import pngDS from "../images/DS.png"
import gifLiveScript from "../images/LiveScript.gif"
import pngSyntax from "../images/syntax.png"
import gifParameters from "../images/TriggerParameters.gif"
import gifGUIConvert from "../images/GUI2CustomScript.gif"

export const Home = () => {
    return (
        <div className="App">
            <header className="App-header App-home">



                <h1>Features:</h1>
                <p />
                <p />

                <div className="row">
                    <div className="column">
                        <h2>Source files outside the World Editor:</h2>
                        <p>As part of the reworked format all triggers, scripts, variables and categories are represented as individual files and folders in your filesystem.</p>
                    </div>
                    <div className="column-image">
                        <ImageComponent img={gifFileSystem}/>
                    </div>
                </div>
                <hr className="solid"></hr>

                <div className="row">
                    <div className="column">
                        <h2>Convert an entire map's triggers:</h2>
                        <p>If you are already working on a Warcraft 3 map but wish to port your triggers to this editor, you can.
                            The built-in trigger converter tool can scan your map for triggers, scripts etc. and convert them to source files readable by this editor.</p>
                            <p style={{fontStyle: "italic"}}>*The illustrated image shows a converted project of mine.</p>
                    </div>
                    <div className="column-image">
                        <ImageComponent img={pngDS}/>
                    </div>
                </div>
                <hr className="solid"></hr>

                <div className="row">
                    <div className="column">
                        <h2>Script live update:</h2>
                        <p>The editor automatically detects changes made to custom script files in your filesystem. This allows you to work directly in whatever text editor you want and removes the need to copy/paste from external source files into the editor.</p>
                    </div>
                    <div className="column-image">
                        <ImageComponent img={gifLiveScript}/>
                    </div>
                </div>
                <hr className="solid"></hr>

                <div className="row">
                    <div className="column">
                        <h2>Syntax Highlighting:</h2>
                        <p>The built-in script editor has basic syntax highlighting for both Jass and Lua files, but that is pretty much the only extra feature. The main idea is to encourage you to use superior external text editors like VSCode. However, extra features for the built-in text editor in the future are not out of question.</p>
                    </div>
                    <div className="column-image">
                        <ImageComponent img={pngSyntax}/>
                    </div>
                </div>
                <hr className="solid"></hr>

                <div className="row">
                    <div className="column">
                        <h2>"StarCraft II"-like GUI:</h2>
                        <p>The GUI has been re-imagined and has the look and feel of Starcraft II's GUI. One of the highlights of this is that you no longer need to click multiple times on parameter links to get to the bottom of the parameter tree. All parameters are now individually clickable.</p>
                    </div>
                    <div className="column-image">
                        <ImageComponent img={gifParameters}/>
                    </div>
                </div>
                <hr className="solid"></hr>

                <div className="row">
                    <div className="column">
                        <h2>Improved GUI to custom script conversion:</h2>
                        <p>You can convert a GUI trigger to custom script, but also convert it back to it's original GUI triggers if you regret it. Additionally, GUI to script conversion is also available for Lua mode.</p>
                    </div>
                    <div className="column-image">
                        <ImageComponent img={gifGUIConvert}/>
                    </div>
                </div>
                <hr className="solid"></hr>
            </header>
        </div>
    )
}
