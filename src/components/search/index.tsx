import { styled } from 'styled-components'
import SearchInput from './SearchInput'
import Recommend from './Recommend'
import { useContext } from 'react'
import {
  InputModalContext,
  InputModalContextType,
} from '../../context/InputModalProvider'

const Main = () => {
  const { isModal }: InputModalContextType = useContext(InputModalContext)
  // 현재 버그

  return (
    <Box>
      <SearchInputBox>
        <SearchInput />
      </SearchInputBox>
      {isModal && (
        <RcommentBox>
          <Recommend />
        </RcommentBox>
      )}
    </Box>
  )
}
const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 49rem;
`
const SearchInputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: inherit;
  height: 7rem;
  border-radius: 4.2rem;
  background-color: #fff;
`
const RcommentBox = styled(SearchInputBox)`
  height: auto;
  max-height: 30rem;
  margin-top: 1rem;
  border-radius: 1.8rem;
`

export default Main
