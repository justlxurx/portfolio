import Career from '@/components/Career'
import Cases from '@/components/Cases'
import Gallery from '@/components/Gallery'
import Navbar from '@/components/Navbar'

import styles from './page.module.scss'

export default async function JoinUs() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Career />
        <Gallery />
        <section>Сильный код</section>
        <section>кейсы, на которых растешь</section>

        <section>Хочу в команду</section>
        <Cases />
      </main>

      <footer>Начни карьеру в IT стремительно</footer>
    </>
  )
}
