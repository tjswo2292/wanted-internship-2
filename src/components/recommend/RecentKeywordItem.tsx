import { useEffect, useState } from 'react'

import styled from 'styled-components'
import { useAppSelector } from '../../store/hooks'

import { BiSearch } from 'react-icons/bi'
import { StyledProps } from './type'

interface RecentKeywordItemProps {
  text?: string
  index: number
}

const RecentKeywordItem = ({ text, index }: RecentKeywordItemProps) => {
  const [isHover, setIsHover] = useState(false)

  const { childrenIndex } = useAppSelector((state) => state.modal)

  useEffect(() => {
    childrenIndex === index ? setIsHover(true) : setIsHover(false)
  }, [childrenIndex])

  return (
    <RecentKeywordWrapper $isHover={isHover}>
      <RecentKeywordItemWrapper>
        <SearchInconWrapper>
          <SearchIcon />
        </SearchInconWrapper>
        <RecentKeyword>{text}</RecentKeyword>
      </RecentKeywordItemWrapper>
    </RecentKeywordWrapper>
  )
}

const RecentKeywordWrapper = styled.li<StyledProps>`
  margin-bottom: 10px;
  padding-left: 15px;
  background-color: ${({ $isHover }) => ($isHover ? '#e1e2e3' : 'none')};
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

export default RecentKeywordItem
