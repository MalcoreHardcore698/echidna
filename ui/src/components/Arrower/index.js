import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon'
import Button from '../Button'

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const Label = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 5px;

  span {
    font-weight: 700;
    text-transform: uppercase;
  }
`

export const ArrowButton = styled(Button)``

const Arrower = ({ label, onChange }) => {
  const onChangeMonth = (sign) => {
    if (onChange) onChange(sign)
  }

  const onPrevMonth = () => onChangeMonth(-1)
  const onNextMonth = () => onChangeMonth(1)

  return (
    <Wrap>
      <ArrowButton
        type={'button'}
        size={'s'}
        appearance={'clear'}
        aria-label={'Назад'}
        onMouseDown={onPrevMonth}>
        <Icon icon={'arrowLeft'} />
      </ArrowButton>

      <Label>{label}</Label>

      <ArrowButton
        type={'button'}
        size={'s'}
        appearance={'clear'}
        aria-label={'Далее'}
        onMouseDown={onNextMonth}>
        <Icon icon={'arrowRight'} />
      </ArrowButton>
    </Wrap>
  )
}

export default Arrower
