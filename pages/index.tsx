import type { NextPage } from 'next'
import Head from 'next/head'
import { Tutorial } from '@components'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="gs.todo a todo application made with Next.js and Typescript" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      
      <main>
        <Tutorial />
      </main>

    </div>
  )
}

export default Home
