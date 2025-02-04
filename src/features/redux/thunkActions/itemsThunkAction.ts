import { createAsyncThunk } from '@reduxjs/toolkit'
import { prepareData } from '../../../helpers/prepareData'
import { TItemData } from '../../../types/ItemTypes'

export const itemsThunkAction = createAsyncThunk<Array<TItemData>, void>(
  'items/itemsThunkAction',
  async () => {
    const response = await fetch('https://api.pexels.com/v1/search?query=p', {
      headers: {
        Authorization:
          '6bI3jOicPSacLiWOKJUoNbN6Cb0fBGm0KxFBbatQwCTb9MpqrLMllrXf'
      }
    })
    const data = await response.json()
    return prepareData(data.photos)
  }
)
