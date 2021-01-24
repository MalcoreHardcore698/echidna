import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Icon from '../Icon'

export const List = styled.ul`
  display: inline-block
  white-space: nowrap
  overflow: hidden
  text-overflow: ellipsis
`

export const Item = styled.li`
  display: inline
  text-overflow: ellipsis
  overflow: hidden
`

export const ArrowIcon = styled(Icon)`
  display: inline-block
  vertical-align: baseline
  text-overflow: ellipsis
  width: 12px
  height: 12px
  overflow: hidden
  flex-shrink: 0
  margin: 0 16px

  svg {
    width: 100%
    height: 100%
  }
`

export const Anchor = styled.a`
  text-overflow: ellipsis
  overflow: hidden
  opacity: 0.5
  font-size: 20px
  line-height: 1
  text-decoration: none
  transition: opacity 0.3s ease

  &:hover {
    opacity: 1
  }

  &.active {
    opacity: 1
    font-weight: 500
    pointer-events: none
  }
`

export const BreadCrumb = ({ url, breadcrumb, breadcrumbs, index }) => (
  <Item key={url}>
    <Link href={url}>
      <Anchor>{breadcrumb}</Anchor>
    </Link>

    {breadcrumbs.length - 1 !== index && <ArrowIcon icon={'arrow'} />}
  </Item>
)

export const BreadCrumbs = ({ breadcrumbs, ...props }) => (
  <List {...props}>
    {(breadcrumbs || []).map(({ match: { url }, breadcrumb }, index) => (
      <BreadCrumb
        key={url}
        url={url}
        breadcrumb={breadcrumb}
        breadcrumbs={breadcrumbs}
        index={index}>
        {breadcrumb}
      </BreadCrumb>
    ))}
  </List>
)

export default BreadCrumbs
