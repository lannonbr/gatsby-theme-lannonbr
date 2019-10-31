import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import useNavigation from '../utils/useNavigation'

const StyledNav = styled.nav`
  margin-right: 30px;

  a {
    color: var(--bodyTextColor);
    text-decoration: none;
    margin-left: 30px;
    display: inline-block;
    padding-bottom: 3px;
    border-bottom: 2px solid transparent;
  }

  a:first-child {
    margin-left: 0;
  }

  a:hover,
  a.active {
    border-bottom-color: var(--primaryColor);
  }
`

function Navigation() {
  let navLinks = useNavigation()

  return (
    <StyledNav>
      {navLinks.map(link => (
        <Link key={link.name} to={link.url} activeClassName="active">
          {link.name}
        </Link>
      ))}
    </StyledNav>
  )
}

export default Navigation
