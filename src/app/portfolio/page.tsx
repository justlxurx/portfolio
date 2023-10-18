import BlaBlaCar from '@/components/BlaBlaCar'
import Navbar from '@/components/Navbar'
import OnlineDoc from '@/components/OnlineDoc'
import Fintech from '@/components/Fintech'
import CRM from '@/components/CRM'
import Booking from '@/components/Booking'
import Monitoring from '@/components/Monitoring'
import { PageWrapper } from '@/components/PageWrapper'
import { AnimationWrapper } from '@/components/AnimationWrapper'
import JoinUsFooter from '@/components/JoinUsFooter'
import Game from '@/components/Game'
export default async function Education() {
  return (
    <>
      <Navbar />

      <PageWrapper>
        <main>
          <AnimationWrapper custom={5}>
            <BlaBlaCar />
          </AnimationWrapper>
          <AnimationWrapper custom={5}>
            <OnlineDoc />
          </AnimationWrapper>
          <AnimationWrapper custom={5}>
            <Fintech />
          </AnimationWrapper>
          <AnimationWrapper custom={5}>
            <CRM />
          </AnimationWrapper>
          <AnimationWrapper custom={5}>
            <Booking />
          </AnimationWrapper>
          <AnimationWrapper custom={5}>
            <Monitoring />
          </AnimationWrapper>
          <Game />
        </main>
        <JoinUsFooter />
      </PageWrapper>
    </>
  )
}
