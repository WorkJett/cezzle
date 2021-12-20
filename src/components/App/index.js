import {useState} from 'react'

import pattern_1 from 'assets/patterns/pattern_1.svg'
import pattern_2 from 'assets/patterns/pattern_2.svg'
import pattern_3 from 'assets/patterns/pattern_3.svg'
import pattern_4 from 'assets/patterns/pattern_4.svg'
import pattern_5 from 'assets/patterns/pattern_5.svg'
import pattern_6 from 'assets/patterns/pattern_6.svg'
import pattern_7 from 'assets/patterns/pattern_7.svg'

import {
  Container,
  Body,
  Header,
  Description,
  One, Two, Three, Four, Five, Six, Seven, Eight,
  Point, 
  Title,
  TitlePlus,
  Shapes,
  Cube, Hex,
  ShapeSizes,
  ShapeSize,
  Collection,
  CollectionItem,
  Patterns,
  Left,
  Right,
  Pattern,
  Price,
  SpaceTitle,
  TypeTitle,
  TotalTitle,
  LengthTitle,
  WideTitle,
  WithTitle,
  WithoutTitle,
  AmountTitle,
  ValueTitle,
  LengthInput,
  WideInput,
  WithRadio,
  WithoutRadio,
  AmountOut,
  PriceOut,
  PriceHelp,
  Contacts,
  NameTitle,
  PhoneTitle,
  NameInput,
  PhoneInput,
  TitleBtn
} from './layout'
import {Painter} from 'components/Painter'
import {Constructor} from 'components/Constructor'

const collections = [
  'BIO',
  'BASIC',
  'GEO',
  'CLASSIC',
  'ETHNO',
  'ОДНОЦВЕТНЫЕ'
]

const patterns = [
  pattern_1,
  pattern_2,
  pattern_3,
  pattern_4,
  pattern_5,
  pattern_6,
  pattern_7
]

export const App = () => {
  const [shape, setShape] = useState(0)
  const [coll, setColl] = useState(0)
  const [ptrn, setPtrn] = useState(0)
  const [length, setLength] = useState(3.2)
  const [width, setWidth] = useState(4.7)
  const [steep, setSteep] = useState(false)
  const [amount, setAmount] = useState(120)
  const [price, setPrice] = useState(24000)
  const [name, setName] = useState('John Doe')
  const [phone, setPhone] = useState('+7 920 000 00 00')

  const shape_click = idx => {
    return () => setShape(idx)
  }

  const collection_item_click = idx => {
    return () => setColl(idx)
  }

  const pattern_click = idx => {
    return () => setPtrn(idx)
  }

  return (
    <Container>
      <Body>
        <Header>Конструктор</Header>
        <Description>Раскрась паттерн и сконструируй раскладку</Description>
        <One><Point>1</Point><Title>Выбери форму</Title></One>
        <Shapes>
          <Cube active={shape === 0} onClick={shape_click(0)} />
          <Hex active={shape === 1} onClick={shape_click(1)} />
        </Shapes>
        <ShapeSizes>
          <ShapeSize>20х20мм</ShapeSize>
          <ShapeSize>20х23мм</ShapeSize>
        </ShapeSizes>
        <Two><Point>2</Point><Title>Выбери коллекцию</Title></Two>
        <Collection>
          {collections.map((collection, idx) => (
            <CollectionItem key={collection} onClick={collection_item_click(idx)} active={coll === idx}>{collection}</CollectionItem>
          ))}
        </Collection>
        <Three><Point>3</Point><Title>Выбери паттерн</Title></Three>
        <Patterns>
          <Left />
          {patterns.map((pattern, idx) => (
            <Pattern pattern={pattern} active={ptrn === idx} onClick={pattern_click(idx)} key={pattern} />
          ))}
          <Right />
        </Patterns>
        <Four><Point>4</Point><Title>Раскрась плитку</Title></Four>
        <Painter />
        <Five>
          <Point>5</Point>
          <Title>Создай свою раскладку</Title>
          <TitlePlus>Используй сохранённые паттерны и цвета</TitlePlus>
        </Five>
        <Constructor />
        <Six><Point>6</Point><Title>Рассчитай стоимость</Title></Six>
        <Price>
          <SpaceTitle>Укажи габариты помещения</SpaceTitle>
          <TypeTitle>Какая плитка вам нужна</TypeTitle>
          <TotalTitle>Итог</TotalTitle>
          <LengthTitle>Длина, м</LengthTitle>
          <LengthInput value={length} onChange={e => setLength(e.target.value)} />
          <WideTitle>Ширина, м</WideTitle>
          <WideInput value={width} onChange={e => setWidth(e.target.value)} />
          <WithTitle>С пропиткой</WithTitle>
          <WithRadio checked={steep} onClick={() => setSteep(true)} />
          <WithoutTitle>Без пропитки</WithoutTitle>
          <WithoutRadio checked = {!steep} onClick={() => setSteep(false)} />
          <AmountTitle>Количество плитки</AmountTitle>
          <AmountOut>{amount}</AmountOut>
          <ValueTitle>Цена</ValueTitle>
          <PriceOut>{price}</PriceOut>
        </Price>
        <PriceHelp>Формула считает площадь с округлением в плюс до целой плитки.<br/>Цена так же зависит от количества цветов в паттерне</PriceHelp>
        <Seven><Point>7</Point><Title>Укажи свои данные</Title></Seven>
        <Contacts>
          <NameTitle>Имя</NameTitle>
          <NameInput value={name} onChange={e => setName(e.target.value)} />
          <PhoneTitle>Телефон</PhoneTitle>
          <PhoneInput value={phone} onChange={e => setPhone(e.target.value)} />
        </Contacts>
        <Eight><Point>8</Point><Title>Отправь заказ</Title><TitleBtn>Заказать</TitleBtn></Eight>
        <PriceHelp>Цветопередача зависит от индивидуальных настроек монитора</PriceHelp>
      </Body>
    </Container>
  )
}
