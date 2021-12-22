import {useState, useEffect} from 'react'

import {
  Container,
  GridBox,
  Patterns,
  PatternBox,
  EmptyPattern,
  Details,
  DetailsTitle,
  DetailsText,
  Help,
  TurnRightBtn,
  TurnLeftBtn,
  RemoveBtn,
  PatternsTitle,
  PatternsNames,
  PatternsName,
} from './layout'
import {Pattern} from 'components/Pattern'
import {Grid} from 'components/Grid'
import {Hex} from 'components/Hex'
import {useSt} from 'state/context'
import {uniq} from 'helper'

export const Constructor = ({shape}) => {
  const [ptrn, setPtrn] = useState(null)
  const {state, setState} = useSt()
  const [patterns, setPatterns] = useState(new Array(12).fill(null))
  
  useEffect(() => {
    const ptrns = new Array(12).fill(null)
    state[shape].tiles.forEach((tile, idx) => {
      ptrns[idx] = tile
    })
    setPatterns(ptrns)
  }, [state])

  const tile_click = idx => {
    return () => {
      if(patterns[idx]) setPtrn(idx)
    }
  }

  const rotate_left = () => {
    if(ptrn === null) return
    const st = {...state}
    const {tiles} = st[shape]
    tiles[ptrn].rotate = tiles[ptrn].rotate === 0 ? 3 : tiles[ptrn].rotate - 1
    setState(st)
  }

  const rotate_right = () => {
    if(ptrn === null) return
    const st = {...state}
    const {tiles} = st[shape]
    tiles[ptrn].rotate = tiles[ptrn].rotate === 3 ? 0 : tiles[ptrn].rotate + 1
    setState(st)
  }

  const remove_click = () => {
    if(ptrn === null) return
    const st = {...state}
    const {tiles, map} = st[shape]
    const tile = tiles.splice(ptrn, 1)
    map.forEach((each, idx) => {
      if(each === tile) map[idx] = null
    })
    setState(st)
    setPtrn(null)
  }

  const uniq_cur = patterns[ptrn] && uniq(patterns[ptrn].colors.map(color => color.title))
  const uniq_colors = tile => uniq(tile.colors.map(color => color.title))
  const pattern_viewbox = shape === 'cube' ? null : '0 0 436 378'

  return (
    <Container>
      <GridBox>
        {shape === 'cube' && (
          <Grid tile={state[shape].tiles[ptrn]} shape={shape} />
        )}
        {shape === 'hex' && (
          <Hex tile={state[shape].tiles[ptrn]} shape={shape} />
        )}
      </GridBox>
      <Patterns>
        {patterns.map((pattern, idx) => (
          <PatternBox active={ptrn === idx} key={idx} onClick={tile_click(idx)}>
            {pattern && (
              <Pattern
                pattern={pattern.pattern}
                colors={pattern.colors}
                rotate={pattern.rotate}
                viewbox={pattern_viewbox}
                stroke={4}
                width={48}
                height={48}
              />
            )}
            {!pattern && (<EmptyPattern shape={shape} />)}
          </PatternBox>
        ))}
      </Patterns>
      {ptrn !== null && (
        <Details>
          <DetailsTitle>Паттерн:</DetailsTitle>
          <DetailsText>{patterns[ptrn].pattern.title}</DetailsText>
          <DetailsTitle>Цвета:</DetailsTitle>
          {uniq_cur.map((color, idx) => (
            <DetailsText>{idx + 1}. {color}</DetailsText>
          ))}
        </Details>
      )}
      <Help>Добавь плитку<br/>в поле, ее можно<br/>повернуть<br/>или удалить</Help>
      <TurnRightBtn onClick={rotate_right} />
      <TurnLeftBtn onClick={rotate_left} />
      <RemoveBtn onClick={remove_click} />
      {state[shape].tiles.length > 0 &&
        <PatternsTitle>В данной раскладке:</PatternsTitle>
      }
      <PatternsNames>
        {state[shape].tiles.map((tile, idx) => (
          <PatternsName>{idx + 1}. Паттерн {tile.pattern.title}, цвета: {uniq_colors(tile).reduce((prev, next) => `${prev}, ${next}`)} - {uniq_colors(tile).length} шт</PatternsName>
        ))}
      </PatternsNames>
    </Container>
  )
}
