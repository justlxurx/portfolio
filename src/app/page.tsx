import Image from 'next/image'

import Distance from '@/components/Distance'
import MediaChronicles from '@/components/MediaChronicles'
import Navbar from '@/components/Navbar/index'

import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <MediaChronicles />
      <Distance />
    </main>
  )
}
