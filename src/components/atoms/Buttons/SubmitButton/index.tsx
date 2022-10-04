import React, { FC, useEffect, useRef } from 'react'

import { SubmitInput } from './styled'

interface submitButtonProps {
  buttonText: string,
}

const SubmitButton: FC<submitButtonProps> = ({ buttonText }) => {
  const submitRef = useRef<HTMLInputElement>(null)

  useEffect(() => {

    const submitRefCurrent = submitRef.current
    if (submitRefCurrent) {
      submitRefCurrent.addEventListener('click', (event) =>{
        event.preventDefault()
      })
    }
    return () => {
      if (submitRefCurrent) {
        submitRefCurrent.removeEventListener('click', (event) =>{
          event.preventDefault()
        })
      }  
    }
  }, [])

  return (
    <SubmitInput 
      ref={submitRef}
      type="submit" 
      value={buttonText} 
    />
  )
}

export default SubmitButton