import Image from 'next/image'

import Distance from '@/components/Distance'
import FAQ from '@/components/FAQ'
import MainFooter from '@/components/MainFooter'
import MediaChronicles from '@/components/MediaChronicles'
import Navbar from '@/components/Navbar/index'

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
        <MediaChronicles data={...data} />
        <Distance />
        <FAQ />
      </main>
      <MainFooter />
    </>
  )
}
