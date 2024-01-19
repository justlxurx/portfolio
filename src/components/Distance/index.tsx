import classNames from 'classnames'
import Dev from './components/Dev'
import Socials from './components/Socials'

import styles from './styles.module.scss'

const Distance = () => {
  return (
    <section className={classNames(styles.container, 'container')}>
      <Dev />
      <Socials />
    </section>
  )
}

export default Distance
