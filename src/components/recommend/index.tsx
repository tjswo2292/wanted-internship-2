import styled from 'styled-components'

import { useAppSelector } from '../../store/hooks'
import RecentSearch from './RecentSearch'
import CurrentSearch from './CurrentSearch'

const Recommend = () => {
  const { searchQuery } = useAppSelector((state) => state.search)

  return <Box>{searchQuery === '' ? <RecentSearch /> : <CurrentSearch />}</Box>
}

const Box = styled.div`
  width: inherit;
  height: inherit;
  overflow-y: scroll;
`

export default Recommend
