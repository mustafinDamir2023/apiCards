import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Badge from '@mui/material/Badge'
import SearchIcon from '@mui/icons-material/Search'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { likesCounter } from '@/helpers/likesCounter'
import { toggleAllLikes } from '@/features/redux/slices/itemsSlice'
import { Container } from '@mui/material'
import { Search, SearchIconWrapper, StyledInputBase } from './header.styles'
import { FC, useEffect, useState } from 'react'
import { TItemData } from '@/types/ItemTypes'
import { useDebounce } from '@/hooks/useDebaunce'

type HeaderProps = {
  setFilteredItems: React.Dispatch<React.SetStateAction<TItemData[]>>
}

export const Header: FC<HeaderProps> = ({ setFilteredItems }) => {
  const navigate = useNavigate()
  const { items } = useAppSelector((state) => state.items)
  const dispatch = useAppDispatch()
  const count = likesCounter(items)

  const [searchQuery, setSearchQuery] = useState('')
  const debouncedQuery = useDebounce(searchQuery, 400)

  useEffect(() => {
    setFilteredItems(
      items.filter((item) =>
        item.photographer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
  }, [debouncedQuery, items])
  const handleMainPage = () => {
    navigate('/')
  }

  const handleCreatePage = () => {
    navigate('/createItem')
  }

  const handleToggleAllLikes = () => {
    if (items.some((i) => i.liked === true))
      return dispatch(toggleAllLikes(false))
    else return dispatch(toggleAllLikes(true))
  }

  return (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <AppBar
        position='static'
        sx={{ width: '100%', backgroundColor: 'rgb(66 66 66 / 87%)' }}
      >
        <Toolbar>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ display: { xs: 'none', sm: 'block' }, cursor: 'pointer' }}
            onClick={handleMainPage}
          >
            FoodBasket
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search…'
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Typography
              variant='h6'
              noWrap
              component='div'
              onClick={handleCreatePage}
              sx={{
                display: { xs: 'none', sm: 'block' },
                cursor: 'pointer',
                marginRight: 1
              }}
            >
              Create Card
            </Typography>
            <IconButton
              size='small'
              aria-label='show 4 new mails'
              color='inherit'
            >
              <Badge
                badgeContent={count}
                color='error'
                onClick={handleToggleAllLikes}
              >
                <ThumbUpOffAltIcon />
              </Badge>
            </IconButton>
            <Container sx={{ width: 60 }} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
