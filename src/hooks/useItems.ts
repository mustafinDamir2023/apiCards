import { useAppDispatch } from '@/hooks/reduxHooks'
import {
  createItem,
  deleteItem,
  editItems
} from '@/features/redux/slices/itemsSlice'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const useItems = (id?: number) => {
  const [formData, setFormData] = useState({
    photographer: '',
    photo: '',
    description: ''
  })

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCreateItems = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newId = Date.now()
    const data = { ...formData, id: newId }
    dispatch(createItem(data))
    navigate('/')
  }

  const handleEditItems = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!id) {
      console.warn('Попытка редактирования без ID!')
      return
    }
    const data = { ...formData, id }
    dispatch(editItems(data))
  }

  const handleClear = () => {
    dispatch(deleteItem(id))
  }

  return {
    formData,
    handleChange,
    handleCreateItems,
    handleEditItems,
    handleClear
  }
}
