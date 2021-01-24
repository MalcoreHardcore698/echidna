import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'
import Image from '../Image'
import Text from '../Text'
import { v4 } from 'uuid'
import Tooltip from '../Tooltip'
import Icon from '../Icon'

export const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  grid-gap: 10px;

  width: 100%;
  height: 256px;
`

export const InfoTooltip = styled(Tooltip)`
  position: absolute;
  right: var(--default-gap);
  bottom: var(--default-gap);
  z-index: var(--z-15);
`

export const InfoIcon = styled(Icon)`
  cursor: pointer;
  transition: opacity 450ms ease;

  &:hover {
    opacity: 0.65;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  z-index: var(--z-12);

  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-s);
  font-family: var(--font-family);
  color: var(--input-placeholder-color);

  width: 100%;
  height: 100%;
  border-radius: var(--surface-border-radius);
  border: 2px dashed var(--input-placeholder-color);
  outline: none;
  overflow: hidden;

  cursor: pointer;
  transition: all 150ms ease;

  &:hover {
    color: var(--default-color-accent);
    border: 2px dashed var(--default-color-accent);
  }
`

export const Area = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const Preview = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--surface-border-radius);
`

export const Placeholder = styled(Text)`
  color: inherit;
  padding: var(--default-gap);
  text-align: center;
`

export const Dropzone = ({
  accept,
  preview,
  className,
  style,
  defaultValue,
  placeholder,
  tooltip,
  onChange
}) => {
  const [image, setImage] = useState(null)
  const onDrop = useCallback(
    (droppedFile) => {
      const file = droppedFile[0]
      setImage(file)
      if (onChange) {
        onChange({
          file,
          id: v4(),
          blob: URL.createObjectURL(file)
        })
      }
    },
    [setImage]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    maxFiles: 1,
    accept
  })

  return (
    <Wrap className={className} style={style}>
      {tooltip && (
        <InfoTooltip text={tooltip} maxWidth={215}>
          <InfoIcon
            size={'s'}
            icon={'infoCircle'}
            stroke={defaultValue || preview ? 'white' : 'var(--default-color-accent)'}
          />
        </InfoTooltip>
      )}

      <Container className={'dropzone-container'} {...getRootProps()}>
        <input accept={accept} {...getInputProps()} hidden />
        <Area className={'dropzone-area'} active={isDragActive}>
          {!defaultValue && !image && !preview && <Placeholder>{placeholder}</Placeholder>}

          {defaultValue && !image && !preview && (
            <Preview src={defaultValue?.blob || defaultValue} alt={defaultValue.name} />
          )}

          {(image || preview) && !defaultValue && (
            <Preview src={image ? URL.createObjectURL(image) : preview} alt={'Preview'} />
          )}
        </Area>
      </Container>
    </Wrap>
  )
}

export default Dropzone
