import BeProgrammer from '@/components/BeProgrammer'
import { AnimationWrapper } from '@/components/AnimationWrapper'
import Details from '@/components/Details'
import DevPractice from '@/components/DevPractice'
import FormDev from '@/components/FormDev'
import DevPracticeFooter from '@/components/DevPracticeFooter'
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
          <AnimationWrapper custom={4}>
            <div className="container">
              <DevPractice />
            </div>
          </AnimationWrapper>
          <Work />
          {/* <ComponentWrapper>
            <EightBlock />
          </ComponentWrapper> */}
          <NewBlock />
          <div className="container">
            <BeProgrammer />
          </div>
          <Details />
          <div className="container">
            <AnimationWrapper custom={4}>
              <Table />
            </AnimationWrapper>
            <AnimationWrapper custom={4}>
              <FormDev />
            </AnimationWrapper>
          </div>
        </main>
        <DevPracticeFooter />
      </PageWrapper>
    </>
  )
}
