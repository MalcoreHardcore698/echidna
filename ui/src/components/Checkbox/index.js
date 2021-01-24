import React from 'react'
import styled, { css } from 'styled-components'
import { useUID } from 'react-uid'
import Icon from '../Icon'

export const Box = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 15%);
  border-radius: var(--surface-border-radius);
  transition: background-color 0.3s ease, border-color 0.3s ease;

  ${({ size }) =>
    size === 'xs' &&
    css`
      border-radius: 6px;
    `}
`

export const Container = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: normal;
  line-height: 1;
  cursor: pointer;
  user-select: none;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: default;
    `}

  &:hover ${Box} {
    color: #fff;
  }
`

export const Check = styled(Icon)`
  position: absolute;
  margin-left: -1px;
  opacity: 0;
  transform: scale(0.75);
  transition: opacity 0.3s ease;
`

export const Label = styled.span`
  display: inline-flex;
  padding-top: 2px;
  color: rgba(0, 0, 0, 75%);
  margin-left: 12px;

  ${({ size }) =>
    size &&
    css`
      font-size: var(--font-size-${size});
    `}

  ${({ size }) =>
    size === 'xs' &&
    css`
      margin-left: 8px;
    `}

  ${({ size }) =>
    size === 'm' &&
    css`
      margin-left: 15px;
    `}
`

export const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  opacity: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;

  &:checked + ${Box} {
    border-color: var(--default-color-accent);
    background: var(--default-color-accent);

    .theme_light & {
      border-color: var(--buttonBorder);
    }
  }

  &:checked ~ ${Check} {
    opacity: 1;

    svg {
      path,
      circle,
      line,
      rect {
        stroke: white;
      }
    }
  }

  &:focus[data-focus-visible-added] + ${Box} {
    border-color: gray;
  }
`

export const Wrap = styled.span`
  position: relative;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  box-sizing: border-box;

  color: var(--primary);
  cursor: inherit;

  ${({ size }) =>
    size === 'xs' &&
    css`
      width: 16px;
      height: 16px;
    `}

  ${({ size }) =>
    size === 's' &&
    css`
      width: 22px;
      height: 22px;
    `}

  ${({ size }) =>
    size === 'm' &&
    css`
      width: 26px;
      height: 26px;
    `}
`

export const CheckBox = ({
  children,
  className,
  style,
  inputStyle,
  label,
  size,
  disabled,
  ...props
}) => {
  const id = useUID()

  return (
    <Container htmlFor={`checkbox-${id}`} className={className} style={style} disabled={disabled}>
      <Wrap size={size} style={inputStyle}>
        <Input type={'checkbox'} id={`checkbox-${id}`} disabled={disabled} {...props} />

        <Box size={size} />

        <Check icon={'check'} size={size} />
      </Wrap>

      {label && <Label size={size}>{label}</Label>}

      {children}
    </Container>
  )
}

CheckBox.defaultProps = {
  size: 'm'
}

export default CheckBox
