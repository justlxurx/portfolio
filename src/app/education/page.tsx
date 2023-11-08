import FormDev from '@/components/FormDev'
import DevPracticeFooter from '@/components/DevPracticeFooter'
import Navbar from '@/components/Navbar'
import Game from '@/components/Game'
import { Parallax1 } from '@/components/Parallax1'
import styles from './page.module.scss'
//import { AnimationWrapper } from '@/components/AnimationWrapper'
import Learning from '@/components/Learning'

export default async function Education() {
  return (
    <>
      <header className={styles.main_elements}>
        <Navbar />
      </header>

      {/* <PageWrapper> */}

      <main>
        <Learning>
          {/* <div className={styles.snap_box}>
            <div className={styles.snap_item}>
              <div className="container">
                <DevPractice />
              </div>
            </div>
            <div>
              <Work />
            </div>

            <div>
              <EightBlock />
            </div>
            <div className={styles.snap_item}>
              <div className="container">
                <BeProgrammer />
              </div>
            </div>
            <div className={styles.main_elements}>
              <Details />
            </div>
          </div> */}
          {/* <div className="container">
            <div className={styles.snap_item}>
              <Table />
            </div>
            <div className={styles.snap_item}>
              <FormDev />
            </div>
          </div> */}
          <FormDev />
        </Learning>

        {/* <div className={classNames(styles.main_elements, 'container')}>
          <FormDev />
        </div> */}
        <Game />
      </main>

      <footer className={styles.main_elements}>
        <Parallax1>
          <DevPracticeFooter />
        </Parallax1>
      </footer>
      {/* </PageWrapper> */}
    </>
  )
}
