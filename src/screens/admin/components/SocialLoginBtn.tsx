import React from 'react'
import { ButtonDefault } from './Button'

const SocialLoginBtn = () => {
  const social = ['구글','페북','애플']
  return (
    <>
      <div className='flex flex-col gap-y-3 pt-3'>
        <ButtonDefault title='카카오로 시작하기' bgcolor='bg-[#fae225]' txtcolor='text-black'/>
        <ButtonDefault title='네이버로 시작하기' bgcolor='bg-[#00d337]' txtcolor='text-white'/>
      </div>
      <div className='w-full flex justify-center gap-x-3 pt-12'>
        {social?.map((el)=>(<span className='block border rounded-full p-3' key={el}>{el}</span>))}
      </div>
    </>
  )
}

export default SocialLoginBtn