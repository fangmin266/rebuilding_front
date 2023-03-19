import React, { useState } from 'react'
import { ButtonDefault } from '../../components/Button';
import { StudioHeader } from '../../components/Header'
import { Head4_4xl } from '../../components/HeadTitle';
import { IntroLoadingBar } from '../../components/LoadingBar'

const Intro = () => {
    const labelarr = ['프로젝트','작성중'];
    const sayHello = ['프로젝트 개설을 축하드려요.','서포터님들께 제품,서비스,콘텐츠를 드리며 잊지 못할 경험을 선물해 보세요.','프로젝트가 성공할 수 있도록 와디즈가 함께 할께요','그럼 출발해 볼까요?']
    const [introActive,setIntroActive] = useState(0)
    const labels = () =>{
        return(
            <ul className='flex gap-x-2'>
                {labelarr?.map((el)=><li className='inline-block rounded p-1 text-white text-xs border border-white'>{el}</li>)}
            </ul>
        )
    }

    const Intro0 = () =>{
        return(
            <>
                <Head4_4xl title={'mj 님, 반갑습니다!'}/>
                <ul className='flex flex-col gap-y-1 pt-6'>
                    {sayHello?.map((el,idx)=>(<li key={el} className={sayHello?.length === idx+1?"pt-12 pb-8":""}>{el}</li>))}
                </ul>
                <ButtonDefault title="좋아요" bgcolor='bg-primary_100' txtcolor='text-white' btnWidth='w-[330px]'
                onClickFunction={()=>setIntroActive(introActive+1)}/>
            </>
        )
    }
    const ProjectList = () =>{
        return(
            <div className=' border-primary_100 border-l-4 '>
                <ul className='relative right-2'>
                    <li className='flex gap-x-10'>
                        <span className='bg-primary_100 inline-block w-4 h-4 rounded-full'></span>
                        <div className='flex flex-col gap-y-2'>
                            <span className='text-lg font-bold'>1단계: 프로젝트 작성</span>
                            <p>필수 항목들을 작성해 제출하면 끝이랍니다.</p>
                        </div>
                    </li>
                </ul>    
           </div>
        )
    }
    const Intro1 = () =>{
        return(
            <>
               <Head4_4xl title={'프로젝트는 4단계로 진행돼요'}/>
               <div className='pt-10'>
               {ProjectList()}
               </div>
            </>
        )
    }
  return (
    <>
        <StudioHeader/>
        <div className='flex'>
            <aside className='w-[300px]'>
                <div className='p-4 bg-green-200 text-white opacity-80'>
                    {labels()}
                    <ul className='font-bold text-xl pt-3'>
                        <li>{"pei의"}</li>
                        <li>멋진 프로젝트</li>
                    </ul>
                    <div className='flex justify-between items-center'>
                        <span className='pt-2 font-semibold'>프로젝트 번호 19999</span>
                        <span>화살</span>
                    </div>
                </div>
             
                
            </aside>
            <div className='w-full'>
                 <IntroLoadingBar />
                 <div className='p-20 '>
                    { introActive===0?Intro0()
                    : introActive === 1? Intro1():
                    ""}
                 </div>
            </div>
        </div>
  
    </>
  )
}

export default Intro