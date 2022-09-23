import type { NextPageWithLayout } from './_app'
import type { ReactElement } from 'react'

import client from 'services/getClient'

import Head from 'next/head'

import { Entry } from 'contentful'
import { bookListDataProps } from 'utilities/contentfulTypes/contentfulTypes'

import Layout from 'components/layouts/standardLayout'

import BookListSection from 'components/organisms/BookListSection'


export async function getStaticProps() {
  const bookListRes = await client.getEntries({ content_type: "bookList" })

  return {
    props: {
      bookListData: bookListRes.items,
    }
  }
}

interface bookListProps {
  bookListData: Entry<bookListDataProps>[],
}

const BookList: NextPageWithLayout<bookListProps> = ({ bookListData }) => (
  <>
    <Head>
      <title>Laurens Booij</title>
      <meta name="description" content="About me page about Laurens Booij" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <BookListSection bookListData={bookListData}/>
  </>
)

BookList.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default BookList