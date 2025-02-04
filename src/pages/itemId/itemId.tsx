import { ItemWrapper, WrapperBlock } from './item.styles'
import { AdvancedItemCard } from './components/advanceItemCard'
import { Form, Offset } from '@/components'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '@/hooks/reduxHooks'

export const ItemId = () => {
  const { id } = useParams<string>()
  const { items } = useAppSelector((state) => state.items)

  if (!id) {
    return
  }
  const findItem = items.find((item) => item.id === +id)

  if (!findItem) {
    return
  }

  return (
    <ItemWrapper>
      <Offset />
      <WrapperBlock>
        <AdvancedItemCard itemData={findItem} />
        <Offset width='60px' />
        <Form variant='edit' id={+id} />
      </WrapperBlock>
    </ItemWrapper>
  )
}
