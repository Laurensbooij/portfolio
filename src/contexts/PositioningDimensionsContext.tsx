import React, { createContext, FC, useContext, useReducer } from 'react'

export interface positioningDimensionsProps {
  headerHeight: number,
  clientWidth: number,
}

interface positioningDimensionsContextProviderProps {
  children: any
}

interface reducerPayloadProps {
  headerHeight?: number,
  clientWidth?: number,
}

const PositioningDimensionsContext = createContext<any>(null)
export const usePositioningDimensionsContext = () => useContext(PositioningDimensionsContext)

const PositioningDimensionsContextProvider: FC<positioningDimensionsContextProviderProps> = ({ children }) => {

  const positioningDimensionsReducer = (prevState: any , payload: reducerPayloadProps) => {
    const newHeaderHeight = payload.headerHeight || prevState.headerHeight
    const newClientWidth = payload.clientWidth || prevState.clientWidth
    
    return {
      headerHeight: newHeaderHeight,
      clientWidth: newClientWidth,
    }
  }

  const initialPositioningDimensions = {
    headerHeight: 150,
    clientWidth: 0,
  }
  const [ positioningDimensions, setPositioningDimensions ] = useReducer(positioningDimensionsReducer, initialPositioningDimensions)

  return (
    <PositioningDimensionsContext.Provider value={{ positioningDimensions, setPositioningDimensions }}>
      {children}
    </PositioningDimensionsContext.Provider>
  )
}

export default PositioningDimensionsContextProvider