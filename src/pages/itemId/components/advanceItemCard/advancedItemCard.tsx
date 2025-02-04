import { FC } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { TItemData } from '@/types/ItemTypes'

type AdvancedItemCardProps = {
  itemData: TItemData
}

export const AdvancedItemCard: FC<AdvancedItemCardProps> = ({ itemData }) => {
  const { photo, photographer, description } = itemData

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            {photographer.charAt(0).toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={photographer}
      />
      <CardMedia component='img' height='194' image={photo} alt='Paella dish' />
      <CardContent>
        <Typography variant='body2' sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}
