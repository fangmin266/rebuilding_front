import React, { useState } from 'react'
import { ButtonDefault } from '../components/Button'
import { Header2 } from '../components/Header'
import { Head2, Head3 } from '../components/HeadTitle'
import { InputDefault } from '../components/Input'
import { LabelLayoutInput } from '../components/LabelLayout'
import SocialLoginBtn from '../components/SocialLoginBtn'

interface ISignup{
  name:string,
  password:string,
  agree:boolean
}
const Signup = () => {
  const types=['법인 회원가입','투자조합 가입'];
  const [email,setEmail] = useState('');
  const [signupInput,setSignupInput] = useState({ 
    name:'',
    password:'',
    agree:false
   })
  const onChangeEmail = (e:React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value)
  const submitEmailAdress = () =>{
    console.log(email)
  }
  const onChangeSignup= (e:React.ChangeEvent<HTMLInputElement>) =>{
    
  }


  return (
    <>
      <Header2/>
        <div className='w-full mx-auto maxW'>
        <Head2 title="간편가입" />
        <div className='h-24 w-full relative'>
          <div className='shadow-md rounded-full w-2/3 flex justify-center px-6 py-2 absolute bottom-2 left-1/2 transformX-50'>말풍선img말풍선img말풍선</div>
        </div>
        <SocialLoginBtn/>
        <ul className='flex justify-center leading-4 pt-6 pb-12 text-gray-400'>
          {types?.map((el,idx)=>(<li key={el} className={'px-2 '+(idx===0?'':' border-l ')}>{el}</li>))}
        </ul>
      </div>
      <div className='w-full border-t'>
        <div className='mx-auto maxW '>
          <Head3 title='이메일 간편가입'/>
          <form className='flex flex-col py-8' onSubmit={submitEmailAdress}>
            <LabelLayoutInput title='이메일'>
              <div className='flex gap-x-2'>
                <InputDefault InType='email' Inplaceholder='이메일 계정' InClassName='w-2/3' InonChangeFunction={onChangeEmail} />
                <ButtonDefault title='인증하기'bgcolor='bg-primary_100' txtcolor='text-white'btnWidth='w-1/3' />
              </div>
            </LabelLayoutInput>
            <LabelLayoutInput title='이름'>
              <InputDefault InType='string' Inplaceholder='이름 입력' InonChangeFunction={onChangeSignup} InValue={signupInput.name}/>
            </LabelLayoutInput>

          </form>
        </div>
      </div>
    </>
  )
}

export default Signup