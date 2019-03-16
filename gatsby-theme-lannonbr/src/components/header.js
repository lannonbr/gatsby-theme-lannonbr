import { Link, useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding-left: 10px;
    padding-right: 10px;
    flex-direction: column;
    padding-bottom: 0;
    align-items: flex-start;
  }
`

const NavWrapper = styled.div`
  display: flex;

  label {
    margin-left: 30px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: center;

    label {
      margin: 0;
    }
  }
`

const IndexLink = styled(Link)`
  height: 100%;
  color: var(--purple);
  text-decoration: none;
  display: flex;
  align-items: center;
`

const Header = () => {
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
              <label>
                <input
                  type="checkbox"
                  onChange={e =>
                    toggleTheme(e.target.checked ? 'dark' : 'light')
                  }
                  checked={theme === 'dark'}
                />{' '}
                Dark mode
              </label>
            </NavWrapper>
          </HeaderContainer>
        </header>
      )}
    </ThemeToggler>
  )
}

export default Header
