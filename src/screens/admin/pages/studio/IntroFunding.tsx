import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonDefault } from '../../components/Button'
import { StudioHeader } from '../../components/Header'
import { Head4_4xl } from '../../components/HeadTitle'
import { fundingIntroImgs, fundingSelectList, ProjectLink, userInfoStudioIntro } from '../../staticLists/ProjectIntro'
import { AsideHead } from './AsideHead'

const IntroFunding = () => {
  const navigate= useNavigate();
  const productProceed = (proceed:string) =>{
    return(
      <div className='border px-6 py-2 mt-4 mb-8'>
        <div className='flex justify-between items-center'>
          <span>프로젝트 준비 상태</span>
          <span className='text-gray-500 underline cursor-pointer text-xs'>지금 나의 단계는?
          </span>
        </div>
        <div className='flex gap-x-2 items-center pt-2'>
          <span className={'inline-block w-2 h-2 rounded-full '+(proceed ==='작성중'?' bg-green-500 ':' bg-blue-500')}></span>
          <span>{proceed}</span>
        </div>
        {proceed ==='작성중'&& 
        <p className='pl-4 text-gray-500 text-sm'>아래의 필수 항목들이 모두 작성 완료 상태로 바뀌면 [제출하기]를 누를 수 있어요.</p>
        }
      </div>
    )
  }

  const repeatBox = () =>{
    return(
      <ul className='flex flex-col gap-y-4 pb-12 '>
        {ProjectLink[0].subtitles?.map((el)=>(
          <li className='flex justify-between border p-6 relative'>
            <span className='absolute top-0 left-0 w-1.5 h-full bg-primary_100 rounded'></span>
            <div className='flex gap-x-4 items-center'>
              <span className='text-xl font-bold'>{el.name}</span>
              <span className='text-xs text-primary_100'>{fundingSelectList.selectStatus.find(
                (status) => status.name === el.name
              )?.value}</span>
            </div>
            <div className='border px-4 py-2 cursor-pointer'
            onClick={()=>navigate(el.link)}
            >작성하기</div>
          </li>
        ))}
      </ul>
    )
  }
  

  return (
    <>
        <StudioHeader/>
        <div className='flex h-full'>
            <AsideHead/>
            <div className='w-full px-16 py-10 flex gap-x-6'>
                <div className=' w-2/3'>
                  <div className='bg-gray-100 p-4'>
                    <p>잠깐! 프로젝트 진행 안내를 위해 휴대전화 인증이 반드시 필요합니다.</p>
                    <div className='flex justify-end'>
                      <ButtonDefault title="휴대전화 인증" bgcolor='bg-primary_100' txtcolor='text-white' btnWidth='w-[120px]'/>
                    </div>    
                  </div>

                  <div className='pt-6'>
                      <Head4_4xl title="프로젝트 관리"/>
                      <div>
                        <p className='text-gray-500 pt-4 pb-8 text-lg'>프로젝트를 공개하는 데 필요한 내용을 작성해 주세요.</p>
                        <div className='bg-primary_100 rounded-2xl flex justify-center flex-col items-center text-white font-semibold text-left w-full py-2.5'>
                          <div className='w-[200px]'>
                            <span className='text-sm'>다른 메이커들 다 본다는</span>
                            <p className='font-bold text-xl'>필수 가이드 모음집</p>
                          </div>
                        </div>
                          {productProceed(userInfoStudioIntro.projectStatus.proceed)}
                      </div>
                      {repeatBox()}
                      <ButtonDefault title='제출하기' bgcolor='bg-primary_100 opacity-40' 
                      btnWidth='w-[360px]'
                      txtcolor='text-white' />
                  </div>
                </div>
                <ul className='w-1/3 pt-[300px] flex flex-col gap-y-4'>
                  {fundingIntroImgs?.map((el,idx)=>(
                    <li key={idx} className='bg-gray-100 w-full h-[100px]'>
                      {el}
                    </li>
                  ))}
                </ul>
            </div>
        </div>
    </>
  )
}

export default IntroFunding