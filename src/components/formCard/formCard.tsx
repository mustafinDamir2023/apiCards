import { Button, FormGroup, TextField } from '@mui/material'
import { Offset } from '..'
import { FC } from 'react'
import { useItems } from '@/hooks/useItems'

type FormProps = {
  variant: 'edit' | 'create'
  id?: number
}

export const Form: FC<FormProps> = ({ variant, id }) => {
  const { formData, handleChange, handleCreateItems, handleEditItems } =
    useItems(id)

  const toogleVariant = variant === 'edit' ? 'Редактировать' : 'Создать'

  return (
    <form onSubmit={variant === 'create' ? handleCreateItems : handleEditItems}>
      {variant === 'create' && <Offset />}
      <FormGroup>
        <TextField
          label='Имя'
          variant='standard'
          name='photographer'
          value={formData.photographer}
          onChange={handleChange}
          required
        />
        <Offset />
        <TextField
          label='Фото'
          variant='standard'
          name='photo'
          type='url'
          value={formData.photo}
          onChange={handleChange}
          required
        />
        <Offset />
        <TextField
          label='Описание'
          variant='standard'
          name='description'
          type='text'
          value={formData.description}
          onChange={handleChange}
          required
        />
        <Offset />
        <Offset />
        <Button type='submit' variant='contained' color='primary'>
          {toogleVariant}
        </Button>
      </FormGroup>
    </form>
  )
}
