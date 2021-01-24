import React from 'react'
import { storiesOf } from '@storybook/react'
import Column from '../Column'
import Message from '.'
import AvatarIMG from '../../../assets/images/avatar.png'

storiesOf('Components API/Data Display/Message', module).add('Default', () => {
  return (
    <Column>
      <Message
        avatar={AvatarIMG}
        side={'owner'}
        name={'Анна'}
        text={'Привет! Как дела?'}
        time={'18:45'}
      />
    </Column>
  )
})
