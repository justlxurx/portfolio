import Image from 'next/image'

import Distance from '@/components/Distance'
import FAQ from '@/components/FAQ'
import MediaChronicles from '@/components/MediaChronicles'
import Navbar from '@/components/Navbar/index'

import styles from './page.module.scss'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <MediaChronicles />
        <Distance />
        <FAQ />
      </main>
    </>
  )
}
