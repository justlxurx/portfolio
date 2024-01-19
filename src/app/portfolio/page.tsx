import BlaBlaCar from '@/components/BlaBlaCar'
import Navbar from '@/components/Navbar'
import OnlineDoc from '@/components/OnlineDoc'
import Fintech from '@/components/Fintech'
import CRM from '@/components/CRM'
import Booking from '@/components/Booking'
import Monitoring from '@/components/Monitoring'
import JoinUsFooter from '@/components/JoinUsFooter'
import Game from '@/components/Game'
export default async function Portfolio() {
  return (
    <>
      <Navbar />

      <main>
        <BlaBlaCar />
        <CRM />
        <OnlineDoc />
        <Fintech />
        <Monitoring />
        <Booking />
        <Game />
      </main>
      <JoinUsFooter />
    </>
  )
}
