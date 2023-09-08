import * as yup from 'yup'

import { requiredMessage } from '@/helpers/schemas'

export const contactUsFormSchema = yup.object({
  username: yup.string().required({ header: requiredMessage('Имя') }),
  phone: yup.string().required({ header: requiredMessage('Телефон') }),
  date: yup.string(),
})
