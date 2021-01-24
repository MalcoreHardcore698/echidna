import React from 'react'
import styled from 'styled-components'
import Row from '../Row'
import Input from '../Input'
import Button from '../Button'
import Icon from '../Icon'

export const Wrap = styled(Row)`
  width: 100%;
`

export const Search = ({ onSubmit, className, ...props }) => (
  <Wrap className={className}>
    <Input type={'text'} placeholder={'Поиск'} {...props} />
    <Button kind={'icon'} onClick={onSubmit}>
      <Icon icon={'search'} stroke={'white'} />
    </Button>
  </Wrap>
)

export default Search
