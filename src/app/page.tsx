import Image from 'next/image'

import About from '@/components/About'
import Distance from '@/components/Distance'
import FAQ from '@/components/FAQ'
import MainFooter from '@/components/MainFooter'
import Navbar from '@/components/Navbar/index'
import News from '@/components/News'
import Projects from '@/components/Projects'

import styles from './page.module.scss'

const SERVER_ENDPOINT = process.env.SERVER_ENDPOINT || 'http://localhost:3000'

async function getPosts() {
  const response = await fetch(`${SERVER_ENDPOINT}/api/news`)

  const data = await response.json()

  return data
}

export default async function Home() {
  const data = await getPosts()

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <About />
        <Projects />
        <News data={...data} />
        <Distance />
        <FAQ />
      </main>
      <MainFooter />
    </>
  )
}
