import React from 'react'
import FormLogin from '../../components/FormLogin'
import LogoTitle from '../../components/LogoTitle'
import { ToastContainer } from 'react-toastify'

const LoginPage = () => {
  return (
    <>
    <LogoTitle/>
    <FormLogin/>
    <ToastContainer/>
    </>
  )
}

export default LoginPage