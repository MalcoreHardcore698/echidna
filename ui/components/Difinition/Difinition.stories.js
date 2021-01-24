import React from 'react'
import { storiesOf } from '@storybook/react'
import Column from '../Column'
import Difinition from '.'
import AvatarIMG from '../../../assets/images/avatar-company.png'

storiesOf('Components API/Data Display/Difinition', module).add('Default', () => {
  return (
    <Column>
      <Difinition img={AvatarIMG} label={'Компания'} text={'ПАО «Газпром»'} />

      <Difinition icon={'activity'} label={'Активность'} text={'478'} />

      <Difinition icon={'notification'} text={'Уведомления'} />

      <Difinition label={'Компания'} text={'ПАО «Газпром»'} />
    </Column>
  )
})
