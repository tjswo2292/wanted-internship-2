import React from 'react'
import { RecentList, Title, TitleWrapper } from './style'

import { useAppSelector } from '../../store/hooks'
import IncludeSearch from './IncludeSearch'

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
        {includeKeywordList.map(({ sickCd, sickNm }) => (
          <IncludeSearch key={sickCd} text={sickNm} />
        ))}
      </RecentList>
    </>
  )
}

export default CurrentSearch
