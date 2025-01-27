import styled from 'styled-components'

import themeStyles from 'utilities/themeStyles'

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 320px;
`

export const FormFieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Input = styled.input`
  font-family: 'Montserrat', Roboto, Helvetica Neue, sans-serif;
  font-size: 0.875rem;
  color: ${themeStyles.colors.primaryText};
  height: 2.5rem;
  width: 100%;
  margin: 0.5rem 0 0;
  padding: 0 1rem;
  background: ${themeStyles.colors.grey4};
  border: 2px solid ${themeStyles.colors.grey3};
  border-radius: 0.25rem;

  &::placeholder {
    color: ${themeStyles.colors.grey1};
  }

  &:focus {
    outline: none;
    border-color: ${themeStyles.colors.primary};
  }
`