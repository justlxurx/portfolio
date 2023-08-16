import Career from '@/components/Career'
import Gallery from '@/components/Gallery'
import Navbar from '@/components/Navbar'
import TeamMember from '@/components/TeamMember'

import styles from './page.module.scss'

export default async function JoinUs() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Career />
        {/* <Gallery /> */}
        {/* <section>Сильный код</section>
        <section>кейсы, на которых растешь</section> */}
        <TeamMember />
      </main>
      {/* <footer>Начни карьеру в IT стремительно</footer> */}
    </>
  )
}
