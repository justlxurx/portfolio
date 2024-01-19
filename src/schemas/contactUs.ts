import * as yup from 'yup'

import { requiredMessage } from '@/helpers/schemas'

export const contactUsFormSchema = yup.object({
  username: yup.string().required({ header: requiredMessage('Имя') }),
  phone: yup.string().required({ header: requiredMessage('Телефон') }),
  email: yup.string().required({ header: requiredMessage('E-mail') }),
  budget: yup.string().required({ header: requiredMessage('Бюджет') }),
  service: yup.string().required({ header: requiredMessage('Услуга') }),
  date: yup.string(),
})
