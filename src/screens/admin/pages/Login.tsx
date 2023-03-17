import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ButtonDefault } from '../components/Button';
import { Header2 } from '../components/Header'
import { Head2 } from '../components/HeadTitle';

import { InputDefault } from '../components/Input';
import SocialLoginBtn from '../components/SocialLoginBtn';

interface LoginState {
  email:string ;
  password: string ;
}
const Login = () => {
  const [login,setLogin] = useState<LoginState>({
    email:'', password:''
  })
  const navigate = useNavigate()

  const onSubmitLogin = (e:React.ChangeEvent<HTMLFormElement>)  =>{
    e.preventDefault()
    console.log(login,'login')
  }

  const onChangeLogin = (e:React.ChangeEvent<HTMLInputElement>) =>{
    let {name, value} = e.target
    console.log(e.target.value)
    setLogin({...login, [name]:value})
  }

  return (
    <>
      <Header2/>
      <div className='w-full mx-auto maxW'>
        <form onSubmit={onSubmitLogin}>
          <Head2 title="로그인" />
          <div className='flex items-end gap-y-3 flex-col py-6'>
            <InputDefault InType='email' Inplaceholder='이메일 입력' InonChangeFunction={onChangeLogin} InName='email' InValue={login.email}/>
            <InputDefault InType='password' Inplaceholder='비밀번호 입력' InonChangeFunction={onChangeLogin} InName='password' InValue={login.password}/>
            <span className='text-gray-600 text-xs tracking-wide cursor-pointer'
            onClick={()=>navigate('/accountfind')}
            >로그인 정보를 잊으셨나요?</span>
          </div>
          <ButtonDefault title="로그인" bgcolor='bg-[#1ecfd9]' txtcolor='text-white'/>
        </form>
        <SocialLoginBtn/>
        <div className='text-sm w-full flex justify-center p-8'>아직 와디즈 계정이 없나요? <a className='cursor-pointer inline-block pl-2 text-primary_100 underline' href='/signup'>회원가입</a></div>
      </div>
    </>

  )
}

export default Login;

