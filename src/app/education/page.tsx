
import JoinUsFooter from '@/components/JoinUsFooter'
import DevPractice from '@/components/DevPractice'
import Navbar from '@/components/Navbar'
//import TeamMember from '@/components/TeamMember'

import styles from './page.module.scss'

export default async function Education() {
  return (
    <>
      <Navbar />
      <main>
        <DevPractice/>
      </main>
      <JoinUsFooter />
    </>
  )
}
