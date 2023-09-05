import BeProgrammer from '@/components/BeProgrammer'
import DevPractice from '@/components/DevPractice'
import JoinUsFooter from '@/components/JoinUsFooter'
import Navbar from '@/components/Navbar'
import Table from '@/components/Table'
import TeamMember from '@/components/TeamMember'
import Work from '@/components/Work'

import styles from './page.module.scss'

export default async function Education() {
  return (
    <>
      <Navbar />
      <main>
        <DevPractice />
        <Work />
        <BeProgrammer />
        <Table />
        <div className="container">{/* <TeamMember /> */}</div>
      </main>

      <JoinUsFooter />
    </>
  )
}
