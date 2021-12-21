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
    const {tiles} = st[shape]
    tiles.splice(ptrn, 1)
    setState(st)
    setPtrn(null)
  }

  return (
    <Container>
      <GridBox>
        <Grid tile={ptrn} shape={shape} />
      </GridBox>
      <Patterns>
        {patterns.map((pattern, idx) => (
          <PatternBox active={ptrn === idx} key={idx} onClick={tile_click(idx)}>
            {pattern && (
              <Pattern
                pattern={pattern.pattern}
                colors={pattern.colors}
                rotate={pattern.rotate}
                stroke={4}
                width={48}
                height={48}
              />
            )}
              {!pattern && (<EmptyPattern />)}
          </PatternBox>
        ))}
      </Patterns>
      {ptrn !== null && (
        <Details>
          <DetailsTitle>Паттерн:</DetailsTitle>
          <DetailsText>{patterns[ptrn].pattern.title}</DetailsText>
          <DetailsTitle>Цвета:</DetailsTitle>
          {patterns[ptrn].colors.map((color, idx) => (
            <DetailsText>{idx + 1}. {color.title}</DetailsText>
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
          <PatternsName>{idx + 1}. Паттерн {tile.pattern.title}, цвета: {tile.colors.map(color => color.title).reduce((prev, next) => `${prev}, ${next}`)} - {tile.colors.length} шт</PatternsName>
        ))}
      </PatternsNames>
    </Container>
  )
}
