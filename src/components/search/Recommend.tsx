import { useContext } from 'react'

import styled from 'styled-components'
import { BiSearch } from 'react-icons/bi'

import { SearchKeywordContext } from '../../context/SeachKeywordProvider'
import IncludeSearch from './IncludeSearch'

const Recommend = () => {
  const { searchKeywordList, includeKeyword }: any =
    useContext(SearchKeywordContext)

  return (
    <Box>
      <TitleWrapper>
        <Title>최근 검색어</Title>
        {searchKeywordList.length === 0 && (
          <NothingWrapper>
            <Nothing>최근 검색어가 없습니다</Nothing>
          </NothingWrapper>
        )}
      </TitleWrapper>
      <RecentList>
        {searchKeywordList.map((element: any, index: any) => (
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
      <RecentList>
        {includeKeyword &&
          includeKeyword.map((element: any) => (
            <IncludeSearch key={element.sickCd} text={element.sickNm} />
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
const TitleWrapper = styled.div`
  margin: 2rem 2rem 1.5rem 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #888;
`
const Title = styled.span``
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
const NothingWrapper = styled.div`
  margin-top: 2rem;
`
const Nothing = styled.span``

export default Recommend
