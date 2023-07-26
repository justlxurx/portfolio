import * as yup from 'yup'

import { requiredMessage } from '@/helpers/schemas'

export const addPostSchema = yup.object({
  header: yup.string().required({ header: requiredMessage('Заголовок') }),
  subheader: yup
    .string()
    .required({ subheader: requiredMessage('Подзаголовок') }),
  shortContent: yup
    .string()
    .required({ shortContent: requiredMessage('Краткая информация') }),
  publicationDate: yup
    .number()
    .required({ publicationDate: requiredMessage('Дата') }),
  tags: yup.array().of(yup.string()),
  cover: yup.string(),
})
