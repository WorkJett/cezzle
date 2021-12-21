import {useState, useEffect} from 'react'

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
import {useSt} from 'state/context'

const get_url = url => `${process.env.PUBLIC_URL}${url}`

const Pattern = ({id, url}) => {
  return (
    <pattern id={id} viewBox="0 0 311 311" width="100%" height="100%">
      <image href={get_url(url)} width="311" height="311" />
    </pattern>
  )
}

export const Painter = ({pattern, shape}) => {
  const [current, setCurrent] = useState(0)
  const {state, setState} = useSt()
  const {colors} = state
  const [pal, setPal] = useState([])

  const click = idx => {
    return () => {
      const res = [...pal]
      res[idx] = colors[current]
      setPal(res)
    }
  }

  const change = () => {
    const st = {...state}
    const {tiles} = st[shape]
    if(tiles.length === 12) tiles.shift()
    tiles.push({
      pattern,
      colors: pal,
      rotate: 0
    })
    setState(st)
  }

  const remove = () => {
    setPal(new Array(pattern.d.length).fill(colors[0]))
  }

  useEffect(() => {
    if(pattern && pattern.d && pattern.d.length > 0)
      setPal(new Array(pattern.d.length).fill(colors[0]))
  }, [pattern])

  return (
    <Container>
      <Tile>
        {pattern && pal && pal.length === pattern.d.length && (
          <svg width="436" height="436" viewBox="0 0 436 436" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {colors.map((color, idx) => (
                <Pattern key={color.id} id={color.id} url={color.url} />
              ))}
            </defs>
            {pattern.d.map((path, idx) => (
              <path key={idx} onClick={click(idx)} d={path} fill={`url(#${pal[idx].id})`} stroke="#575756"/>
            ))}
          </svg>
        )}
      </Tile>
      <Palette>
        {colors.map((color, idx) => (
          <ColorBox active={current === idx} onClick={() => setCurrent(idx)}><Color color={get_url(color.url)} key={color.id} /></ColorBox>
        ))}
      </Palette>
      <Help>Сохрани или удали<br />готовую плитку</Help>
      <DownBtn onClick={change} />
      <RemoveBtn onClick={remove} />
      <ColorsTitle>Выбранные цвета:</ColorsTitle>
      <ColorNames>
        {pal.map((color, idx) => (
          <ColorName key={idx}>{idx + 1}. {color.title}</ColorName>
        ))}
      </ColorNames>
    </Container>
  )
}
