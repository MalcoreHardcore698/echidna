import React from 'react'
import styled from 'styled-components'
import Row from '../Row'
import Icon from '../Icon'
import DateText from '../DateText'
import Chip from '../Chip'
import Rating from '../Rating'

export const Wrap = styled(Row)``

export const DateRow = styled(Row)`
  position: relative;
  top: -2px;
  align-items: center;
  grid-gap: var(--gap-xs);
  color: var(--ghost-color-text);
`

export const DateIcon = styled(Icon)`
  margin-left: -4px;
`

export const Assessment = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-grow: 100;
`

export const Meta = ({ date, category, rating, onChangeRating }) => (
  <Wrap>
    {date && (
      <DateRow>
        <DateIcon icon={'calendar'} size={'xs'} stroke={'var(--ghost-color-text)'} />
        <DateText text={date} options={{
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
        }} />
      </DateRow>
    )}

    {category && <Chip color={'ghost'} appearance={'outlined'} size={'xs'}>{category}</Chip>}

    {(rating || (rating === 0)) && (
      <Assessment>
        <Rating defaultValue={rating} onChange={onChangeRating} size={'xs'} readOnly />
      </Assessment>
    )}
  </Wrap>
)

export default Meta
