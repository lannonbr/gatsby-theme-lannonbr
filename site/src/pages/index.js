import React from 'react'
import styled from 'styled-components'

const RedBox = styled.div`
  width: 100px;
  height: 100px;
  background: red;
`

export default () => (
  <div>
    Below this is a red square
    <RedBox />
  </div>
)
