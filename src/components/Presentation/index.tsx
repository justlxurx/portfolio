'use client'
import Button from '../ui/Button'
import styles from './styles.module.scss'

const Presentation = () => {
  const handleDownloadClick = () => {
    const presentationUrl = '/qazdev_cases.pdf'

    const downloadLink = document.createElement('a')
    downloadLink.href = presentationUrl
    downloadLink.download = 'qazdev_cases.pdf'

    downloadLink.click()
  }
  return (
    <section className={styles.casesWrapper}>
      <div className={styles.qazdev_logo}></div>
      <div className={styles.casesWrapper__button}>
        <h1>НАши кейсы</h1>
        <Button onClick={handleDownloadClick}>
          <b> получить презентацию</b>
        </Button>
      </div>
    </section>
  )
}

export default Presentation
