import s from './Login.module.scss';
import Input from '../../../features/Input/Input';

export const Login = () => {
  return (
    <section className={s.main}>
      <form className={s.form}>
        <h1 className={s.main__title}>Войти в админку</h1>
        <div className={s.inputWrapper}>
          <div>
            <Input
              title='Логин'
              placeholder='Введите логин'
              name='login'
              //   value={password}
              //   error={passwordError}
              //   updateInput={updateInput}
            />
            <Input
              title='Пароль'
              placeholder='Введите пароль'
              name='password'
              //   value={password}
              //   error={passwordError}
              //   updateInput={updateInput}
            />
            {/* {anotherErr != '' && (
              <span style={{ color: 'red', fontSize: '14px', padding: '2px 0 0 5px' }}>{anotherErr}</span>
            )} */}
          </div>
        </div>
        <div className={s.buttonWrapper}>
          <button className={s.submitButton} type='submit'>
            Войти
          </button>
        </div>
      </form>
    </section>
  );
};
