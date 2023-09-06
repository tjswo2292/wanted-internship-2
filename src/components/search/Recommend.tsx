import { useContext } from 'react'

import styled from 'styled-components'
import { BiSearch } from 'react-icons/bi'

import { SearchKeywordContext } from '../../context/SeachKeywordProvider'

const Recommend = () => {
  const { searchKeywordList }: any = useContext(SearchKeywordContext)

  return (
    <Box>
      <Title>최근 검색어</Title>
      <RecentList>
        {searchKeywordList &&
          searchKeywordList.map((element: any, index: any) => (
            <RecentKeywordWrapper key={index}>
              <RecentKeywordItemWrapper>
                <SearchInconWrapper>
                  <SearchIcon />
                </SearchInconWrapper>
                <RecentKeyword>{element.text}</RecentKeyword>
              </RecentKeywordItemWrapper>
            </RecentKeywordWrapper>
          ))}
      </RecentList>
    </Box>
  )
}

const Box = styled.div`
  width: inherit;
  height: inherit;
  overflow-y: scroll;
`
const Title = styled.p`
  margin: 2rem 2rem 1.5rem 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #888;
`
const RecentList = styled.ol`
  height: 5;
`
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

export default Recommend
