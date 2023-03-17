import React, { useState } from 'react'
import { lists1,lists2,MainLink,SubLink } from '../staticLists/FooterLists'
import { useNavigate } from 'react-router-dom'
const Footer = () => {
 const [open,setOpen] = useState(false)
 const [clickOne,setClickOne] = useState<MainLink|null>(null)
 const navigate = useNavigate()

  const openModal = (el:MainLink) =>{
    setOpen(!open)
    setClickOne(el)
    console.log(el,"el")
    if((el.name==='공지사항'|| el.name==='인재채용')&&typeof el.mainLink==='string') {navigate(el.mainLink)}
  }
  const reapeateList = (lists:MainLink[]) =>{
    return(
      <ul className='flex gap-x-4 '>
          {lists?.map((el:MainLink)=>(
            <li key={el.name} onClick={()=>openModal(el)} className='relative cursor-pointer'>
                <span>{el.name}</span>
                <span className='border'>화살</span>
                {open&&(el.name===clickOne?.name)&&(clickOne?.subLists)&&
                    <>
                    <div className='z-1 bg-transparent fixed top-0 left-0 w-full h-full'
                    onClick={()=>setOpen(false)}></div>
                    <ul className='drop-shadow-lg rounded-lg p-4 bg-white flex flex-col gap-y-2 absolute top-1/2 left-1/2 transformXY-50 z-10 min-w-[200px] '>
                        {clickOne?.subLists&&
                            clickOne.subLists.map((subel:SubLink)=>(
                            <li key={subel.subname} className="cursor-pointer">
                                <a href={subel.link}>{subel.subname}</a>
                                <span>{subel.icon}</span>
                            </li>
                        ))}
                    </ul>
                    </>
                    }
            </li>
        ))}
      </ul>
    )
  }
  return (
    <footer className=' w-full text-xs font-semibold text-[#6e6e6e] '>
        <div className='border-y border-[#efefef] py-2 '>
            <div className=' mx-auto 2xl:w-100  px-20 flex justify-between relative'>
                {reapeateList(lists1)}
                {reapeateList(lists2)}
            </div>
        </div>
        <div className='mx-auto 2xl:w-100  px-20 py-5'>
          <div>
            <strong className='text-base text-black tracking-wide'>와디즈 고객센터</strong>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
    </footer>
  )
}

export default Footer