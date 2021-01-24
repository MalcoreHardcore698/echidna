import React from 'react'
import { storiesOf } from '@storybook/react'
import Column from '../Column'
import Member from '.'
import AvatarIMG from '../../../assets/images/avatar.png'

storiesOf('Components API/Data Display/Member', module).add('Default', () => {
  return (
    <Column style={{ width: 320 }}>
      <Member name={'Владислав'} avatar={AvatarIMG} position={'Инженер I разряда'} rating={3} />
    </Column>
  )
})
