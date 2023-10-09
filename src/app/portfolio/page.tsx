import BlaBlaCar from '@/components/BlaBlaCar'
import JoinUsFooter from '@/components/JoinUsFooter'
import Navbar from '@/components/Navbar'
import OnlineDoc from '@/components/OnlineDoc'
import Fintech from '@/components/Fintech'
import CRM from '@/components/CRM'
import Booking from '@/components/Booking'
import Monitoring from '@/components/Monitoring'
import { PageWrapper } from '@/components/PageWrapper'
import { ComponentWrapper } from '@/components/ComponentWrapper'
export default async function Education() {
  return (
    <>
      <Navbar />

      <PageWrapper>
        <main>
          <ComponentWrapper>
            <BlaBlaCar />
          </ComponentWrapper>
          <ComponentWrapper>
            <OnlineDoc />
          </ComponentWrapper>
          <ComponentWrapper>
            <Fintech />
          </ComponentWrapper>
          <ComponentWrapper>
            <CRM />
          </ComponentWrapper>
          <ComponentWrapper>
            <Booking />
          </ComponentWrapper>
          <ComponentWrapper>
            <Monitoring />
          </ComponentWrapper>
        </main>
        <JoinUsFooter />
      </PageWrapper>
    </>
  )
}
