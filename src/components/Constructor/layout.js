import styled from 'styled-components'

import grid_svg from 'assets/grid.svg'
import pattern_svg from 'assets/pattern.svg'
import empty_pattern_svg from 'assets/empty_pattern.svg'
import turn_right_svg from 'assets/turn_right.svg'
import turn_left_svg from 'assets/turn_left.svg'
import remove_btn_svg from 'assets/remove_btn.svg'

export const Container = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: 436px auto 1fr;
`

export const Grid = styled.div`
  width: 436px;
  height: 436px;
  grid-column: 1;
  grid-row: 1 / 4;

  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${grid_svg});
  cursor: pointer;
`

export const Patterns = styled.div`
  margin-left: 16px;
  grid-column: 2;
  grid-row: 1;
  display: grid;
  grid-template-columns: repeat(4, 53px);
  grid-template-rows: repeat(3, 53px);
`

const pattern_box_active = ({active}) => active ? `
  border: 1.2px dashed #494A52;
  border-radius: 3px;
` : ''

export const PatternBox = styled.div`
  width: 54px;
  height: 54px;
  box-sizing: border-box;
  ${pattern_box_active}
  display: flex;
  justify-content: center;
  align-items: center;
`

const pattern_content = ({url}) => url ? `
  background-image: url(${pattern_svg});
` : `
  background-image: url(${empty_pattern_svg});
`

export const Pattern = styled.div`
  width: 48px;
  height: 48px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  ${pattern_content}
  cursor: pointer;
`

export const Details = styled.div`
  margin-left: 12px;
  grid-row: 1;
  grid-column: 3;
  display: flex;
  flex-direction: column;
`

export const DetailsTitle = styled.div`
  font-family: Muller;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.04em;
  color: #000000;

  &:not(:first-child) {
    margin-top: 16px;
  }
`

export const DetailsText = styled.div`
  font-family: Muller;
  font-weight: 300;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.04em;
  color: #000000;
`

export const Help = styled.div`
  margin-top: 180px;
  margin-left: 16px;
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
  margin-top: 12px;
  width: 20px;
  height: 20px;
  grid-column: 2;
  grid-row: 3;
  background-position: center;
  background-size: 20px 20px;
  background-repeat: no-repeat;
  cursor: pointer;
`

export const TurnRightBtn = styled(Button)`
  margin-left: 16px;
  background-image: url(${turn_right_svg});
`

export const TurnLeftBtn = styled(Button)`
  margin-left: 48px;
  background-image: url(${turn_left_svg});
`

export const RemoveBtn = styled(Button)`
  margin-left: 80px;
  background-image: url(${remove_btn_svg});
`

export const PatternsTitle = styled.div`
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

export const PatternsNames = styled.div`
  margin-top: 8px;
  grid-column: 1;
  grid-row: 5;
  display: flex;
  flex-direction: column;
`

export const PatternsName = styled.div`
  font-family: Muller;
  font-weight: 300;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.04em;
  color: #000000;
`
