import { headers } from 'next/headers'
import Cases from '@/components/Cases'
import Navbar from '@/components/Navbar'
import TeamMember from '@/components/TeamMember'
import JoinUsFooter from '@/components/JoinUsFooter'
import ContactUs from '@/components/CareerSideBar'
import styles from './page.module.scss'
export default async function JoinUs() {
  const host = headers().get('host')

  return (
    <>
      <div className={styles.main_elements}>
        <Navbar />
      </div>
      <main>
        {/* <div className="container">
            <Career />
            <Gallery />
            <StrongCode />
          </div>
          <Cases />
          <div className="container">
            <TeamMember host={host} />
          </div> */}
        <ContactUs component={<Cases />}>
          <TeamMember host={host} />
        </ContactUs>
      </main>
      <div className={styles.main_elements}>
        <JoinUsFooter />
      </div>
    </>
  )
}
