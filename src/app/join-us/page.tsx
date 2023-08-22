import Career from '@/components/Career'
import Cases from '@/components/Cases'
import Gallery from '@/components/Gallery'
import JoinUsFooter from '@/components/JoinUsFooter'
import Navbar from '@/components/Navbar'
import StrongCode from '@/components/StrongCode'
import TeamMember from '@/components/TeamMember'

import styles from './page.module.scss'

export default async function JoinUs() {
  return (
    <>
      <Navbar />
      <main>
        <Career />
        <Gallery />
        {/* <section>Сильный код</section>
        <section>кейсы, на которых растешь</section> */}
        <StrongCode />
        <Cases />
        <TeamMember />
      </main>
      <JoinUsFooter />
    </>
  )
}
