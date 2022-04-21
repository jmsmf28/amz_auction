import type { NextPage } from 'next'
import Head from 'next/head'
import Header from './components/Header'
import Banner from './components/Banner/Banner'
import ProductFeed from './components/ProductFeed.jsx'

const Home: NextPage = () => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Auctioneer</title>
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/*Banner*/}
        <Banner />
        {/*ProductFeed*/}
        <ProductFeed />
      </main>
    </div>
  )
}

export default Home
