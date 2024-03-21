import * as S from './main.styled'
import { useState } from 'react'
import { BubbleCity } from './components/Bubble/BubbleCity'

const cityMockData: string[] = [
  'Архангельск',
  'Москва',
  'Санкт-Петербург',
  'Самара',
  'Саратов',
  'Омск'
]

export const Main = () => {
  const [inputCity, setInputCity] = useState('')
  const [dataCity, setDataCity] = useState<string[]>([])

  function enterHandler(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      sendCity()
    }
  }

  function sendCity() {
    if (inputCity === '') {
      alert('Нужно ввести город')
      return
    }
    if (dataCity.includes(inputCity)) {
      alert('Такой город уже называли')
      return
    }
    if (!cityMockData.includes(inputCity)) {
      alert('Такого города не сущетсвует')
      return
    }
    setDataCity([...dataCity, inputCity])
    setInputCity('')
  }

  return (
    <>
      <S.Title>Города</S.Title>
      <S.Container>
        {dataCity.map((el, i) => (
          <BubbleCity city={el} key={el} index={i} />
        ))}
        <S.InputCity
          onChange={(e) => setInputCity(e.target.value)}
          placeholder="Введите город"
          value={inputCity}
          onKeyDown={enterHandler}
        />
      </S.Container>
    </>
  )
}
