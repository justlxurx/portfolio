import BeProgrammer from '@/components/BeProgrammer'
import Details from '@/components/Details'
import DevPractice from '@/components/DevPractice'
import EightBlock from '@/components/EightBlock'
import FormDev from '@/components/FormDev'
import JoinUsFooter from '@/components/JoinUsFooter'
import Navbar from '@/components/Navbar'
import Table from '@/components/Table'
import Work from '@/components/Work'

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
