'use client'
import React from 'react'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { nanoid } from 'nanoid'
import { useMedia } from 'react-use'
import { AnimationWrapper } from '../AnimationWrapper'
import { FormattedString } from '@/helpers/FormattedString'

import { IPublication } from './interface'

import styles from './styles.module.scss'

type Props = {
  data: IPublication[]
}

const News: React.FC<Props> = ({ data }) => {
  const isMobile = useMedia('(max-width: 768px)')

  const PublicationPreview = ({
    shortContent,
    link,
  }: {
    shortContent: string
    link: string
  }) => (
    <>
      <p className={styles.publication__short_content}>
        <FormattedString sentence={shortContent} />
      </p>
      <a href={link} target="_blank">
        <button className={styles.publication__show_more}>Читать</button>
      </a>
    </>
  )

  return (
    <section className={'container'}>
      <AnimationWrapper custom={5}>
        <h2 className={styles.header}>Медиа-хроники</h2>
      </AnimationWrapper>
      <ul className={styles.publications}>
        {data?.map(
          (
            {
              header,
              subheader,
              shortContent,
              tags,
              publicationDate,
              cover,
              link,
            }: IPublication,
            index,
          ) => (
            <li className={styles.publications__item} key={nanoid()}>
              <div className={styles.publication}>
                <AnimationWrapper custom={6}>
                  <div className={styles.publication__info}>
                    <div className={styles.publication__info_left}>
                      <h4 className={styles.publication__subheader}>
                        <FormattedString sentence={subheader} />
                      </h4>
                      <ul className={styles.publication__tags}>
                        {tags.map((tag: string) => (
                          <li key={nanoid()}>
                            <span className={styles.publication__tag}>
                              {tag}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.publication__info_right}>
                      {!isMobile && (
                        <PublicationPreview
                          shortContent={shortContent}
                          link={link}
                        />
                      )}
                    </div>
                  </div>
                </AnimationWrapper>
                <div
                  className={styles.publication__cover}
                  style={{
                    backgroundImage: `url(${cover})`,
                  }}
                >
                  <div className={styles.publication__cover_inner}>
                    {isMobile && (
                      <div>
                        <PublicationPreview
                          shortContent={shortContent}
                          link={link}
                        />
                      </div>
                    )}

                    <h3 className={styles.publication__header}>
                      <FormattedString sentence={header} />
                    </h3>

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
