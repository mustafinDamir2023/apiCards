import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ClearIcon from '@mui/icons-material/Clear'
import { FC } from 'react'
import { useAppDispatch } from '@/hooks/reduxHooks'
import { toggleLike } from '@/features/redux/slices/itemsSlice'
import { TItemData } from '@/types/ItemTypes'
import { useNavigate } from 'react-router-dom'
import { useItems } from '@/hooks/useItems'

type CardItemProps = {
  dataCard: TItemData
}

export const CardItem: FC<CardItemProps> = ({ dataCard }) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { handleClear } = useItems(dataCard.id)
  const like = dataCard.liked

  const handleClick = () => {
    navigate(`/${dataCard.id}`)
  }

  const handleLike = () => {
    dispatch(toggleLike(dataCard.id))
  }

  return (
    <Card sx={{ width: 345, height: 316 }}>
      <CardMedia
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
        sx={{ height: 140 }}
        image={dataCard.photo}
      />
      <CardContent sx={{ userSelect: 'none', height: 100 }}>
        <Typography gutterBottom variant='h5' component='div'>
          {dataCard.photographer}
        </Typography>
        <Typography variant='body2' sx={{ color: 'text.secondary' }}>
          {dataCard.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', width: '90%' }}>
        {!like ? (
          <ThumbUpOffAltIcon
            onClick={handleLike}
            style={{ cursor: 'pointer' }}
          />
        ) : (
          <ThumbUpAltIcon onClick={handleLike} style={{ cursor: 'pointer' }} />
        )}
        <ClearIcon
          fontSize='small'
          style={{ cursor: 'pointer' }}
          onClick={() => handleClear()}
        />
      </CardActions>
    </Card>
  )
}
