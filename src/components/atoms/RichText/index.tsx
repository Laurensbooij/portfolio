import React, { FC } from 'react'
import parse from 'html-react-parser'

import { H1, H2, H3, H4, H5, H6, BodyText, UnorderedList } from '../TextElements'

import Image from './Image'

import { Container } from './styled'

interface richTextProps {
  content: any,
}

const RichText: FC<richTextProps> = ({ content }) => {

  const extractText = (content: any) => {  
    
    let stringsArray = content.map((item: any) => {
      if(item.marks.find((mark: any) => mark.type === 'bold')) {
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

  const generateListItems = (content: any) => {
    const listItems = content.map((item: any, index: number) => <li key={`${index}-${item.nodetype}`}>{extractText(item.content[0].content)}</li>)
    return listItems
  }

  let formattedContent = content.map((node: any, index: number) => {

    switch(node.nodeType) {
      case 'heading-1':
        return <H1 key={`${index}-${node.nodetype}`}>{extractText(node.content)}</H1>
      case 'heading-2':
        return <H2 key={`${index}-${node.nodetype}`}>{extractText(node.content)}</H2>
      case 'heading-3':
        return <H3 key={`${index}-${node.nodetype}`}>{extractText(node.content)}</H3>
      case 'heading-4':
        return <H4 key={`${index}-${node.nodetype}`}>{extractText(node.content)}</H4>
      case 'heading-5':
        return <H5 key={`${index}-${node.nodetype}`}>{extractText(node.content)}</H5>
      case 'heading-6':
        return <H6 key={`${index}-${node.nodetype}`}>{extractText(node.content)}</H6>
      case 'unordered-list':
        const listItems = generateListItems(node.content)
        return (
          <UnorderedList key={`${index}-${node.nodetype}`}>{listItems}</UnorderedList>
        )
      case 'embedded-asset-block':
        return <Image key={`${index}-${node.nodetype}`} src={node.data.target.fields.file.url} alt={node.data.target.fields.title} />
      default:
        return <BodyText key={`${index}-${node.nodetype}`}>{extractText(node.content)}</BodyText>
    }
  })
  
  return (
    <Container>
      {formattedContent}
    </Container>
  )
} 

export default RichText