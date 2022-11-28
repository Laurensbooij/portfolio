import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from './index'

describe("Tests if button component renders correctly", () => {
  render(<Button href="https://laurensbooij.com">Button text</Button>)
  const buttonElement = screen.getByText("Button text")

  it("should render the correct text content", () => {
    expect(buttonElement.closest('a')).toHaveTextContent('Button text')
  })
  it("should have the correct href attribute", () => {
    expect(buttonElement.closest('a')).toHaveAttribute('href', 'https://laurensbooij.com')
  })
})
