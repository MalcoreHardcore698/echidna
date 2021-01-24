import React from 'react'
import { storiesOf } from '@storybook/react'
import Column from '../Column'
import Comment from '.'
import AvatarIMG from '../../../assets/images/avatar.png'

storiesOf('Components API/Data Display/Comment', module).add('Default', () => {
  return (
    <Column style={{ width: 480 }}>
      <Comment
        user={{
          avatar: {
            path: AvatarIMG
          },
          name: 'Анна'
        }}
        message={'Хорошая статья!'}
        likes={10}
        time={'14:15'}
      />
    </Column>
  )
})
