import React from 'react'
import { storiesOf } from '@storybook/react'
import Row from '../Row'
import Avatar from '.'
import AvatarIMG from '../../../assets/images/avatar.png'

storiesOf('Components API/Data Display/Avatar', module).add('Default', () => {
  return (
    <Row>
      <Avatar src={AvatarIMG} size={'l'} />
      <Avatar src={AvatarIMG} size={'m'} />
      <Avatar src={AvatarIMG} size={'s'} />
      <Avatar src={AvatarIMG} size={'xs'} />
    </Row>
  )
})
