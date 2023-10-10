import BeProgrammer from '@/components/BeProgrammer'
import { ComponentWrapper } from '@/components/ComponentWrapper'
import Details from '@/components/Details'
import DevPractice from '@/components/DevPractice'
import FormDev from '@/components/FormDev'
import JoinUsFooter from '@/components/JoinUsFooter'
import Navbar from '@/components/Navbar'
import { PageWrapper } from '@/components/PageWrapper'
import Table from '@/components/Table'
import Work from '@/components/Work'
import NewBlock from '@/components/NewBlock'

export default async function Education() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <main>
          <ComponentWrapper>
            <div className="container">
              <DevPractice />
            </div>
          </ComponentWrapper>
          <ComponentWrapper>
            <Work />
          </ComponentWrapper>
          {/* <ComponentWrapper>
            <EightBlock />
          </ComponentWrapper> */}
          <NewBlock />
          <ComponentWrapper>
            <div className="container">
              <BeProgrammer />
            </div>
          </ComponentWrapper>
          <ComponentWrapper>
            <Details />
          </ComponentWrapper>
          <ComponentWrapper>
            <div className="container">
              <ComponentWrapper>
                <Table />
              </ComponentWrapper>
              <ComponentWrapper>
                <FormDev />
              </ComponentWrapper>
            </div>
          </ComponentWrapper>
        </main>
        <JoinUsFooter />
      </PageWrapper>
    </>
  )
}
