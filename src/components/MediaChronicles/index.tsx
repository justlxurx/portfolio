'use client'
import classNames from 'classnames'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { nanoid } from 'nanoid'
import { useMedia } from 'react-use'

import { IPublication } from './interface'

import styles from './styles.module.scss'

const MediaChronicles = () => {
  const isMobile = useMedia('(max-width: 768px)')

  const data: IPublication[] = [
    {
      header: 'О команде qazdev',
      subheader: 'The Steppe – О команде QazDev',
      shortInfo:
        'Недавно QAZDEVELOP начала работу в качестве техпартнера в крупнейшем онлайн-сервисе поиска автомобильных',
      tags: ['Разработка ПО', 'Международные проекты', 'IT-специалисты'],
      publicationDate: Date.now(),
      cover: 'https://wallpaperaccess.com/full/2637581.jpg',
      link: '#',
    },
    {
      header: 'Итоги IT-конференции DevCorn 2023',
      subheader: 'The Steppe – О команде QazDev',
      shortInfo: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      tags: ['Разработка ПО', 'Международные проекты', 'IT-специалисты'],
      publicationDate: Date.now(),
      cover: 'https://wallpaperaccess.com/full/2637581.jpg',
      link: '#',
    },
  ]

  const PublicationPreview = ({ shortInfo }: { shortInfo: string }) => (
    <>
      <p className={styles.publication__short_info}>{shortInfo}</p>

      <button className={styles.publication__show_more}>Читать</button>
    </>
  )

  return (
    <section className={'container'}>
      <h2 className={styles.header}>Медиа-хроники</h2>
      <ul className={styles.publications}>
        {data.map(
          (
            {
              header,
              subheader,
              shortInfo,
              tags,
              publicationDate,
              cover,
              link,
            }: IPublication,
            index,
          ) => (
            // FIXME: Change index to UUID
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
                    {!isMobile && <PublicationPreview shortInfo={shortInfo} />}
                  </div>
                </div>
                <div
                  className={styles.publication__cover}
                  style={{ backgroundImage: `url(${cover})` }}
                >
                  <div className={styles.publication__cover_inner}>
                    {isMobile && (
                      <div>
                        <PublicationPreview shortInfo={shortInfo} />
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

export default MediaChronicles
