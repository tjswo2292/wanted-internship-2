import React, {
  ChangeEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'

import styled from 'styled-components'
import { BiSearch } from 'react-icons/bi'

import SubmitButton from './SubmitButton'
import TextCancelBtn from './TextCancelBtn'
import useSearchIcon from './hook/useSearchIcon'
import useCancelButton from './hook/useCancelButton'
import useDebounce from './hook/useDebounce'
import { publicApi } from '../../api/publicApi'
import { InputModalContext } from '../../context/InputModalProvider'
import { SearchKeywordContext } from '../../context/SeachKeywordProvider'

const SearchInput = () => {
  const [searchWord, setSearchWord] = useState('')
  const inputRef = useRef<HTMLInputElement | null>(null)

  const { updateIsModal }: any = useContext(InputModalContext)
  const { updateKeywordList, updateIncludeKeyword }: any =
    useContext(SearchKeywordContext)

  const [isShowSearchIcon, changeSearchIconShow] = useSearchIcon()
  const [isCancelBtnShow, changeCancelBtnShow] = useCancelButton()
  const [dispatchDebounce] = useDebounce()

  const handleInputFocus = () => {
    changeSearchIconShow()
    changeCancelBtnShow()
    updateIsModal((prev: boolean) => !prev)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearchWord(value)
  }

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (searchWord !== '') {
      updateKeywordList((prev: object[]) => [
        ...prev,
        { id: searchWord, text: searchWord },
      ])
    }

    InputValueInit()
    updateIncludeKeyword([])
  }

  const InputValueInit = () => {
    if (inputRef.current) {
      inputRef.current.value = ''
      inputRef.current.focus()
    }
  }

  useEffect(() => {
    const fetchSearchWord = async (searchKeyword: string) => {
      try {
        const response = await publicApi.GET(searchKeyword)

        searchKeyword === ''
          ? updateIncludeKeyword([])
          : updateIncludeKeyword(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchSearchWord(searchWord)
  }, [searchWord])

  return (
    <Box
      onSubmit={handleSearchSubmit}
      onFocus={handleInputFocus}
      onBlur={handleInputFocus}
    >
      <Wrapper>
        {isShowSearchIcon && (
          <InputIconWrapper>
            <InputIcon />
          </InputIconWrapper>
        )}
        <Input
          ref={inputRef}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            dispatchDebounce(() => handleInputChange(e))
          }}
          type="text"
          placeholder="질환명을 입력해주세요"
        />
      </Wrapper>
      {isCancelBtnShow && <TextCancelBtn />}
      <SubmitBtnWrapper>
        <SubmitButton />
      </SubmitBtnWrapper>
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
