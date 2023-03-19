import React, { useState } from 'react'
import { ButtonDefault } from '../components/Button'
import { Header2 } from '../components/Header'
import { Head2 } from '../components/HeadTitle'
import { InputDefault } from '../components/Input'

const AccoutFind = () => {
  const tabs = ['아이디 찾기', '비밀번호 찾기']
  const [onTab, setOnTab] = useState('아이디 찾기')
  const [emailInput,setEmailInput] = useState('')

  const onSubmitFind = (e:React.ChangeEvent<HTMLFormElement>) =>{
    console.log(emailInput)
    e.preventDefault()
  }
  const onChangeEmail = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setEmailInput(e.target.value)
  }

  return (
    <>
        <Header2/>
        <div className='w-full bg-gray-100 h-screen'>
            <div className='w-full bg-white'>
                <div className=' w-[960px] mx-auto'>
                    <Head2 title={'아이디·비밀번호 찾기'}/>
                    <ul className='pt-10 flex gap-x-6 '>
                    {tabs?.map((el)=>(
                    <li className={'py-3 cursor-pointer '+(el===onTab?" text-primary_100 border-b border-primary_100 ":" text-gray-400 ")}
                    onClick={()=>{setOnTab(el);console.log(el, onTab)}} 
                    key={el}>{el}</li>))}
                    </ul>
                </div>
            </div>
            <form className='w-full border-t  py-4' onSubmit={onSubmitFind}>
                <div className='w-[396px] mx-auto'>
                    <p className='w-3/5 leading-5 text-sm text-gray-500 pb-8'>{
                      onTab==='아이디 찾기'?'와디즈는 이메일을 아이디로 사용합니다.소유하고 계신 계정을 입력해보세요.가입여부를 확인해드립니다.':'가입하셨던 이메일 계정을 입력하시면, 비밀번호를 새로 만들 수 있는 링크를 이메일로 발송해드립니다.'
                    }</p>
                    <InputDefault InType='email' Inplaceholder='이메일 계정' InonChangeFunction={onChangeEmail} InName='email' InValue={emailInput}/>
                    <div className='h-6'></div>
                    {onTab==='아이디 찾기'?
                      <ButtonDefault title="확인" bgcolor='bg-primary_100' txtcolor='text-white'/>
                      :<ButtonDefault title="링크 발송" bgcolor='bg-primary_100' txtcolor='text-white'/>
                    }
     
                </div>
            </form>
        </div>
    </>
  )
}

export default AccoutFind