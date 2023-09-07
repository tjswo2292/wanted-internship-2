import { BiSearch } from 'react-icons/bi'
import { styled } from 'styled-components'

interface IncludeSearchProps {
  text: string
}

const IncludeSearch = ({ text }: IncludeSearchProps) => {
  return (
    <RecentKeywordWrapper>
      <RecentKeywordItemWrapper>
        <SearchInconWrapper>
          <SearchIcon />
        </SearchInconWrapper>
        <RecentKeyword>{text}</RecentKeyword>
      </RecentKeywordItemWrapper>
    </RecentKeywordWrapper>
  )
}

const RecentKeywordWrapper = styled.li`
  padding-left: 15px;

  &:hover {
    background-color: #e1e2e3;
  }
`
const RecentKeywordItemWrapper = styled.div`
  display: flex;
  align-items: center;
`
const SearchInconWrapper = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 1rem;
`
const SearchIcon = styled(BiSearch)`
  width: inherit;
  height: inherit;
`
const RecentKeyword = styled.span`
  font-size: 1.6rem;
`

export default IncludeSearch
