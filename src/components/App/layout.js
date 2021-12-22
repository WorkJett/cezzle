import styled from 'styled-components'

import cube_svg from 'assets/cube.svg'
import hex_svg from 'assets/hex.svg'
import left_svg from 'assets/left.svg'
import right_svg from 'assets/right.svg'
import radio_svg from 'assets/radio.svg'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 900px;
  grid-template-rows: auto;
  justify-content: center;
`

export const Body = styled.div`
  grid-column: 1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 800px;
  min-height: 100vh;
  margin-top: 70px;
  margin-bottom: 120px;
`

export const Header = styled.div`
  font-family: Muller;
  font-weight: 300;
  font-size: 30px;
  line-height: 30px;
  letter-spacing: 0.03em;
  color: #000000;
`

const Text = styled.div`
  font-family: Muller;
  font-weight: 300;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.04em;
  color: #000000;
`

export const Description = styled(Text)`
  margin-top: 15px;
`

const TitleBlock = styled.div`
  display: flex;
`

export const One = styled(TitleBlock)`
  margin-top: 21px;
`

export const Two = styled(TitleBlock)`
  margin-top: 38px;
`

export const Three = styled(TitleBlock)`
  margin-top: 38px;
`

export const Four = styled(TitleBlock)`
  margin-top: 41px;
`

export const Five = styled(TitleBlock)`
  margin-top: 37px;
`

export const Six = styled(TitleBlock)`
  margin-top: 35px;
`

export const Seven = styled(TitleBlock)`
  margin-top: 37px;
`

export const Eight = styled(TitleBlock)`
  margin-top: 37px;
`

export const Point = styled.div`
  width: 19px;
  height: 19px;
  border: 1.5px solid #6E6E74;
  box-sizing: border-box;
  border-radius: 10px;
  font-family: Muller;
  font-weight: bold;
  font-size: 13px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #494A52;
`

export const Title = styled.div`
  font-family: Muller;
  font-weight: normal;
  font-size: 13px;
  line-height: 13px;
  margin-top: 5px;
  margin-left: 6px;
  letter-spacing: 0.04em;
  color: #000000;
`

export const TitlePlus = styled(Title)`
  margin-left: 292px;
`

export const TitleBtn = styled.div`
  margin-left: 10px;
  height: 18px;
  padding: 0 8px;
  border: 1.2px dashed #494A52;
  border-radius: 2px;
  font-family: Muller;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.04em;
  color: #000000;
  cursor: pointer;
`

export const Shapes = styled.div`
  margin-top: 9px;
  display: flex;
`

const shapeBlock_active = ({active}) => active ? `
  border: 1.2px dashed #494A52;
  border-radius: 3px;
` : ''

const ShapeBlock = styled.div`
  width: 114px;
  height: 107px;
  box-sizing: border-box;
  ${shapeBlock_active}
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
`

export const Cube = styled(ShapeBlock)`
  background-size: 97px 98px;
  background-image: url(${cube_svg});
  margin-left: 23px;
`

export const Hex = styled(ShapeBlock)`
  background-size: 114px 97px;
  background-image: url(${hex_svg});
  margin-left: 25px;
`

export const ShapeSizes = styled.div`
  margin-top: 13px;
  margin-left: 27px;
  display: flex;
`

export const ShapeSize = styled.div`
  font-family: Muller;
  font-weight: normal;
  font-size: 13px;
  line-height: 13px;
  letter-spacing: 0.04em;
  color: #000000; 

  &:not(:first-child) {
    margin-left: 66px;
  }
`

export const Collection = styled.div`
  margin-top: 14px;
  margin-left: 27px;
  display: flex;
`

const collection_item_active = ({active}) => active ? `
  border: 1.2px dashed #494A52;
  border-radius: 2px;
  font-weight: 500;
` : ''

export const CollectionItem = styled.div`
  height: 20px;
  box-sizing: border-box;
  font-family: Muller;
  font-weight: normal;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.04em;
  color: #000000;
  cursor: pointer;
  padding: 0 8px;

  &:not(:first-child) {
    margin-left: 4px;
  }

  ${collection_item_active}
`

export const Patterns = styled.div`
  margin-top: 9px;
  display: flex;
  align-items: center;
`

export const Left = styled.div`
  margin-right: 10px;
  width: 10px;
  height: 19px;
  flex-shrink: 0;
  flex-basis: 10px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${left_svg});
  cursor: pointer;
`

export const Right = styled.div`
  margin-left: 17px;
  width: 10px;
  height: 19px;
  flex-shrink: 0;
  flex-basis: 10px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${right_svg});
  cursor: pointer;
`

const pattern_active = ({active}) => active ? `
  border: 1.2px dashed #494A52;
  border-radius: 3px;
` : ''

export const PatternBox = styled.div`
  width: 107px;
  height: 107px;
  flex-shrink: 0;
  flex-basis: 107px;
  margin-left: 6px;
  box-sizing: border-box;
  ${shapeBlock_active}
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Price = styled.div`
  margin-top: 8px;
  margin-left: 26px;
  display: grid;
  grid-template-columns: 106px 120px 106px 120px 146px 1fr;
  align-items: center;
`

const PriceTitle = styled.div`
  font-family: Muller;
  font-weight: normal;
  font-size: 13px;
  line-height: 22px;
  height: 22px;
  letter-spacing: 0.04em;
  color: #000000;
`

export const SpaceTitle = styled(PriceTitle)`
  grid-row: 1;
  grid-column: 1 / 3;
`

export const TypeTitle = styled(PriceTitle)`
  grid-row: 1;
  grid-column: 3 / 5;
`

export const TotalTitle = styled(PriceTitle)`
  grid-row: 1;
  grid-column: 5 / 7;
`

export const LengthTitle = styled(PriceTitle)`
  grid-row: 2;
  grid-column: 1 / 3;
`

export const WideTitle = styled(PriceTitle)`
  grid-row: 3;
  grid-column: 1 / 3;
`

export const WithTitle = styled(PriceTitle)`
  grid-row: 2;
  grid-column: 3 / 5;
`

export const WithoutTitle = styled(PriceTitle)`
  grid-row: 3;
  grid-column: 3 / 5;
`

export const AmountTitle = styled(PriceTitle)`
  grid-row: 2;
  grid-column: 5 / 7;
`

export const ValueTitle = styled(PriceTitle)`
  grid-row: 3;
  grid-column: 5 / 7;
`

const SizeInput = styled.input`
  width: 45px;
  height: 18px;
  margin: 2px 0;
  padding: 0 4px;
  border: 1.2px dashed #494A52;
  border-radius: 2px;
  font-family: Muller;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 0.04em;
  color: #000000;
`

export const LengthInput = styled(SizeInput)`
  grid-row: 2;
  grid-column: 2;
`

export const WideInput =styled(SizeInput)`
  grid-row: 3;
  grid-column: 2;
`

const radio_checked = ({checked}) => checked ? `
  background-position: center;
  background-size: 8px 8px;
  background-repeat: no-repeat;
  background-image: url(${radio_svg});
` : ''

const RadioInput = styled.div`
  width: 18px;
  height: 18px;
  border: 1.2px dashed #494A52;
  border-radius: 2px;
  cursor: pointer;
  ${radio_checked}
`

export const WithRadio = styled(RadioInput)`
  grid-row: 2;
  grid-column: 4;
`

export const WithoutRadio = styled(RadioInput)`
  grid-row: 3;
  grid-column: 4;
`

const ValueOut = styled.div`
  width: 65px;
  height: 18px;
  padding: 0 4px;
  border: 1.2px dashed #494A52;
  border-radius: 2px;
  font-family: Muller;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.04em;
  color: #000000;
`

export const AmountOut = styled(ValueOut)`
  grid-row: 2;
  grid-column: 6;
`

export const PriceOut = styled(ValueOut)`
  grid-row: 3;
  grid-column: 6;
`

export const PriceHelp = styled.div`
  margin-top: 16px;
  margin-left: 26px;
  font-family: Muller;
  font-weight: 300;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.04em;
  color: #000000;
`

export const Contacts = styled.div`
  margin-top: 12px;
  margin-left: 26px;
  display: grid;
  grid-template-columns: 106px 1fr;
`

export const NameTitle = styled(PriceTitle)`
  grid-row: 1;
  grid-column: 1;
`

export const PhoneTitle = styled(PriceTitle)`
  grid-row: 2;
  grid-column: 1;
`

const ContactsInput = styled.input`
  width: 130px;
  height: 18px;
  margin: 2px 0;
  padding: 0 4px;
  border: 1.2px dashed #494A52;
  border-radius: 2px;
  font-family: Muller;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 0.04em;
  color: #000000;
`

export const NameInput = styled(ContactsInput)`
  grid-row: 1;
  grid-column: 2;
`

export const PhoneInput = styled(ContactsInput)`
  grid-row: 2;
  grid-column: 2;
`
