import classNames from 'classnames'

import { IInput } from './interface'

import styles from './styles.module.scss'

const Input = ({ className, ...rest }: IInput) => {
  return <input className={classNames(styles.input, className)} {...rest} />
}

export default Input
