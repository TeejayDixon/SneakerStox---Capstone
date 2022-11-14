import React from 'react'
import {Layout} from '../Components'

const MyApp = ({Component, pageProps}) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp