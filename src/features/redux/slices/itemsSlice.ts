import { createSlice } from '@reduxjs/toolkit'
import { itemsThunkAction } from '../thunkActions/itemsThunkAction'
import { TItemData } from '../../../types/ItemTypes'

type InitialState = {
  items: Array<TItemData>
  loading: boolean
  error: string | null | undefined
}

const initialState: InitialState = {
  items: [],
  loading: false,
  error: null
}

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    toggleLike(state, action) {
      const findItem = state.items.find((item) => item.id === action.payload)
      if (findItem) {
        findItem.liked = !findItem.liked
      }
    },
    toggleAllLikes(state, action) {
      state.items = state.items.map((item) => ({
        ...item,
        liked: action.payload
      }))
    },
    createItem(state, action) {
      state.items = [action.payload, ...state.items]
    },
    deleteItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    editItems(state, action) {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload
        }
        return item
      })
    }
  },
  extraReducers: (builder) => {
    builder.addCase(itemsThunkAction.pending, (state) => {
      state.loading = true
    })
    builder.addCase(itemsThunkAction.fulfilled, (state, action) => {
      state.loading = false
      state.items = action.payload
    })
    builder.addCase(itemsThunkAction.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  }
})

export const { toggleLike, toggleAllLikes, editItems, createItem, deleteItem } =
  itemsSlice.actions
export default itemsSlice.reducer
