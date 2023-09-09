import React from 'react'
import { RecentList, Title, TitleWrapper } from './style'

import { useAppSelector } from '../../store/hooks'
import IncludeSearch from './IncludeSearch'
import { IncludeKeywordItemType } from '../../store/slice/searchSlice'

const CurrentSearch = () => {
  const { includeKeywordList, searchQuery } = useAppSelector(
    (state) => state.search,
  )
  return (
    <>
      <TitleWrapper>
        <Title>{searchQuery}</Title>
      </TitleWrapper>
      <RecentList>
        {includeKeywordList.map(
          ({ sickCd, sickNm }: IncludeKeywordItemType) => (
            <IncludeSearch key={sickCd} text={sickNm} />
          ),
        )}
      </RecentList>
    </>
  )
}

export default CurrentSearch
