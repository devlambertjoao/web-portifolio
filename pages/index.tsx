import type { NextPage } from 'next'
import Head from 'next/head'
import S from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={S.container}>
      <Head>
        <title>Coffee Dev </title>
        <meta name="description" content="The Coffee Developer Portifolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={S.main}>
        <div className={S.content}>
          testing
        </div>
      </main>
    </div>
  )
}

export default Home
