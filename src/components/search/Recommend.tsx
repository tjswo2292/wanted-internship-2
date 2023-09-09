import { useEffect, useRef } from 'react'

import styled from 'styled-components'

import IncludeSearch from './IncludeSearch'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  IncludeKeywordItemType,
  SearchKeywordItemType,
} from '../../store/slice/searchSlice'
import RecentKeywordItem from './RecentKeywordItem'
import { setChildrenEelementCount } from '../../store/slice/modalSlice'

const Recommend = () => {
  const autoKeywordRef = useRef<HTMLOListElement>(null)

  const dispatch = useAppDispatch()
  const { searchKeywordList, includeKeywordList } = useAppSelector(
    (state) => state.search,
  )

  useEffect(() => {
    const ElementCount = autoKeywordRef.current?.childElementCount || 0

    dispatch(setChildrenEelementCount(ElementCount))
  }, [searchKeywordList])

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
      <RecentList ref={autoKeywordRef}>
        {searchKeywordList.map(({ id, text }: SearchKeywordItemType, index) => (
          <RecentKeywordItem key={id} index={index} text={text} />
        ))}
      </RecentList>
      <RecentList>
        {includeKeywordList.map(
          ({ sickCd, sickNm }: IncludeKeywordItemType) => (
            <IncludeSearch key={sickCd} text={sickNm} />
          ),
        )}
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
const NothingWrapper = styled.div`
  margin-top: 2rem;
`
const Nothing = styled.span``

export default Recommend
