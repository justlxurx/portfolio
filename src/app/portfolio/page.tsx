import BlaBlaCar from '@/components/BlaBlaCar'
import Navbar from '@/components/Navbar'
import OnlineDoc from '@/components/OnlineDoc'
import Fintech from '@/components/Fintech'
import CRM from '@/components/CRM'
import Booking from '@/components/Booking'
import Monitoring from '@/components/Monitoring'
import JoinUsFooter from '@/components/JoinUsFooter'
import CarSize from '@/components/CarSize'
import Crowdsourcing from '@/components/Crowdsourcing'
import AI from '@/components/AI'
import LightingControl from '@/components/LightingControl'
import PaymentSystem from '@/components/PaymentSystem'
import InfoPortal from '@/components/InfoPortal'
import ESchool from '@/components/MoscowESchool'
import Delivery from '@/components/DeliveryService'
import Grupovina from '@/components/Grupovina'
import Game from '@/components/Game'
import Presentation from '@/components/Presentation'
export default async function Portfolio() {
  return (
    <>
      <Navbar />
      <Game />
      <main>
        <Presentation />
        <Delivery />
        <AI />
        <Crowdsourcing />
        <LightingControl />
        <CarSize />
        <PaymentSystem />
        <InfoPortal />
        <ESchool />
        <BlaBlaCar />
        <Grupovina />
        <CRM />
        <OnlineDoc />
        <Fintech />
        <Monitoring />
        <Booking />
      </main>
      <JoinUsFooter />
    </>
  )
}
