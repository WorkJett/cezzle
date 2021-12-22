import styled from 'styled-components'

import tile_svg from 'assets/tile.svg'
import down_btn_svg from 'assets/down_btn.svg'
import remove_btn_svg from 'assets/remove_btn.svg'

export const Container = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: 436px 1fr;
  column-gap: 12px;
`

export const Tile = styled.div`
  width: 436px;
  height: 436px;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1;
  grid-row: 1 / 4;
`

export const Palette = styled.div`
  width: 336px;
  height: 336px;
  grid-column: 2;
  grid-row: 1;
  display: grid;
  grid-template-columns: repeat(8, 42px);
  grid-template-rows: repeat(8, 42px);
`

const color_box_active = ({active}) => active ? `
  border: 1.2px dashed #494A52;
  border-radius: 3px;
` : ''

export const ColorBox = styled.div`
  width: 42px;
  height: 42px;
  box-sizing: border-box;
  ${color_box_active}
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const color_add = ({color}) => color

export const Color = styled.div`
  width: 36px;
  height: 36px;
  background-position: center;
  background-size: 36px 36px;
  background-repeat: no-repeat;
  background-image: url(${color_add});
`

export const Help = styled.div`
  margin-top: 40px;
  grid-column: 2;
  grid-row: 2;
  font-family: Muller;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.04em;
  color: #000000;
`

const Button = styled.div`
  margin-top: 10px;
  width: 20px;
  height: 20px;
  grid-column: 2;
  grid-row: 3;
  background-position: center;
  background-size: 20px 20px;
  background-repeat: no-repeat;
  cursor: pointer;
`

export const DownBtn = styled(Button)`
  background-image: url(${down_btn_svg});
`

export const RemoveBtn = styled(Button)`
  margin-left: 32px;
  background-image: url(${remove_btn_svg});
`

export const ColorsTitle = styled.div`
  margin-top: 14px;
  grid-column: 1;
  grid-row: 4;
  font-family: Muller;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.04em;
  color: #000000;
`

export const ColorNames = styled.div`
  margin-top: 8px;
  grid-column: 1;
  grid-row: 5;
  display: flex;
  flex-direction: column;
`

export const ColorName = styled.div`
  font-family: Muller;
  font-weight: 300;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.04em;
  color: #000000;
`
