import React, { FC } from 'react'
import { LayoutWrapper } from './layout.styles'
import { Outlet } from 'react-router-dom'
import { Header } from '../header/header'
import { TItemData } from '@/types/ItemTypes'

type LayoutProps = {
  children?: React.ReactNode
  setFilteredItems: React.Dispatch<React.SetStateAction<TItemData[]>>
}

export const Layout: FC<LayoutProps> = ({ setFilteredItems, children }) => {
  return (
    <LayoutWrapper>
      <Header setFilteredItems={setFilteredItems} />
      {children}
      <Outlet />
    </LayoutWrapper>
  )
}
