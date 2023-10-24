import BeProgrammer from '@/components/BeProgrammer'
import Details from '@/components/Details'
import DevPractice from '@/components/DevPractice'
import FormDev from '@/components/FormDev'
import DevPracticeFooter from '@/components/DevPracticeFooter'
import Navbar from '@/components/Navbar'
import { PageWrapper } from '@/components/PageWrapper'
import Table from '@/components/Table'
import Work from '@/components/Work'
import NewBlock from '@/components/NewBlock'
import Game from '@/components/Game'
import { Parallax1 } from '@/components/Parallax1'
import styles from './page.module.scss'
import { AnimationWrapper } from '@/components/AnimationWrapper'

export default async function Education() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        {/* <nav>
          <Sidebar />
        </nav> */}
        <main>
          {/* <UseComponent> */}
          {/* <div className={styles.snap_box}> */}
          <div className={styles.snap_item}>
            <AnimationWrapper custom={5}>
              <div className="container">
                <DevPractice />
              </div>
            </AnimationWrapper>
          </div>
          <div className={styles.snap_item}>
            <Work />
          </div>

          <div className={styles.snap_item}>
            <NewBlock />
          </div>
          <div className={styles.snap_item}>
            <div className="container">
              <BeProgrammer />
            </div>
          </div>
          <div className={styles.snap_item}>
            <Details />
          </div>
          {/* </div> */}
          {/* </UseComponent> */}
          <div className="container">
            <Table />
            <FormDev />
            <Game />
          </div>
        </main>
        <Parallax1>
          <DevPracticeFooter />
        </Parallax1>
      </PageWrapper>
    </>
  )
}
