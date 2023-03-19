import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { DonationRandomStrings, ProductServiceContentsCategories, RelationMenuGo } from '../../../../../common/dummyDatas/HomeDummy';

interface TitleLayoutProps {
    title:string;
    arrow?:boolean;
    children:React.ReactNode
}
export const TitleLayout = ({title,children,arrow}:TitleLayoutProps) => {
    return(
        <div className={'flex w-[600px] border-b py-3 border-[#efefef] '+(arrow?' justify-between ':'')}>
            <div className='flex gap-x-2'>
                <div>img</div>
                <div>
                    <h4 className='text-xl font-semibold pb-2'>{title}</h4>
                    {children}
                </div>
            </div>
            {arrow&&<div>화살</div>}
        </div>
    )
  }

  const Categories = () =>{
    const navigiate = useNavigate();
    return(
        <>
        {ProductServiceContentsCategories?.map((el)=>
            <span key={el.name}
            onClick={()=>navigiate('/studio/intro')}
            className='inline-block font-semibold p-3 rounded bg-gray-100 mr-3 mb-3 cursor-pointer '
            >{el.name}</span>
        )}
        </>
    )
  }
  const RelationMenu = () =>{
    return(
        <ul className='pt-4 grid grid-cols-2 gap-3'>
            {RelationMenuGo?.map((el)=>(
                <li key={el} className='flex justify-between'>
                    <span>{el}</span>
                    <span>화살</span>
                </li>
            ))}
        </ul>
    )
  }
  
const ProjectMadeModal = () => {
  return (
    <div className='bg-white rounded-lg absolute top-16 right-20 z-100 py-4 px-6 '>
       <TitleLayout title='후원' arrow={true}>
        <div className='flex justify-between'>{DonationRandomStrings[0]}</div>
       </TitleLayout>
       <TitleLayout title='제품.서비스.콘텐츠'>
         {Categories()}
       </TitleLayout>
       <div>
            <h4 className='text-gray-500 font-semibold'>관리 메뉴 바로가기</h4>
            {RelationMenu()}
       </div>
    </div>
  )
}

export default ProjectMadeModal