import React from 'react'
import styled from 'styled-components'

export const Wrap = styled.p`
  padding: 0;
`

export const AdvantageText = ({ children, ...props }) => <Wrap {...props}>{children}</Wrap>

export default AdvantageText
