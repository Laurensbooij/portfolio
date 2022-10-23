import styled from 'styled-components'

import { H3, BodyText } from 'components/atoms/TextElements'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 24px 0;
`

interface iconProps {
  imgUrl: string,
}

export const Icon = styled.div<iconProps>`
  height: 30vw;
  width: 30vw;
  background: url(${props => props.imgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  max-width: 240px;
  max-height: 240px;
`

export const Title = styled(H3)`
  text-align: center;
`

export const Text = styled(BodyText)`
  text-align: center;
`