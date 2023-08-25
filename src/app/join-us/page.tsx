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
        
        <div className="container">
        <Career />
          <Gallery />
          <StrongCode />
        </div>
        <Cases />
        <div className="container">
          <TeamMember />
        </div>
      </main>
      <JoinUsFooter />
    </>
  )
}
