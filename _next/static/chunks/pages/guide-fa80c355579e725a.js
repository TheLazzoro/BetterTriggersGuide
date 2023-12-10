(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1],{8118:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guide",function(){return r(1455)}])},4368:function(e,s){"use strict";s.Z={src:"/_next/static/media/LiveScript.5f8fab01.gif",height:610,width:1e3,blurWidth:0,blurHeight:0}},1455:function(e,s,r){"use strict";r.r(s),r.d(s,{__toc:function(){return x},default:function(){return k}});var n=r(5893),i=r(2673),l=r(8441),o=r(8426);r(9128);var t=r(2643),a=r(4368),c=r(6204),h=r.n(c),d=r(9013);let x=[{depth:2,value:"Requirements",id:"requirements"},{depth:2,value:"Installation",id:"installation"},{depth:2,value:"Create a project",id:"create-a-project"},{depth:2,value:"Trigger Explorer",id:"trigger-explorer"},{depth:2,value:"Expanded GUI Tips",id:"expanded-gui-tips"},{depth:3,value:"Local Player",id:"local-player"},{depth:3,value:"Frames",id:"frames"}];function _createMdxContent(e){let s=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",p:"p",strong:"strong",h3:"h3",pre:"pre",code:"code",span:"span"},(0,t.a)(),e.components);return d.mQ||_missingMdxReference("Tabs",!1),d.mQ.Tab||_missingMdxReference("Tabs.Tab",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{children:"Guide"}),"\n",(0,n.jsx)(s.h2,{id:"requirements",children:"Requirements"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Windows 7 or greater"}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)("a",{className:h().linkText,style:{padding:"0px"},href:"https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-desktop-6.0.24-windows-x64-installer",target:"_blank",children:".NET 6.0 Desktop Runtime x64"}),"\n"]}),"\n",(0,n.jsx)(s.li,{children:"Warcraft III 1.32.0 or greater"}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Download and extract the tool anywhere in your filesystem."}),"\n",(0,n.jsx)(s.li,{children:"Run 'Better Triggers.exe' to launch the program."}),"\n",(0,n.jsx)(s.li,{children:"When launching for the first time it will ask you to locate your Warcraft III installation directory.  Example: 'C:\\User\\Program Files\\Warcraft III'."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"You're now ready and set!"}),"\n",(0,n.jsx)(s.h2,{id:"create-a-project",children:"Create a project"}),"\n",(0,n.jsx)(s.p,{children:"To create a project select 'File -> New Project' in the top menu."}),"\n",(0,n.jsx)(s.p,{children:"You have the option to create an empty project or copy all triggers from an existing map.\r\nCreating an empty map will generate a new map in the 'map' directory with empty triggers."}),"\n",(0,n.jsx)(s.p,{children:"When creating a project with existing triggers from a map the tool will extract all folders, triggers, variables, and scripts\r\ninto the 'src' folder in your project. Comments in the Trigger Explorer menu are ignored."}),"\n",(0,n.jsxs)(d.UW,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"NOTE:"}),' If you\'re copying triggers from a map that contains variables with upper-/lower case variations of the same name\r\ne.g. "myVar" and "MyVar" the latter ones will be renamed.\r\nThis is because the filesystem isn\'t case sensitive by default and conflicts would occur.']}),(0,n.jsx)(s.p,{children:"As a result, you may experience compile errors after porting."})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("img",{className:"image",src:"/_next/static/media/NewProject.c05bfd09.png",alt:"no image"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(s.p,{children:"Creating a new project generates a folder with a project file and three subfolders:"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("img",{className:"image",src:"/_next/static/media/ProjectFilesExample.97a15021.PNG",alt:"no image"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"The project file contains essential information about your project, and is the file you should point to when opening a project."}),"\n",(0,n.jsx)(s.li,{children:"The 'map' folder is not required, but it is the default map location when creating a new project."}),"\n",(0,n.jsx)(s.li,{children:"The 'src' folder contains all source files i.e. triggers, variables, scripts etc."}),"\n",(0,n.jsx)(s.li,{children:"The 'dist' folder contains the final map when you click 'Export Map'."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"trigger-explorer",children:"Trigger Explorer"}),"\n",(0,n.jsxs)(s.p,{children:["The trigger explorer in this trigger editor works a lot different than the one in the World Editor,\r\nin the way that it's actually a live view of your filesystem from your ",(0,n.jsx)("code",{children:"src"})," folder. ",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)("img",{className:"image",src:"/_next/static/media/TriggerExplorer.f1bf782e.png",alt:"no image"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(d.UW,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"NOTE:"})," While you can certainly copy-paste files and entire folders of content in Windows Explorer, it is\r\nrecommended you do these operations through the trigger explorer in Better Triggers. The generated script will\r\ncreate triggers and variables with names based on filenames, and if two variables\r\nor triggers have the same name it will cause script errors. This will not happen when copy-pasting through\r\nBetter Triggers, since the editor will properly rename your files."]}),(0,n.jsxs)(s.p,{children:["However, script files (",(0,n.jsx)("code",{children:".j"})," and ",(0,n.jsx)("code",{children:".lua"}),") are not affected by this."]})]}),"\n",(0,n.jsx)(s.p,{children:"The main benefit of this being a live filesystem view is that you can work directly in an external text/code editor\r\nwithout the need to copy-paste the contents into the editor like we are used to in the World Editor:"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("img",{className:"image",src:a.Z.src,alt:"no image"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(s.p,{children:["External changes to your scripts are automatically picked up by the editor. This is exclusive to ",(0,n.jsx)("code",{children:".j"})," and ",(0,n.jsx)("code",{children:".lua"})," files.\r\nContent changes to trigger and variable files will not be picked up by the editor, but it's generally not recommended\r\nto edit those anyway."]}),"\n",(0,n.jsx)(s.h2,{id:"expanded-gui-tips",children:"Expanded GUI Tips"}),"\n",(0,n.jsx)(s.h3,{id:"local-player",children:"Local Player"}),"\n",(0,n.jsxs)(s.p,{children:["Better Triggers has implemented '",(0,n.jsx)("code",{children:"GetLocalPlayer"}),"' in GUI.\r\nThis should only be used in if-then-else actions like so:"]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("img",{className:"image",src:"/_next/static/media/LocalPlayer.d16c3b27.png",alt:"no image"}),"\n",(0,n.jsxs)(s.p,{children:["It's generally not recommended to use '",(0,n.jsx)("code",{children:"Local Player"}),"' if you're unfamiliar with it, as it's the number 1 cause of desyncs.\r\nHowever, it enables you to do a lot of things, like displaying UI elements (frames) on a per player basis."]}),"\n",(0,n.jsx)(s.h3,{id:"frames",children:"Frames"}),"\n",(0,n.jsxs)(s.p,{children:["Since Blizzard has not implemented a generic event for frames, Better Triggers has done a workaround to bring\r\nframe natives to GUI triggers. The generic frame event actually uses '",(0,n.jsx)("code",{children:"TriggerRegisterVariableEvent"}),"' under the hood,\r\nbut is made more user-friendly for GUI users. There are a few points to make about this:"]}),"\n",(0,n.jsxs)(s.p,{children:["When referring to the player that triggered the event you cannot use 'Triggering Player' or '",(0,n.jsx)("code",{children:"GetTriggerPlayer()"}),"'.\r\nYou must use 'Triggering Frame Player' or '",(0,n.jsx)("code",{children:"GetTriggerFramePlayerBT()"}),"' as shown here:"]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("img",{className:"image",src:"/_next/static/media/FrameEvent.67829cb7.png",alt:"no image"}),"\n",(0,n.jsx)(s.p,{children:"This is also the case for a number of other natives, though is mostly relevant for scripting:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["'",(0,n.jsx)("code",{children:"GetTriggerFrame()"}),"' -> '",(0,n.jsx)("code",{children:"GetTriggerFrameBT()"}),"'"]}),"\n",(0,n.jsxs)(s.li,{children:["'",(0,n.jsx)("code",{children:"BlzGetTriggerFrameEvent()"}),"' -> '",(0,n.jsx)("code",{children:"GetTriggerFrameEventBT()"}),"'"]}),"\n",(0,n.jsxs)(s.li,{children:["'",(0,n.jsx)("code",{children:"BlzGetTriggerFrameValue()"}),"' -> '",(0,n.jsx)("code",{children:"GetTriggerFrameValueBT()"}),"'"]}),"\n",(0,n.jsxs)(s.li,{children:["'",(0,n.jsx)("code",{children:"BlzGetTriggerFrameText()"}),"' -> '",(0,n.jsx)("code",{children:"GetTriggerFrameTextBT()"}),"'"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Other than that you use the frame natives in GUI just like you would in scripting. ",(0,n.jsx)("br",{}),"\r\nE.g. you show/hide frames for individual players showing/hiding them inside a 'Local Player' if-statement:",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)("img",{className:"image",src:"/_next/static/media/FrameShowHide.ffde5623.png",alt:"no image"}),"\n",(0,n.jsx)(s.p,{children:"The above GUI trigger generates the following script:"}),"\n",(0,n.jsxs)(d.mQ,{items:["JASS","Lua"],children:[(0,n.jsx)(d.mQ.Tab,{children:(0,n.jsx)(s.pre,{"data-language":"js","data-theme":"default",children:(0,n.jsxs)(s.code,{"data-language":"js","data-theme":"default",children:[(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"//****************************************************************************"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"//*  Trigger Untitled_Trigger"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"//****************************************************************************"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"If_Trig_Untitled_Trigger_0"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"takes"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"nothing"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"returns"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"boolean"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"not"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GetTriggerFramePlayerBT"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GetLocalPlayer"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"())) then"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"		"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"false"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	endif"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"endfunction"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Trig_Untitled_Trigger_Conditions"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"takes"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"nothing"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"returns"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"boolean"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"not"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GetTriggerFrameBT"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" udg_frameButton)) then "})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"		"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"false"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	endif"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"not"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GetTriggerFramePlayerBT"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Player"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"))) then "})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"		"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"false"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	endif"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"endfunction"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Trig_Untitled_Trigger_Actions"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"takes"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"nothing"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"returns"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"nothing"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"If_Trig_Untitled_Trigger_0"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()) then"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"		call "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"BlzFrameSetVisibleBT"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GetTriggerFrameBT"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"())"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"else"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	endif"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"endfunction"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:" "}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"//****************************************************************************"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"InitTrig_Untitled_Trigger"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"takes"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"nothing"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"returns"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"nothing"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"set"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"gg_trg_Untitled_Trigger"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" = "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"CreateTrigger"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"call"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"TriggerRegisterGenericFrameEventBT"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(gg_trg_Untitled_Trigger"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" 1.0"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" EQUAL"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"bt_genericFrameEvent"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"call"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"TriggerAddCondition"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(gg_trg_Untitled_Trigger"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" Condition(function Trig_Untitled_Trigger_Conditions))"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"call"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"TriggerAddAction"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(gg_trg_Untitled_Trigger"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" function Trig_Untitled_Trigger_Actions)"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"endfunction"})})]})})}),(0,n.jsx)(d.mQ.Tab,{children:(0,n.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-----------------------------------------------------------------------------"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"--  Trigger Untitled_Trigger"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-----------------------------------------------------------------------------"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"If_Trig_Untitled_Trigger_0"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"not"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GetTriggerFramePlayerBT"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GetLocalPlayer"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"())) "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"then"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"		"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"false"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Trig_Untitled_Trigger_Conditions"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"not"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GetTriggerFrameBT"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" udg_frameButton)) "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"then"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"		"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"false"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"not"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GetTriggerFramePlayerBT"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Player"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"))) "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"then"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"		"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"false"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Trig_Untitled_Trigger_Actions"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"If_Trig_Untitled_Trigger_0"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()) "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"then"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	 	"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"BlzFrameSetVisibleBT"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GetTriggerFrameBT"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"())"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"else"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:" "}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-----------------------------------------------------------------------------"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"InitTrig_Untitled_Trigger"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ()"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	gg_trg_Untitled_Trigger "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"CreateTrigger"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" 	"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"TriggerRegisterGenericFrameEventBT"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(gg_trg_Untitled_Trigger, "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1.0"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", EQUAL, "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"bt_genericFrameEvent"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") "})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"TriggerAddCondition"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(gg_trg_Untitled_Trigger, "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Condition"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"( Trig_Untitled_Trigger_Conditions))"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"TriggerAddAction"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(gg_trg_Untitled_Trigger, Trig_Untitled_Trigger_Actions)"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})})]})})})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(s.p,{children:["For a more in-depth guide on how to use frames refer to ",(0,n.jsx)("a",{className:"default-li",style:{padding:"0px"},href:"https://www.hiveworkshop.com/pastebin/e23909d8468ff4942ccea268fbbcafd1.20598",target:"_blank",children:"Tasyen's tutorial"}),":\r\n",(0,n.jsx)("a",{className:h().linkText,style:{padding:"0px"},href:"https://www.hiveworkshop.com/threads/ui-list-default-mainframes.317884/",target:"_blank",children:"Types of Frames"})]})]})}function _missingMdxReference(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}let p={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,t.a)(),e.components);return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/guide.mdx",route:"/guide",pageMap:[{kind:"MdxPage",name:"download",route:"/download"},{kind:"MdxPage",name:"guide",route:"/guide"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Meta",data:{index:"Introduction",guide:"Guide",download:"Download",contact:{title:"Contact ↗",type:"page",href:"https://www.hiveworkshop.com/members/lazz.281551/",newWindow:!0}}}],flexsearch:{codeblocks:!0},title:"Guide",headings:x},pageNextRoute:"/guide",nextraLayout:l.ZP,themeConfig:o.Z};var k=(0,i.j)(p)},8426:function(e,s,r){"use strict";var n=r(5893);r(7294);let i={logo:(0,n.jsx)("span",{children:"Better Triggers"}),project:{link:"https://github.com/TheLazzoro/BetterTriggers"},chat:{link:"https://discord.com/invite/6dnuydb"},docsRepositoryBase:"https://github.com/TheLazzoro/BetterTriggers",footer:{text:"Nextra Docs Template"}};s.Z=i},6204:function(e){e.exports={counter:"counters_counter__fWfE_",column1:"counters_column1__pzklW",column2:"counters_column2__q4XnC",notYetExpandedImage:"counters_notYetExpandedImage__Y_BQR",expandedImage:"counters_expandedImage__em49Q",linkText:"counters_linkText__lvKde",row:"counters_row__ZMXpu",columnDownload1:"counters_columnDownload1__QVL_q",columnDownload2:"counters_columnDownload2__A5ANY"}}},function(e){e.O(0,[774,626,888,179],function(){return e(e.s=8118)}),_N_E=e.O()}]);