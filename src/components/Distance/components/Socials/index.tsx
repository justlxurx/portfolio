import { nanoid } from 'nanoid'

import { ISocial } from './interface'
import SocialCard from './SocialCard'

import styles from './styles.module.scss'

const Socials = () => {
  const socials: ISocial[] = [
    {
      title: `instagram`,
      label: `Следите за всеми нашими новостями в instagram!`,
      link: 'https://instagram.com/qazdev.team',
    },
    {
      title: `instagram`,
      label: `Следите за всеми нашими новостями в instagram!`,
      link: 'https://instagram.com/qazdev.team',
    },
    {
      title: `instagram`,
      label: `Следите за всеми нашими новостями в instagram!`,
      link: 'https://instagram.com/qazdev.team',
    },
    {
      title: `instagram`,
      label: `Следите за всеми нашими новостями в instagram!`,
      link: 'https://instagram.com/qazdev.team',
    },
  ]

  return (
    <div>
      <h2 className={styles.header}>Ищите нас в сети</h2>
      <div className={styles.socials}>
        {socials.map((social: ISocial) => (
          <SocialCard key={nanoid()} {...social} />
        ))}
      </div>
    </div>
  )
}

export default Socials
