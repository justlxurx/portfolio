import BeProgrammer from '@/components/BeProgrammer'
import DevPractice from '@/components/DevPractice'
import EightBlock from '@/components/EightBlock'
import JoinUsFooter from '@/components/JoinUsFooter'
import Navbar from '@/components/Navbar'
import Table from '@/components/Table'
import TeamMember from '@/components/TeamMember'
import Work from '@/components/Work'
import FormDev from '@/components/FormDev'
import styles from './page.module.scss'
import Details from '@/components/Details'

export default async function Education() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <DevPractice />
        </div>
        <Work />
        <EightBlock />
        <div className="container">
          <BeProgrammer />         
        </div>
        <Details />
        <div className="container">
           <Table />
          <FormDev />
        </div>
      </main>

      <JoinUsFooter />
    </>
  )
}
