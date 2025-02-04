import { TItemData } from '../types/ItemTypes'

export function likesCounter(data: Array<TItemData>) {
  return data.reduce((acc, item) => {
    if (item.liked) {
      return acc + 1
    } else {
      return acc
    }
  }, 0)
}
