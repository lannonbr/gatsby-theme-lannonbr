import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
:root {
  --headerFont: 'Oswald', Arial, Helvetica, sans-serif;
  --bodyFont: 'Lato', Arial, Helvetica, sans-serif;

  --purple: #663399;
  --footerLink: #66339988;
  --footerLinkHover: #663399dd;
  --footerBackground: #66339906;
  --blueLink: #2574a9;
  --bodyTextColor: #404040;
}

html {
  box-sizing: border-box;
}

* {
  box-sizing: inherit;
}

body {
  font: 112.5%/1.45em sans-serif;
  padding: 0;
  margin: 0;
  font-family: var(--bodyFont);
  color: var(--bodyTextColor);
  font-weight: 400;
  word-wrap: break-word;
  font-kerning: normal;
  font-feature-settings: "kern","liga","clig","calt";
}

body.dark {
  background: #404040;
  --bodyTextColor: #f0f0f0;
  --blueLink: #81cfe0;
  --footerLink: var(--blueLink);
  --footerLinkHover: #e4f1fe;
  --purple: var(--blueLink);
  --footerBackground: #81cfe020;
}

h1 {
  font-family: var(--headerFont);
}

h1 {
 font-size:2.25rem
}
h1,
h2 {
 padding:0;
 margin:0 0 1.45rem;
 color:inherit;
 font-weight:700;
 text-rendering:optimizeLegibility;
 line-height:1.1
}
h2 {
 font-size:1.62671rem
}
h3 {
 font-size:1.38316rem
}
h3,
h4 {
 padding:0;
 margin:0 0 1.45rem;
 color:inherit;
 font-weight:700;
 text-rendering:optimizeLegibility;
 line-height:1.1
}
h4 {
 font-size:1rem
}
h5 {
 font-size:.85028rem
}
h5,
h6 {
 padding:0;
 margin:0 0 1.45rem;
 color:inherit;
 font-weight:700;
 text-rendering:optimizeLegibility;
 line-height:1.1
}
h6 {
 font-size:.78405rem
}

img {
  max-width: 100%;
}

li {
  margin-bottom: .725rem;
}

p {
  padding: 0;
  margin: 0 0 1.45rem;
}
`

export default GlobalStyles
