import React from 'react'
import { storiesOf } from '@storybook/react'
import Feedback from '../../containers/Forms/Feedback'
import Column from '../Column'

storiesOf('Components API/Inputs/Form', module).add('Default', () => {
  return (
    <Column style={{ width: 550 }}>
      <Feedback />
    </Column>
  )
})
