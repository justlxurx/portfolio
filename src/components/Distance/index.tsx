import classNames from 'classnames'

import Pages from './components/Pages'
import Socials from './components/Socials'

import styles from './styles.module.scss'

const Distance = () => {
  return (
    <section className={classNames(styles.container, 'container')}>
      <Pages />
      <Socials />
    </section>
  )
}

export default Distance
