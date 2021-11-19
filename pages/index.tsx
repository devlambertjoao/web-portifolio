import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Dev </title>
        <meta name="description" content="The Coffee Developer Portifolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
      </main>
    </div>
  )
}

export default Home
