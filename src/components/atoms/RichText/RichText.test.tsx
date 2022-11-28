import React from "react"
import { render, screen } from "@testing-library/react"
import RichText from "./index"

import { mockContent } from './__mocks__/richtext-content'

describe("Tests if RichText component renders correctly", () => {
  render(<RichText data-testid="richtext-element" content={mockContent} />)
  const richTextElement = screen.queryByTestId('richtext-element')

  it("should render the correct conent", () => {
    expect(richTextElement).toMatchSnapshot()
  })
})