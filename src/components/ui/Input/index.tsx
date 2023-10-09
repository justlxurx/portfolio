import classNames from 'classnames'

import { IInput, InputVariant } from './interface'

import styles from './styles.module.scss'

const Input = ({
  className,
  variant = InputVariant.default,
  error,
  ...rest
}: IInput) => {
  return (
    <input
      className={classNames(
        styles.input,
        styles[`input__${variant}`],
        {
          [styles.input__error]: error,
        },
        className,
      )}
      {...rest}
    />
  )
}

export default Input
