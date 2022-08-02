import React, { useState } from 'react'
import '../App.css'
import { ImageComponent } from '../components/ImageComponent'
import pngWorldEdit from "../images/Warcraft_III_World_Editor.png"
import pngBT from "../images/BT.png"
import gifFileSystem from "../images/FileSystem.gif"
import pngDS from "../images/DS.png"
import gifLiveScript from "../images/LiveScript.gif"
import pngSyntax from "../images/syntax.png"
import gifParameters from "../images/TriggerParameters.gif"
import gifGUIConvert from "../images/GUI2CustomScript.gif"
import pngArray2D from "../images/Array2D.png"


export const Home = () => {

    return (
        <div className="App">
            <header className="App-header App-home">

                <p />
                <p />
                <img src={pngWorldEdit} alt="NoImg" />
                <h1>Better Triggers</h1>

                <h2 style={{ paddingTop: "0px" }}><a style={{ color: "#ddd" }}>A custom trigger editor for </a><a style={{ color: "#f90" }}>Warcraft III: Reforged</a></h2>
                <p />
                <div style={{ boxShadow: "0px 0px 8px #ffffff", WebkitBoxShadow: "0px 0px 15px #f90" }}>
                    <img src={pngBT} style={{ outline: "10px", outlineColor: "#fff" }} />
                </div>
                <p />
                <p />
                <h1>What is this?</h1>
                <p>
                    This is a custom, 3rd party trigger editor built from scratch.
                </p>
                <p>
                    Unlike plugins like Jass NewGen Pack 2 (JNGP), TESH and similar, this trigger editor is completely separate
                    and works <a style={{ fontStyle: "italic" }}>outside</a> the World Editor.
                    It expands with new features and aims to improve the user experience for both GUI users and scripters.
                    To support the new features this editor does not bundle trigger data (.wtg) with your map, but saves the data in a project folder in your filesystem.
                    This also means
                    you <a style={{ fontWeight: "bold", textDecoration: "underline" }}>cannot swap back and forth between this editor and the World Editor's trigger editor</a>.
                    Although, it is possible to port existing triggers from a map to this editor with the built-in 'Trigger Converter' tool.
                </p>
                <p>
                </p>

                <hr className="solid"></hr>
                <p />
                <h1>Feature Highlights:</h1>
                <p />
                <p />

            </header>

            <main>
                <div className="row">
                    <div className="column1">
                        <h2 style={{ paddingTop: "0px" }}>Source files outside the World Editor:</h2>
                        <p>
                            As part of the reworked format all triggers, scripts, variables and categories are no longer saved with your map,
                            but are now located in a project directory as individual files and folders.
                        </p>
                        <p style={{ fontStyle: "italic" }}>
                            *This change required the removal of comments in the "trigger explorer"
                            because the World Editor allows comments with identical names; something a filesystem does not.
                        </p>
                    </div>
                    <div className="column2">
                        <ImageComponent img={gifFileSystem} />
                    </div>
                </div>
                <hr className="solid"></hr>

                <div className="row">
                    <div className="column1">
                        <h2 style={{ paddingTop: "0px" }}>Convert an existing map's triggers:</h2>
                        <p>If you are already working on a Warcraft 3 map and wish to port your triggers to this editor, you can.
                            The built-in trigger converter tool scans your map for triggers, variables, scripts etc. and converts them to source files readable by this editor.</p>
                        <p style={{ fontStyle: "italic" }}>*The illustrated image shows a converted project of mine.</p>
                    </div>
                    <div className="column2">
                        <ImageComponent img={pngDS} />
                    </div>
                </div>
                <hr className="solid"></hr>

                <div className="row">
                    <div className="column1">
                        <h2 style={{ paddingTop: "0px" }}>Script live update:</h2>
                        <p>The editor automatically detects changes made to custom script files in your filesystem. This allows you to work directly in whatever text editor you want and removes the need to copy/paste from external source files into the editor.</p>
                    </div>
                    <div className="column2">
                        <ImageComponent img={gifLiveScript} />
                    </div>
                </div>
                <hr className="solid"></hr>

                <div className="row">
                    <div className="column1">
                        <h2 style={{ paddingTop: "0px" }}>Syntax Highlighting:</h2>
                        <p>The built-in script editor has basic syntax highlighting for both Jass and Lua files, but that is pretty much the only extra feature. You are encouraged to use superior external text editors like VSCode. However, extra features for the built-in text editor in the future are not out of question.</p>
                    </div>
                    <div className="column2">
                        <ImageComponent img={pngSyntax} />
                    </div>
                </div>
                <hr className="solid"></hr>

                <div className="row">
                    <div className="column1">
                        <h2 style={{ paddingTop: "0px" }}>"StarCraft II"-inspired GUI:</h2>
                        <p>The GUI has been re-imagined and has the look and feel of Starcraft II's GUI. One of the great things about this is you no longer need to click multiple times on parameter links to get to the bottom of the parameter tree. All parameters are now individually clickable.</p>
                    </div>
                    <div className="column2">
                        <ImageComponent img={gifParameters} />
                    </div>
                </div>
                <hr className="solid"></hr>

                <div className="row">
                    <div className="column1">
                        <h2 style={{ paddingTop: "0px" }}>2D Arrays:</h2>
                        <p>The GUI supports 2D arrays.</p>
                    </div>
                    <div className="column2">
                        <ImageComponent img={pngArray2D} />
                    </div>
                </div>
                <hr className="solid"></hr>

                <div className="row">
                    <div className="column1">
                        <h2 style={{ paddingTop: "0px" }}>Improved GUI to custom script conversion:</h2>
                        <p>You can convert a GUI trigger to custom script, but also convert it back to it's original GUI triggers if you regret it. Additionally, GUI to script conversion is also available for Lua mode.</p>
                    </div>
                    <div className="column2">
                        <ImageComponent img={gifGUIConvert} />
                    </div>
                </div>
                <hr className="solid"></hr>

                <p />
                <div className="App-home">
                    <h1>Planned features</h1>
                    More features are planned down the road.
                    <p />
                </div>
                <ol>
                    <li>Trigger template/library importer.</li>
                    <li>Keybinding menu.</li>
                    <li>Action- and condition definitions: Define your own re-usable actions and conditions.</li>
                    <li>More GUI natives</li>
                    <li>Local variables.</li>
                    <li>Editor color themes.</li>
                    <li>and more...</li>
                </ol>

            </main>

        </div>
    )
}
