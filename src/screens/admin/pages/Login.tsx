import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ButtonDefault } from '../components/Button';
import { Header2 } from '../components/Header'
import { Head2 } from '../components/HeadTitle';

import { InputDefault } from '../components/Input';

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

  const social = ['구글','페북','애플']
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
        <div className='flex flex-col gap-y-3 pt-3'>
          <ButtonDefault title='카카오로 시작하기' bgcolor='bg-[#fae225]' txtcolor='text-black'/>
          <ButtonDefault title='네이버로 시작하기' bgcolor='bg-[#00d337]' txtcolor='text-white'/>
        </div>
        <div className='w-full flex justify-center gap-x-3 pt-12'>
          {social?.map((el)=>(<span className='block border rounded-full p-3' key={el}>{el}</span>))}
        </div>
        <div className='text-sm w-full flex justify-center p-8'>아직 와디즈 계정이 없나요? <a className='cursor-pointer inline-block pl-2 text-green-400 underline'>회원가입</a></div>
      </div>
    </>

  )
}

export default Login;

