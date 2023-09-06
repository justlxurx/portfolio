import { headers } from 'next/headers'
import Image from 'next/image'

import About from '@/components/About'
import Distance from '@/components/Distance'
import FAQ from '@/components/FAQ'
import MainFooter from '@/components/MainFooter'
import Navbar from '@/components/Navbar/index'
import News from '@/components/News'
import Projects from '@/components/Projects'

import 'node_modules/slick-carousel/slick/slick.css'
import 'node_modules/slick-carousel/slick/slick-theme.css'
import styles from './page.module.scss'

// async function getPosts(host: string) {
//   const response = await fetch(`http://${host}/api/news`)

//   const data = await response.json()

//   return data
// }

export default async function Home() {
  // const host = headers().get('host')
  // const data = await getPosts(host!)

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <About />
        <Projects />
        {/* {Array.isArray(data) && <News data={...data} />} */}
        <Distance />
        <FAQ />
      </main>
      <MainFooter />
    </>
  )
}
