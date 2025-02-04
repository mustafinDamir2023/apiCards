import { Route, Routes } from 'react-router-dom'
import { Layout } from './components'
import { Items } from './pages/items'
import { ItemId } from './pages/itemId'
import { CreateItem } from './pages/createItem'
import { Alert } from '@mui/material'
import { useEffect, useState } from 'react'
import { itemsThunkAction } from './features/redux/thunkActions/itemsThunkAction'
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks'

export const App = () => {
  const dispatch = useAppDispatch()
  const { items, loading, error } = useAppSelector((state) => state.items)

  const [filteredItems, setFilteredItems] = useState(items)
  console.log(items, 'items')

  useEffect(() => {
    if (!items.length) {
      dispatch(itemsThunkAction())
    }
  }, [])

  if (loading) {
    return <Alert severity='info'>Loading...</Alert>
  }

  if (error) {
    return <Alert severity='error'>{error}</Alert>
  }

  return (
    <Routes>
      <Route element={<Layout setFilteredItems={setFilteredItems} />}>
        <Route path='/' element={<Items items={filteredItems} />} />
        <Route path='/:id' element={<ItemId />} />
        <Route path='/createItem' element={<CreateItem />} />
      </Route>
    </Routes>
  )
}
