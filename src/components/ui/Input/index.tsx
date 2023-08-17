import classNames from 'classnames'

import { IInput, InputVariant } from './interface'

import styles from './styles.module.scss'

const Input = ({
  className,
  variant = InputVariant.default,
  ...rest
}: IInput) => {
  return (
    <input
      className={classNames(
        styles.input,
        styles[`input__${variant}`],
        className,
      )}
      {...rest}
    />
  )
}

export default Input
