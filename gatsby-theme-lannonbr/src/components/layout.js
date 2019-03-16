import React from 'react'
import styled from 'styled-components'
import Header from './header'
import Footer from './footer'
import GlobalStyles from '../utils/globalStyles'

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    flex: 1 0 auto;
  }

  main a {
    color: var(--blueLink);
    text-decoration: none;
  }

  header,
  main {
    padding: 20px 10px;
    max-width: 1600px;
    width: 100%;
    margin: 0 auto;
  }

  footer {
    flex-shrink: 0;
  }
`

const Layout = ({ children }) => (
  <LayoutContainer>
    <GlobalStyles />
    <Header />
    <main>{children}</main>
    <Footer />
  </LayoutContainer>
)

export default Layout
