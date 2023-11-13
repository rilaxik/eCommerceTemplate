import s from './style.module.scss';
import { PageWrapper, Navbar, Footer, Input, Button } from '../../components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [creds, setCreds] = useState({ fName: '', lName: '', email: '', pass: '', passR: '' });

  return (
    <PageWrapper>
      <PageWrapper container>
        <Navbar isShortened />
        <section className={s.loginWrapper}>
          <span className={s.title}>Register</span>
          <span className={s.navigation} onClick={() => navigate('/login')}>
            I already have an account
          </span>
          <Input
            placeholder='Email'
            type={'email'}
            callbackOnChange
            callback={(v) => setCreds({ ...creds, email: v.trim() })}
          />
          <Input
            placeholder='First name'
            type={'text'}
            callbackOnChange
            callback={(v) => setCreds({ ...creds, fName: v.trim() })}
          />
          <Input
            placeholder='Last name'
            type={'text'}
            callbackOnChange
            callback={(v) => setCreds({ ...creds, lName: v.trim() })}
          />
          <Input
            placeholder='Password'
            type={'password'}
            callbackOnChange
            callback={(v) => setCreds({ ...creds, pass: v.trim() })}
          />
          <Input
            placeholder='Password'
            type={'password'}
            callbackOnChange
            callback={(v) => setCreds({ ...creds, passR: v.trim() })}
          />
          <Button label={'Register'} callback={handleRegister} />
        </section>
      </PageWrapper>
      <Footer isShortened />
    </PageWrapper>
  );

  function handleRegister() {
    // todo process incoming data to remote db
  }
};

export default RegisterPage;