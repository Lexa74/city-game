import { styled } from 'styled-components'

interface BubbleSpanProps {
  $odd: boolean
}

export const BubbleCity = styled.div`
  margin-right: 8px;
  margin-left: 8px;
  display: flex;
  justify-content: left;

  &:nth-child(odd) {
    justify-content: right;
  }
`

export const BubbleSpan = styled.span<BubbleSpanProps>`
  color: white;
  padding: 6px 30px;
  max-width: 300px;
  background: ${({ $odd }) => ($odd ? '#b29bff' : 'gray')};
  border-radius: 20px;
`
