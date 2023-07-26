import classNames from 'classnames'

import { IButton } from './interface'

import styles from './styles.module.scss'

const Button = ({ className, ...rest }: IButton) => {
  return <button className={classNames(styles.button, className)} {...rest} />
}

export default Button
