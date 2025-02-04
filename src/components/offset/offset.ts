import styled from '@emotion/styled'

export const Offset = styled.div<{ width?: string }>`
  height: 40px;
  width: ${(props) => props.width};
`
