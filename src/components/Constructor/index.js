import {useState} from 'react'

import {
  Container,
  Grid,
  Patterns,
  PatternBox,
  Pattern,
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

const patterns = [
  true, true, true, true,
  false, false, false, false,
  false, false, false, false
]

export const Constructor = () => {
  const [ptrn, setPtrn] = useState(0)

  const pattern_click = idx => {
    return () => {
      if(patterns[idx]) setPtrn(idx)
    }
  }

  return (
    <Container>
      <Grid />
      <Patterns>
        {patterns.map((pattern, idx) => (
          <PatternBox active={ptrn === idx} key={idx} onClick={pattern_click(idx)}><Pattern url={pattern} /></PatternBox>
        ))}
      </Patterns>
      <Details>
        <DetailsTitle>Паттерн:</DetailsTitle>
        <DetailsText>Labyrinth</DetailsText>
        <DetailsTitle>Цвета:</DetailsTitle>
        <DetailsText>1. С 302</DetailsText>
        <DetailsText>2. С 305</DetailsText>
        <DetailsText>3. С 304</DetailsText>
      </Details>
      <Help>Добавь плитку<br/>в поле, ее можно<br/>повернуть<br/>или удалить</Help>
      <TurnRightBtn />
      <TurnLeftBtn />
      <RemoveBtn />
      <PatternsTitle>В данной раскладке:</PatternsTitle>
      <PatternsNames>
        <PatternsName>1. Паттерн Labyrinth, цвета С 302, С 305, С 304 - 2 шт</PatternsName>
        <PatternsName>2. Паттерн Mehendi, цвета С 302, С 305, С 304 - 2 шт</PatternsName>
        <PatternsName>3. Паттерн House of stairs, цвета С 302, С 305, С 304 - 2 шт</PatternsName>
        <PatternsName>4. Паттерн Labyrinth, цвета С 302, С 305, С 304 - 2 шт</PatternsName>
      </PatternsNames>
    </Container>
  )
}
