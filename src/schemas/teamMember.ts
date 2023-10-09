import * as yup from 'yup'

import { requiredMessage } from '@/helpers/schemas'

export const teamMemberFormSchema = yup.object({
  username: yup.string().required({ header: requiredMessage('Имя') }),
  phone: yup.string().required({ header: requiredMessage('Телефон') }),
  about: yup.string().required({ header: requiredMessage('Обо мне') }),
  url: yup.string(),
  date: yup.string(),
})
