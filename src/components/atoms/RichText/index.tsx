import React, { FC } from 'react'
import parse from 'html-react-parser'

import { H1, H2, H3, H4, H5, H6, BodyText } from '../TextElements'

import { Container } from './styled'

interface richTextProps {
  content: any,
}

const RichText: FC<richTextProps> = ({ content }) => {
  
  const stringExtractionHandler = (content: any) => {  
    console.log(content)

    let stringsArray = content.map((item: any) => {
      if(item.marks.find((mark: any) => mark.type === 'bold')) {
        console.log(item)
        return `<b>${item.value}</b>`
      }

      if(item.marks.includes('italic')) {
        return `<i>${item.value}</i>`
      }
    
      else return item.value
    })

    const joinedString = stringsArray.join('')
    const element = parse(joinedString)

    return element
  }

  let formattedContent = content.map((node: any, index: number) => {

    switch(node.nodeType) {
      case 'heading-1':
        return <H1 key={`${index}-${node.nodetype}`}>{stringExtractionHandler(node.content)}</H1>
        break
      case 'heading-2':
        return <H2 key={`${index}-${node.nodetype}`}>{stringExtractionHandler(node.content)}</H2>
        break
      case 'heading-3':
        return <H3 key={`${index}-${node.nodetype}`}>{stringExtractionHandler(node.content)}</H3>
        break
      case 'heading-4':
        return <H4 key={`${index}-${node.nodetype}`}>{stringExtractionHandler(node.content)}</H4>
        break
      case 'heading-5':
        return <H5 key={`${index}-${node.nodetype}`}>{stringExtractionHandler(node.content)}</H5>
        break
      case 'heading-6':
        return <H6 key={`${index}-${node.nodetype}`}>{stringExtractionHandler(node.content)}</H6>
        break
      default:
        return <BodyText key={`${index}-${node.nodetype}`}>{stringExtractionHandler(node.content)}</BodyText>
    }
  })
  
  return (
    <Container>
      {formattedContent}
    </Container>
  )
} 

export default RichText