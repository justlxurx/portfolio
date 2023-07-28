'use client'
import classNames from 'classnames'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { nanoid } from 'nanoid'
import coverPlugDesktop from 'public/media_cover_desktop.png'
import coverPlugMobile from 'public/media_cover_mobile.png'
import { useMedia } from 'react-use'

import { IPublication } from './interface'

import styles from './styles.module.scss'

const News = ({ data }: { data: IPublication[] }) => {
  const isMobile = useMedia('(max-width: 768px)')

  const buttonPreviewClickHandler = () => {
    alert('Страница в разработке')
  }

  const PublicationPreview = ({ shortContent }: { shortContent: string }) => (
    <>
      <p className={styles.publication__short_content}>{shortContent}</p>

      <button
        onClick={buttonPreviewClickHandler}
        className={styles.publication__show_more}
      >
        Читать
      </button>
    </>
  )

  //FIXME: fix cover
  const cover = isMobile ? coverPlugMobile : coverPlugDesktop

  return (
    <section className={'container'}>
      <h2 className={styles.header}>Медиа-хроники</h2>
      <ul className={styles.publications}>
        {data?.map(
          (
            {
              header,
              subheader,
              shortContent,
              tags,
              publicationDate,
              // cover,
              link,
            }: IPublication,
            index,
          ) => (
            <li className={styles.publications__item} key={nanoid()}>
              <div className={styles.publication}>
                <div className={styles.publication__info}>
                  <div className={styles.publication__info_left}>
                    <h4 className={styles.publication__subheader}>
                      {subheader}
                    </h4>
                    <ul className={styles.publication__tags}>
                      {tags.map((tag: string) => (
                        <li className={styles.publication__tag} key={nanoid()}>
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.publication__info_right}>
                    {!isMobile && (
                      <PublicationPreview shortContent={shortContent} />
                    )}
                  </div>
                </div>
                <div
                  className={styles.publication__cover}
                  style={{
                    backgroundImage: `url(${cover.src})`,
                  }}
                >
                  <div className={styles.publication__cover_inner}>
                    {isMobile && (
                      <div>
                        <PublicationPreview shortContent={shortContent} />
                      </div>
                    )}
                    <h3 className={styles.publication__header}>{header}</h3>
                    <p className={styles.publication__date}>
                      {format(publicationDate, 'LLLL, yyyy', { locale: ru })}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ),
        )}
      </ul>
    </section>
  )
}

export default News
