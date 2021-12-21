import styled from 'styled-components'

import spinner_gif from 'assets/spinner.gif'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SpinnerGif = styled.img`
  width: 260px;
  height: 172px;
`

SpinnerGif.defaultProps = {
  src: spinner_gif
}
