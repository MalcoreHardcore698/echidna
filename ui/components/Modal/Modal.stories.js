import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import Feedback from '../../containers/Forms/Feedback'
import Login from '../../containers/Forms/Login'
import Checkin from '../../containers/Forms/Checkin'
import ForgotPassword from '../../containers/Forms/ForgotPassword'
import ForgotEmail from '../../containers/Forms/ForgotEmail'
import Container from '../Container'
import Column from '../Column'
import Title from '../Title'
import Text from '../Text'
import Divider from '../Divider'
import Button from '../Button'
import Modal from '.'

storiesOf('Components API/Utilities/Modal', module).add('Default', () => {
  const [routes, setModal] = useState(null)

  const onShow = (state) => setModal(state)
  const onHide = () => setModal(null)

  return (
    <React.Fragment>
      <Column style={{ width: 240 }}>
        <Title tag={'h4'}>Default Modal</Title>
        <Button
          onClick={() =>
            onShow([
              {
                path: '/',
                title: 'Форма обратной связи',
                component: () => (
                  <Container style={{ padding: '0 15px' }}>
                    <Feedback title={false} appearance={'clear'} />
                  </Container>
                )
              }
            ])
          }>
          Default Modal
        </Button>
      </Column>

      <Divider />

      <Column style={{ width: 240 }}>
        <Title tag={'h4'}>Modal with depths</Title>
        <Button
          onClick={() =>
            onShow([
              {
                path: '/',
                title: 'Вход',
                component: ({ jump }) => (
                  <Container style={{ padding: '0 15px' }}>
                    <Login
                      title={false}
                      appearance={'clear'}
                      onForgot={() => jump('/forgot-email')}
                      onNext={() => jump('/welcome')}
                    />
                  </Container>
                )
              },
              {
                path: '/forgot-email',
                title: 'Восстановление пароля',
                component: ({ jump }) => (
                  <Container style={{ padding: '0 15px' }}>
                    <ForgotEmail title={false} appearance={'clear'} onNext={() => jump('/done')} />
                  </Container>
                )
              },
              {
                path: '/welcome',
                title: 'Вход',
                component: ({ jump }) => (
                  <Container style={{ padding: '0 15px' }}>
                    <Checkin
                      appearance={'clear'}
                      onForgot={() => jump('/forgot-password')}
                      onNext={() => jump('/done')}
                    />
                  </Container>
                )
              },
              {
                path: '/forgot-password',
                title: 'Восстановление пароля',
                component: ({ jump }) => (
                  <Container style={{ padding: '0 15px' }}>
                    <ForgotPassword
                      title={false}
                      appearance={'clear'}
                      onNext={() => jump('/done')}
                    />
                  </Container>
                )
              },
              {
                path: '/done',
                title: 'Информация',
                component: () => (
                  <Container style={{ padding: '0 15px' }}>
                    <Text>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia odio ipsa
                      tenetur, fugit eum a magnam totam maiores saepe distinctio laudantium. Nemo
                      reiciendis nam animi deleniti temporibus ipsum nihil voluptate, tempora, unde
                      praesentium, odio delectus.
                    </Text>
                  </Container>
                )
              }
            ])
          }>
          Modal with many depths
        </Button>
      </Column>

      <Modal routes={routes} onHide={onHide} />
    </React.Fragment>
  )
})
