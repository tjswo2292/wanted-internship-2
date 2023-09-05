import { styled } from 'styled-components'
import { BiSearch } from 'react-icons/bi'

const SubmitButton = () => {
  return (
    <Box>
      <SubmitIconWrapper>
        <SubmitIcon />
      </SubmitIconWrapper>
    </Box>
  )
}
const Box = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  background-color: #007ce9;
`
const SubmitIconWrapper = styled.div`
  width: 3rem;
  height: 3rem;
`
const SubmitIcon = styled(BiSearch)`
  width: inherit;
  height: inherit;
  color: #fff;
`

export default SubmitButton
