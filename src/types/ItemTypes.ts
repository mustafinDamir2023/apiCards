export type TItemData = {
  id: number
  description: string
  liked: boolean
  photographer: string
  photo: string
}

export type TData = {
  id: number
  alt: string
  photographer: string
  liked: boolean
  src: {
    large: string
    small: string
    tiny: string
  }
}
