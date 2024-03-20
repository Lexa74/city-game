import * as S from './bubbleCity.styled'

interface BubbleCityProps {
  city: string
  index: number
}

export const BubbleCity = ({ city, index }: BubbleCityProps) => {
  console.log(index % 2 === 0)
  return (
    <S.BubbleCity>
      <S.BubbleSpan $odd={index % 2 === 0}>{city}</S.BubbleSpan>
    </S.BubbleCity>
  )
}
