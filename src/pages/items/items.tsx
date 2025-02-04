import { FC } from 'react'
import { CardItem } from './components/cardItem'
import { CardWrapper, WrapperCards } from './items.styles'
import { TItemData } from '../../types/ItemTypes'

type ItemsProps = {
  items: TItemData[]
}

export const Items: FC<ItemsProps> = ({items}) => {
  return (
    <WrapperCards>
      {items?.map((dataCard: TItemData) => (
        <CardWrapper key={dataCard.id}>
          <CardItem dataCard={dataCard} />
        </CardWrapper>
      ))}
    </WrapperCards>
  )
}
