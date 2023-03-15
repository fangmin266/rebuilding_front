import React from 'react'
interface Link {
  name:string; link: string;
}
const Header = () => {
  const lists1:Link[] = [
    {name:'오픈예정',link:'/1'},
    {name:'펀딩+',link:'/2'},
    {name:'프리오더',link:'/3'},
    {name:'스토어',link:'/4'},
    {name:'더보기',link:'/5'}
  ]
  const lists2:Link[] = [
    {name:'로그인',link:'/6'},
    {name:'회원가입',link:'/7'}
  ]
  const reapeateList = (option:number) =>{
    return(
      <>
        {option ===1?
          lists1?.map((el:Link)=>(<li key={el.name}><a href={el.link}>{el.name}</a></li>))
          :lists2.map((el:Link)=>(<li key={el.name}><a href={el.link}>{el.name}</a></li>))
        }
      </>
    )
  }
  return (
    <header className="header-wrapper w-full flex items-center mx-auto 2xl:w-100 px-20 py-2 justify-between bg-white">
      <h1 className='logo font-bold text-2xl'>
        <a href='/'>mindiz</a>
      </h1>
      <ul className='GNBdesktop flex gap-x-4 font-semibold text-lg'>
        {reapeateList(1)}
      </ul>
      <div className="home_search relative">
        <input
        className='border rounded-md border-green-300 px-3 py-2 text-sm w-[300px]'
        placeholder='새로운 것을 찾으시나요?'/>
        <span className='absolute top-1/2 right-3 transformY-50'>돋보기</span>
      </div>
      <div className='home_login'>
        <ul className='logindesktop flex gap-x-4'>
          {reapeateList(2)}
        </ul>
      </div>
    </header>
  )
}

export default Header