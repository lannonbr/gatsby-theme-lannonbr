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

h1, h2, h3, h4, h5, h6 {
  font-family: var(--headerFont);
}
`

export default GlobalStyles
