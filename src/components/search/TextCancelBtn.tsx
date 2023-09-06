import styled from 'styled-components'
import { MdCancel } from 'react-icons/md'

const TextCancelBtn = () => {
  return (
    <InputTextDeleteBtnWrapper type="button">
      <TextCancelIcon />
    </InputTextDeleteBtnWrapper>
  )
}

const InputTextDeleteBtnWrapper = styled.button`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
`
const TextCancelIcon = styled(MdCancel)`
  width: inherit;
  height: inherit;
`

export default TextCancelBtn
