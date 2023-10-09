import classNames from 'classnames'

import { ButtonVariant, IButton } from './interface'

import styles from './styles.module.scss'

const Button = ({
  className,
  variant = ButtonVariant.default,
  ...rest
}: IButton) => {
  return (
    <button
      className={classNames(
        styles.button,
        styles[`button__${variant}`],
        className,
      )}
      {...rest}
    />
  )
}

export default Button
