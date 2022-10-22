import React, { createContext, FC, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const NavToggleContext = createContext<any>(null)
export const useNavToggleContext = () => useContext(NavToggleContext)

interface navToggleContextProviderProps {
  children: any
}

export interface navToggleContextProps {
  showToggle: boolean,
  toggled: boolean,
  toggleLabels: {
    left: string,
    right: string,
   },
}

const NavToggleContextProvider: FC<navToggleContextProviderProps> = ({ children }) => {
  
  const [ navToggleState, setNavToggleState] = useState<navToggleContextProps>({
    showToggle: false,
    toggled: false,
    toggleLabels: {
      left: 'Left',
      right: 'Right',
    },
  })

  const router = useRouter()
  const toggleParam = router.query.toggled

  const checkToggleParams = () => {
    if (toggleParam === undefined) return

    if (toggleParam === 'false' && navToggleState.toggled) {
      setNavToggleState(prevState => ({...prevState, toggled: false }))
    }
    if (toggleParam === 'true' && !navToggleState.toggled) {
      setNavToggleState(prevState => ({...prevState, toggled: true }))
    }
  }

  const setToggleVisibility = (action: string) => {
    switch(action) {
      case 'SHOW':
        setNavToggleState(prevState => ({...prevState, showToggle: true }))
        break
      case 'HIDE':
        setNavToggleState(prevState => ({...prevState, showToggle: false }))
        break
      default:
      return null
    }
  }

  const switchToggle = ( toggleValue: boolean ) => {
    setNavToggleState(prevState => {
      if (prevState.toggled != toggleValue) {
        return ({ ...prevState, toggled: !prevState.toggled })
      }
      return prevState
    })

    if (toggleParam) {
      router.push({
        query: { toggled: toggleValue }
      })
    }
  }

  const setToggleContent = ( action: string, payload: { leftLabel: string, rightLabel: string } ) => {
    switch(action) {
      case 'SET':
        setNavToggleState(prevState => ({
          ...prevState, 
          toggleLabels: {
            left: payload.leftLabel,
            right: payload.rightLabel,
          },
        }))
        break
      case 'CLEAR':
        setNavToggleState(prevState => ({
          ...prevState, 
          toggleLabels: {
            left: 'Left',
            right: 'Right',
          },
        }))
        break
      default:
      return null
    }
  }
  
  useEffect(() => {
    checkToggleParams()
  }, [toggleParam])

  return (
    <NavToggleContext.Provider value={{ navToggleState, switchToggle, setToggleContent, setToggleVisibility }}>
      {children}
    </NavToggleContext.Provider>
  )
}

export default NavToggleContextProvider