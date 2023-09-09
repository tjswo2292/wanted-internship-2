import styled from 'styled-components'
import { useAppSelector } from '../../store/hooks'

const SearchPreview = () => {
  const { searchQuery } = useAppSelector((state) => state.search)

  return (
    <TitleWrapper>
      <Title>{searchQuery}</Title>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.div`
  margin: 2rem 2rem 1.5rem 2rem;
  font-size: 1.4rem;
  font-weight: bold;
  color: #888;
`
const Title = styled.span``

export default SearchPreview
