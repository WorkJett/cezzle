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
import {uniq} from 'helper'

const get_url = url => `${process.env.PUBLIC_URL}${url}`

const Pattern = ({id, url}) => {
  return (
    <pattern id={id} viewBox="0 0 436 436" width="436" height="436" patternUnits="userSpaceOnUse">
      <image href={get_url(url)} width="436" height="436" />
    </pattern>
  )
}

let tile_gen = 0

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
      id: tile_gen,
      pattern,
      colors: pal,
      rotate: 0
    })
    tile_gen++
    setState(st)
  }

  const remove = () => {
    setPal(new Array(pattern.d.length).fill(colors[0]))
  }

  useEffect(() => {
    if(pattern && pattern.d && pattern.d.length > 0)
      setPal(new Array(pattern.d.length).fill(colors[0]))
  }, [pattern])

  const
    get_pal = idx => pal[idx] ? `url(#${pal[idx].id})` : '#FFFFFF',
    uniq_pal = uniq(pal.map(color => color.title)),
    width = shape === 'cube' ? '436' : '436',
    height = shape === 'cube' ? '436' : '378',
    viewbox = shape === 'cube' ? '0 0 436 436' : '0 0 436 378'

  return (
    <Container>
      <Tile>
        {pattern && pal && pal.length === pattern.d.length && (
          <svg width={width} height={height} viewBox={viewbox} xmlns="http://www.w3.org/2000/svg">
            <defs>
              {colors.map((color, idx) => (
                <>
                  {color && (
                    <Pattern key={color.id} id={color.id} url={color.url} />
                  )}
                </>
              ))}
            </defs>
            {pattern.d.map((path, idx) => (
              <path key={idx} onClick={click(idx)} d={path} fill={get_pal(idx)} stroke="#575756"/>
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
        {uniq_pal.map((color, idx) => (
          <>
            {color && (
              <ColorName key={idx}>{idx + 1}. {color}</ColorName>
            )}
          </>
        ))}
      </ColorNames>
    </Container>
  )
}
