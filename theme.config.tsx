import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import war3Png from './img/Warcraft_III_World_Editor.png'

const config: DocsThemeConfig = {
  //logo: <span style={{ flex: "flex"}}><img src={war3Png.src}></img>Better Triggers</span>,
  logo: <span>Better Triggers</span>,
  project: {
    link: 'https://github.com/TheLazzoro/BetterTriggers',
  },
  chat: {
    link: 'https://discord.com/invite/6dnuydb',
  },
  docsRepositoryBase: 'https://github.com/TheLazzoro/BetterTriggers',
  footer: {
    text: 'MIT 2023 © LazZ.',
  },
  primaryHue: { dark: 37, light: 37 },
}

export default config
