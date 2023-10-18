import { headers } from 'next/headers'

import About from '@/components/About'
import Distance from '@/components/Distance'
import FAQ from '@/components/FAQ'
import MainFooter from '@/components/MainFooter'
import Navbar from '@/components/Navbar/index'
import News from '@/components/News'
import Projects from '@/components/Projects'
import { PageWrapper } from '@/components/PageWrapper'
import 'node_modules/slick-carousel/slick/slick.css'
import 'node_modules/slick-carousel/slick/slick-theme.css'
import styles from './page.module.scss'
import Game from '@/components/Game'

import { AnimationWrapper } from '@/components/AnimationWrapper'

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
      <Navbar />
      <PageWrapper>
        <main className={styles.main}>
          <AnimationWrapper custom={4}>
            <About />
          </AnimationWrapper>
          <AnimationWrapper custom={4}>
            <Projects />
          </AnimationWrapper>
          <AnimationWrapper custom={4}>
            {Array.isArray(data) && <News data={...data} />}
          </AnimationWrapper>
          <AnimationWrapper custom={4}>
            <Distance />
          </AnimationWrapper>
          <AnimationWrapper custom={4}>
            <FAQ />
          </AnimationWrapper>
          <Game />
        </main>
        <AnimationWrapper custom={4}>
          <MainFooter />
        </AnimationWrapper>
      </PageWrapper>
    </>
  )
}
