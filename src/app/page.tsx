import Image from 'next/image'

import Navbar from '@/components/Navbar/index'

import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
    </main>
  )
}
