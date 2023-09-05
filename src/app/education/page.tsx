import BeProgrammer from '@/components/BeProgrammer'
import DevPractice from '@/components/DevPractice'
import JoinUsFooter from '@/components/JoinUsFooter'
import Navbar from '@/components/Navbar'
import Table from '@/components/Table'
import TeamMember from '@/components/TeamMember'
import Work from '@/components/Work'

import styles from './page.module.scss'
<<<<<<< HEAD
import Table from '@/components/Table'
import BeProgrammer from '@/components/BeProgrammer'
import EightBlock from '@/components/EightBlock'
=======
>>>>>>> c70a027b0a0ec752e62714cfc09c5ec536bd7d9c

export default async function Education() {
  return (
    <>
      <Navbar />
      <main>
<<<<<<< HEAD
      <div className="container"> 
        <DevPractice/>
        </div>
=======
        <DevPractice />
>>>>>>> c70a027b0a0ec752e62714cfc09c5ec536bd7d9c
        <Work />
        <EightBlock/>
        <div className="container"> 
        <BeProgrammer />
<<<<<<< HEAD
         <Table/></div>
        <div className="container">
          {/* <TeamMember /> */}
        </div>
=======
        <Table />
        <div className="container">{/* <TeamMember /> */}</div>
>>>>>>> c70a027b0a0ec752e62714cfc09c5ec536bd7d9c
      </main>

      <JoinUsFooter />
    </>
  )
}
