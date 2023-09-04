
import JoinUsFooter from '@/components/JoinUsFooter'
import DevPractice from '@/components/DevPractice'
import Navbar from '@/components/Navbar'
import TeamMember from '@/components/TeamMember'
import Work from '@/components/Work'
import styles from './page.module.scss'
import Table from '@/components/Table'
import BeProgrammer from '@/components/BeProgrammer'
import EightBlock from '@/components/EightBlock'

export default async function Education() {
  return (
    <>
      <Navbar />
      <main>
      <div className="container"> 
        <DevPractice/>
        </div>
        <Work />
        <EightBlock/>
        <div className="container"> 
        <BeProgrammer />
         <Table/></div>
        <div className="container">
          {/* <TeamMember /> */}
        </div>
      </main>
      
      <JoinUsFooter />
    </>
  )
}
