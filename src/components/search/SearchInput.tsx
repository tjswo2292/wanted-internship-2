import styled from 'styled-components'
import { BiSearch } from 'react-icons/bi'
import SubmitButton from './SubmitButton'

const SearchInput = () => {
  return (
    <Box>
      <Wrapper>
        <Input type="text" placeholder="질환명을 입력해주세요" />
        <InputIconWrapper>
          <InputIcon />
        </InputIconWrapper>
      </Wrapper>
      <SubmitBtnWrapper>
        <SubmitButton />
      </SubmitBtnWrapper>
      {/* <MdCancel /> 입력값 전체 삭제 버튼 */}
    </Box>
  )
}

const Box = styled.form`
  display: flex;
  align-items: center;
  position: relative;
  width: 95%;
  height: 100%;
  margin-right: 1rem;
  margin-left: 2.4rem;
`
const Wrapper = styled.div`
  width: 100%;
  height: inherit;
  margin-right: 1rem;
  padding: 15px 0;
`
const Input = styled.input`
  width: inherit;
  height: inherit;
  padding-left: 3rem;
  font-size: 2.4rem;

  &::placeholder {
    color: #e1e2e3;
  }
`
const InputIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  width: 20px;
  height: 20px;
`
const InputIcon = styled(BiSearch)`
  width: inherit;
  height: inherit;
`
const SubmitBtnWrapper = styled.div``

export default SearchInput
