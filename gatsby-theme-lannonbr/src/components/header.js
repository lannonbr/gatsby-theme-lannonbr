import { Link, useStaticQuery, graphql } from 'gatsby'
import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

// Components
import Navigation from './Navigation'
import MobileNav from './MobileNav'

// SVGs
import MenuSVG from '../images/menu.svg'
import MenuWhiteSVG from '../images/menu-white.svg'
import MoonSVG from '../images/moon.svg'
import SunSVG from '../images/sun.svg'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 0;
  }
`

const NavWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`

const MobileNavWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: flex-end;
  }
`

const IndexLink = styled(Link)`
  height: 100%;
  color: var(--primaryColor);
  text-decoration: none;
  display: flex;
  align-items: center;
`

const StyledButton = styled.button`
  width: 50px;
  height: 50px;
  border: 0;
  background: transparent;
  padding: 0;
  margin: 0;
  outline: 0;
  color: gray;

  ${props =>
    props.navButton &&
    css`
      z-index: 2;
      position: relative;
    `};

  ${props =>
    props.open &&
    css`
      position: fixed;
    `};
`

const Header = ({ location }) => {
  const [mobileNavOpened, setMobileNavOpened] = useState(false)

  useEffect(() => {
    setMobileNavOpened(false)
    if (window) {
      window.scrollTo({ top: 0 })
    }
  }, [location])

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  let title = data.site.siteMetadata.title

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <header>
          <HeaderContainer>
            <h1
              style={{
                margin: 0,
                height: 80,
              }}
            >
              <IndexLink to="/">{title}</IndexLink>
            </h1>
            <NavWrapper>
              <Navigation />
              <StyledButton
                onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                <img
                  src={theme === 'dark' ? SunSVG : MoonSVG}
                  alt="Dark mode toggler"
                />
              </StyledButton>
            </NavWrapper>
            <MobileNavWrapper>
              <MobileNav open={mobileNavOpened} />
              <StyledButton
                onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                <img
                  src={theme === 'dark' ? SunSVG : MoonSVG}
                  alt="Dark mode toggler"
                />
              </StyledButton>
              <StyledButton
                navButton={true}
                open={mobileNavOpened}
                onClick={() => {
                  if (mobileNavOpened) {
                    if (window) {
                      window.scrollTo({ top: 0 })
                    }
                  }
                  setMobileNavOpened(!mobileNavOpened)
                }}
              >
                <img
                  src={
                    theme === 'dark' || mobileNavOpened ? MenuWhiteSVG : MenuSVG
                  }
                  alt="Open Mobile Navigation"
                />
              </StyledButton>
            </MobileNavWrapper>
          </HeaderContainer>
        </header>
      )}
    </ThemeToggler>
  )
}

export default Header
