import type { NextPageWithLayout } from './_app'
import type { ReactElement } from 'react'

import Layout from 'components/layouts/standardLayout'

import PageNotFoundSection from 'components/organisms/PageNotFoundSection'

const NotFoundPage: NextPageWithLayout = () => (
  <>
    <PageNotFoundSection />
  </>
)

NotFoundPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default NotFoundPage