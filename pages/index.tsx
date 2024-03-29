import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter 2.0</title>
      </Head>

      <h1>Hello World</h1>
      
      <main>
        
      <Sidebar/>

      <Feed />
      
      <Widgets />
      </main>
    </div>
  )
}

export default Home
