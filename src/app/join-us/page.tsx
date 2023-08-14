import Career from '@/components/Career'
import Navbar from '@/components/Navbar'

import styles from './page.module.scss'

export default async function JoinUs() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Career />
        <section>qazdev - не просто код</section>
        <section>Сильный код</section>
        <section>кейсы, на которых растешь</section>
        <section>Хочу в команду</section>
      </main>
      <footer>Начни карьеру в IT стремительно</footer>
    </>
  )
}
