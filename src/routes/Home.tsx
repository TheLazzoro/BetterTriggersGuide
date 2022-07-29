import React from 'react'
import '../App.css'
import { ImageComponent } from '../components/ImageComponent'
import pngBT from "../images/BT.png"
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

                <h1>Better Triggers</h1>
                <h2><a style={{ color: "#ddd" }}>A custom trigger editor for </a><a style={{ color: "#f90" }}>Warcraft III: Reforged</a></h2>
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
                    It expands with new features and improves the user experience for both GUI users and scripters.
                    To achieve this the save format had to be reworked,
                    which also means this editor
                    <a style={{ fontWeight: "bold", textDecoration: "underline" }}> cannot be interchangeably used with the World Editor's trigger editor</a>.
                    However, it is possible to port existing triggers to this editor.
                </p>
                <p>
                    At the moment the editor only supports editing maps made in patch 1.32.
                </p>

                <hr className="solid"></hr>
                <p />
                <h1>Main Features:</h1>
                <p />
                <p />

                <div className="row">
                    <div className="column">
                        <h2>Source files outside the World Editor:</h2>
                        <p>As part of the reworked format all triggers, scripts, variables and categories are represented as individual files and folders in your filesystem.</p>
                    </div>
                    <div className="column-image">
                        <ImageComponent img={gifFileSystem} />
                    </div>
                </div>
                <hr className="solid"></hr>

                <div className="row">
                    <div className="column">
                        <h2>Convert an existing map's triggers:</h2>
                        <p>If you are already working on a Warcraft 3 map and wish to port your triggers to this editor, you can.
                            The built-in trigger converter tool scans your map for triggers, variables, scripts etc. and converts them to source files readable by this editor.</p>
                        <p style={{ fontStyle: "italic" }}>*The illustrated image shows a converted project of mine.</p>
                    </div>
                    <div className="column-image">
                        <ImageComponent img={pngDS} />
                    </div>
                </div>
                <hr className="solid"></hr>

                <div className="row">
                    <div className="column">
                        <h2>Script live update:</h2>
                        <p>The editor automatically detects changes made to custom script files in your filesystem. This allows you to work directly in whatever text editor you want and removes the need to copy/paste from external source files into the editor.</p>
                    </div>
                    <div className="column-image">
                        <ImageComponent img={gifLiveScript} />
                    </div>
                </div>
                <hr className="solid"></hr>

                <div className="row">
                    <div className="column">
                        <h2>Syntax Highlighting:</h2>
                        <p>The built-in script editor has basic syntax highlighting for both Jass and Lua files, but that is pretty much the only extra feature. You are encouraged to use superior external text editors like VSCode. However, extra features for the built-in text editor in the future are not out of question.</p>
                    </div>
                    <div className="column-image">
                        <ImageComponent img={pngSyntax} />
                    </div>
                </div>
                <hr className="solid"></hr>

                <div className="row">
                    <div className="column">
                        <h2>"StarCraft II"-like GUI:</h2>
                        <p>The GUI has been re-imagined and has the look and feel of Starcraft II's GUI. One of the highlights of this is that you no longer need to click multiple times on parameter links to get to the bottom of the parameter tree. All parameters are now individually clickable.</p>
                    </div>
                    <div className="column-image">
                        <ImageComponent img={gifParameters} />
                    </div>
                </div>
                <hr className="solid"></hr>

                <div className="row">
                    <div className="column">
                        <h2>Improved GUI to custom script conversion:</h2>
                        <p>You can convert a GUI trigger to custom script, but also convert it back to it's original GUI triggers if you regret it. Additionally, GUI to script conversion is also available for Lua mode.</p>
                    </div>
                    <div className="column-image">
                        <ImageComponent img={gifGUIConvert} />
                    </div>
                </div>
                <hr className="solid"></hr>
                <p/>
                <p/>
                These are the major highlights of the editor in its current state. More features are planned:
                <ol>
                    <li>Trigger template/library importer.</li>
                    <li>Keybinding menu.</li>
                    <li>Action- and condition definitions: Define your own re-usable actions and conditions.</li>
                    <li>More GUI natives: GetLocalPlayer, RemoveLocation, GetEventDamage, BlzCreateFrame and more.</li>
                    <li>Local variables.</li>
                    <li>Editor color themes.</li>
                    <li>and more...</li>
                </ol>
                <hr className="solid"></hr>
                <p/>
                <p/>
                If this sounds great to you, be aware that working with an external tool
                like this comes with its set of drawbacks dictated by the limitations of working outside the boundaries of the World Editor:
                <ol>
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
