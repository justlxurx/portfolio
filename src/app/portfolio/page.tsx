import BlaBlaCar from '@/components/BlaBlaCar'
import Navbar from '@/components/Navbar'
import OnlineDoc from '@/components/OnlineDoc'
import Fintech from '@/components/Fintech'
import CRM from '@/components/CRM'
import Booking from '@/components/Booking'
import Monitoring from '@/components/Monitoring'
import { AnimationWrapper } from '@/components/AnimationWrapper'
import JoinUsFooter from '@/components/JoinUsFooter'
import Game from '@/components/Game'
export default async function Education() {
  return (
    <>
      <Navbar />

      <main>
        <AnimationWrapper custom={1}>
          <BlaBlaCar />
        </AnimationWrapper>
        {/* 4 */}
        <AnimationWrapper custom={1}>
          <CRM />
        </AnimationWrapper>
        {/* 2 */}
        <AnimationWrapper custom={1}>
          <OnlineDoc />
        </AnimationWrapper>
        {/* 3 */}
        <AnimationWrapper custom={1}>
          <Fintech />
        </AnimationWrapper>
        {/* 6 */}
        <AnimationWrapper custom={1}>
          <Monitoring />
        </AnimationWrapper>
        {/* 5 */}
        <AnimationWrapper custom={1}>
          <Booking />
        </AnimationWrapper>

        <Game />
      </main>
      <JoinUsFooter />
    </>
  )
}
