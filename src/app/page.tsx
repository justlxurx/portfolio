import { headers } from 'next/headers'

import MainFooter from '@/components/MainFooter'
import Navbar from '@/components/Navbar/index'
import News from '@/components/News'
import 'node_modules/slick-carousel/slick/slick.css'
import 'node_modules/slick-carousel/slick/slick-theme.css'
import styles from './page.module.scss'
import Game from '@/components/Game'
import Main from '@/components/Main'

async function getPosts(host: string) {
  const response = await fetch(`http://${host}/api/news`)

  const data = await response.json()

  return data
}

export default async function Home() {
  const host = headers().get('host')
  const data = await getPosts(host!)

  return (
    <>
      <div className={styles.main_elements}>
        <Navbar />
      </div>
      <main className={styles.main}>
        {/* <About />
          <Projects />
          {Array.isArray(data) && <News data={...data} />}
          <Distance />
          <FAQ /> */}
        <Main> {Array.isArray(data) && <News data={...data} />}</Main>
        <Game />
      </main>
      <div className={styles.main_elements}>
        <MainFooter />
      </div>
    </>
  )
}
