import { headers } from 'next/headers'

import Career from '@/components/Career'
import Cases from '@/components/Cases'
import Gallery from '@/components/Gallery'
import JoinUsFooter from '@/components/JoinUsFooter'
import Navbar from '@/components/Navbar'
import StrongCode from '@/components/StrongCode'
import TeamMember from '@/components/TeamMember'

export default async function JoinUs() {
  const host = headers().get('host')

  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <Career />
          <Gallery />
          <StrongCode />
        </div>
        <Cases />
        <div className="container">
          <TeamMember host={host} />
        </div>
      </main>
      <JoinUsFooter />
    </>
  )
}
