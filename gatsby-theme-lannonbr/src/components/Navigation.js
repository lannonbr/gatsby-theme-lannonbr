import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const StyledNav = styled(Navigation)`
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
    border-bottom-color: var(--purple);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
    display: flex;

    a {
      flex: 1;
      text-align: center;
      margin-left: 0;
      margin-bottom: 10px;
    }
  }
`

function Navigation({ className }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          navigationLinks {
            url
            name
          }
        }
      }
    }
  `)
  let navLinks = data.site.siteMetadata.navigationLinks

  return (
    <nav className={className}>
      {navLinks.map(link => (
        <Link key={link.name} to={link.url} activeClassName="active">
          {link.name}
        </Link>
      ))}
    </nav>
  )
}

export default StyledNav
