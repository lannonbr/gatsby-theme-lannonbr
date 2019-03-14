import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Footer from './footer'

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

  body {
    padding: 0;
    margin: 0;
    font-family: var(--bodyFont);

  }


  h1 {
    font-family: var(--headerFont);
  }
`

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    flex: 1 0 auto;
  }

  footer {
    flex-shrink: 0;
  }
`

const Layout = ({ children }) => (
  <LayoutContainer>
    <GlobalStyles />
    <header>
      <h1 style={{ color: 'rebeccapurple' }}>Title</h1>
    </header>
    <main>{children}</main>
    <Footer />
  </LayoutContainer>
)

export default Layout
