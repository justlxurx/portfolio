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
      <main>
        <Learning>
          <FormDev />
        </Learning>

        <Game />
      </main>

      <footer className={styles.main_elements}>
        <Parallax1>
          <DevPracticeFooter />
        </Parallax1>
      </footer>
    </>
  )
}
