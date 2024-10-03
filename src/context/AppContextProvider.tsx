import React, { createContext, PropsWithChildren, useContext } from 'react'
import { IAddItems, initialTasks, ITask, useTask } from './hooks/useTask'

const AppContext = createContext<{
  addItems?: IAddItems
  items: ITask[]
} | null>({ items: initialTasks })

export const useAppContext = () => useContext(AppContext)

export const AppContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const { addItems, items } = useTask()
  return (
    <AppContext.Provider value={{ addItems, items }}>
      {children}
    </AppContext.Provider>
  )
}
