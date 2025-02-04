import { TData, TItemData } from '../types/ItemTypes'

export function prepareData(data: Array<TData>): Array<TItemData> {
  return data.map((item: TData) => ({
    id: item.id,
    description: item.alt,
    liked: false,
    photographer: item.photographer,
    photo: item.src.small
  }))
}
