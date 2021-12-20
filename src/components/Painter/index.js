import {useState} from 'react'

import {
  Container,
  Tile,
  Palette,
  ColorBox,
  Color,
  Help,
  DownBtn,
  RemoveBtn,
  ColorsTitle,
  ColorNames,
  ColorName
} from './layout'

const colors = [
  '#C7C5BA',
  '#859496',
  '#7D7970',
  '#C4C4C4',
  '#FFFFFF',
  '#E7DFB6'
]

export const Painter = () => {
  const [current, setCurrent] = useState(0)
  const [color1, setColor1] = useState(4)
  const [color2, setColor2] = useState(4)
  const [color3, setColor3] = useState(4)
  const [color4, setColor4] = useState(4)
  const [color5, setColor5] = useState(4)
  const [color6, setColor6] = useState(4)

  const click = idx => {
    return () => {
      switch (idx) {
        case 1: setColor1(current); break;
        case 2: setColor2(current); break;
        case 3: setColor3(current); break;
        case 4: setColor4(current); break;
        case 5: setColor5(current); break;
        case 6: setColor6(current); break;
      }
    }
  }

  return (
    <Container>
      <Tile>
        <svg width="436" height="436" viewBox="0 0 436 436" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path onClick={click(1)} d="M0.323975 435.679L435.678 435.666L435.665 0.337381L0.336893 0.324463L0.323975 435.679Z" fill={colors[color1]} stroke="#575756" stroke-width="0.5"/>
          <path onClick={click(2)} d="M394.325 77.9762L407.308 42.1144C410.331 33.7561 402.231 25.6562 393.873 28.6791L357.946 41.6752C327.82 52.5784 295.808 31.9346 292.902 0.322998H435.664V143.008C404.078 140.114 383.435 108.102 394.325 77.9762Z" fill={colors[color2]} stroke="#575756" stroke-width="0.5" stroke-miterlimit="10"/>
          <path onClick={click(3)} d="M358.024 394.325L393.886 407.308C402.244 410.331 410.344 402.231 407.321 393.873L394.325 357.946C383.422 327.82 404.065 295.808 435.677 292.902V435.664H292.992C295.886 404.078 327.898 383.435 358.024 394.325Z" fill={colors[color3]} stroke="#575756" stroke-width="0.5"/>
          <path onClick={click(4)} d="M41.6751 358.024L28.692 393.886C25.6691 402.244 33.769 410.344 42.1273 407.321L78.0537 394.325C108.18 383.422 140.192 404.065 143.098 435.677H0.335876V292.992C31.9217 295.886 52.5654 327.911 41.6751 358.024Z" fill={colors[color4]} stroke="#575756" stroke-width="0.5" stroke-miterlimit="10"/>
          <path onClick={click(5)} d="M77.9776 41.6769L42.1029 28.6938C33.7446 25.6709 25.6447 33.7708 28.6676 42.1291L41.6636 78.0555C52.5669 108.181 31.9231 140.194 0.311462 143.1V0.337646H142.997C140.116 31.9234 108.104 52.5672 77.9776 41.6769Z" fill={colors[color5]} stroke="#575756" stroke-width="0.5"/>
          <path onClick={click(6)} d="M205.199 435.396C205.199 322.475 113.323 230.599 0.401934 230.599C0.376097 230.599 0.363178 230.599 0.337341 230.599V206.144C0.35026 206.144 0.376097 206.144 0.389015 206.144C59.2587 206.144 112.845 228.635 153.486 265.246L265.244 153.488C228.763 112.872 206.349 59.3894 206.349 0.623075C206.349 0.532645 206.362 0.429297 206.362 0.338867H230.817C230.817 0.429297 230.804 0.532645 230.804 0.623075C230.804 113.544 322.68 205.42 435.614 205.42C435.627 205.42 435.653 205.42 435.665 205.42V229.875C435.653 229.875 435.627 229.875 435.614 229.875C376.744 229.875 323.158 207.384 282.517 170.786L170.758 282.544C207.24 323.16 229.641 376.642 229.641 435.396C229.641 435.486 229.628 435.577 229.628 435.68H205.173C205.173 435.577 205.199 435.486 205.199 435.396Z" fill={colors[color6]} stroke="#575756" stroke-width="0.5"/>
        </svg>
      </Tile>
      <Palette>
        {colors.map((color, idx) => (
          <ColorBox active={current === idx} onClick={() => setCurrent(idx)}><Color color={color} key={color} /></ColorBox>
        ))}
      </Palette>
      <Help>Сохрани или удали<br />готовую плитку</Help>
      <DownBtn />
      <RemoveBtn />
      <ColorsTitle>Выбранные цвета:</ColorsTitle>
      <ColorNames>
        <ColorName>1. С 302</ColorName>
        <ColorName>2. С 305</ColorName>
        <ColorName>3. С 304</ColorName>
      </ColorNames>
    </Container>
  )
}
