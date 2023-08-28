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
      title: `LinkedIn`,
      label: `Следите за всеми нашими новостями в LinkedIn!`,
      link: 'https://www.linkedin.com/in/qazdev-team-067a82205/',
    },
    {
      title: `Telegram`,
      label: `Следите за всеми нашими новостями в Telegram!`,
      link: 'https://t.me/devcorn',
    },
    {
      title: `Facebook`,
      label: `Следите за всеми нашими новостями в Facebook!`,
      link: 'https://www.facebook.com/qazdevelop.itcompany',
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
