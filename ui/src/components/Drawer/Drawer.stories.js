import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import Column from '../Column'
import Title from '../Title'
import Button from '../Button'
import Feedback from '../../containers/Forms/Feedback'
import Drawer from '.'

storiesOf('Components API/Utilities/Drawer', module).add('Default', () => {
  const [isOpen, setOpen] = useState(false)

  const onShow = () => setOpen(true)

  const onHide = () => setOpen(false)

  return (
    <React.Fragment>
      <Column style={{ width: 240 }}>
        <Title tag={'h4'}>Default Drawer</Title>
        <Button onClick={onShow}>Default Drawer</Button>
      </Column>

      <Drawer isOpen={isOpen} onBack={onHide}>
        <Feedback />
      </Drawer>
    </React.Fragment>
  )
})
