import { useEffect, useRef } from 'react'

import RecentKeywordItem from './RecentKeywordItem'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { SearchKeywordItemType } from '../../store/slice/searchSlice'
import { setChildrenEelementCount } from '../../store/slice/modalSlice'

import {
  TitleWrapper,
  Title,
  NothingWrapper,
  Nothing,
  RecentList,
} from './style'

const RecentSearch = () => {
  const autoKeywordRef = useRef<HTMLOListElement>(null)

  const dispatch = useAppDispatch()
  const { searchKeywordList } = useAppSelector((state) => state.search)

  useEffect(() => {
    const ElementCount = autoKeywordRef.current?.childElementCount || 0

    dispatch(setChildrenEelementCount(ElementCount))
  }, [searchKeywordList])

  return (
    <>
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
    </>
  )
}

export default RecentSearch
