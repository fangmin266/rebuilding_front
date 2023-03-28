import React, { RefObject, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { emailSignup, sendEmail } from '../../../features/admin/loginsSignupSlice'
import { AppDispatch } from '../../../features/store'
import { ButtonDefault } from '../components/Button'
import CenterModal from '../components/CenterModal'
import { Header2 } from '../components/Header'
import { Head2, Head3, Head3_3xl } from '../components/HeadTitle'
import { InputCheckbox, InputDefault, InputDisabled } from '../components/Input'
import { LabelLayoutInput } from '../components/LabelLayout'
import SocialLoginBtn from '../components/SocialLoginBtn'
import toastCommonProps from "../../../common/toast";
import { useNavigate } from 'react-router-dom'

interface ConfirmTerm {
  isRef: React.RefObject<HTMLInputElement>;
  strongword?: string;
  word: string;
  haveto: boolean;
  subWords?: string;
  arrow?:boolean;
}
const Signup = () => {
  const navigate = useNavigate();
  const types=['법인 회원가입','투자조합 가입'];
  const [openModal, setOpenModal] = useState(false)
  const [email,setEmail] = useState('');
  const [typeNumber, setTypeNumber] = useState('')
  const [getAuthenticate,setGetAuthenticate] = useState('')
  const [confirmAuthenticate,setConfirmAuthenticate] = useState(false)
  const [signupInput,setSignupInput] = useState({ 
    username:'',
    password:'',
    email:'',
    agree:false
   })
  const [times, setTimes] = useState()
  const [openAuthenticate, setOpenAuthenticate] = useState(false)
   const checkallRef = useRef<HTMLInputElement>(null);
   const modalCheckallRef = useRef<HTMLInputElement>(null);
   const serviceResistRef= useRef<HTMLInputElement>(null);
   const eventAlarmRef = useRef<HTMLInputElement>(null);
   const investRef = useRef<HTMLInputElement>(null);
   const startupFindRef = useRef<HTMLInputElement>(null);
   const im14Ref = useRef<HTMLInputElement>(null);
   const dispatch = useDispatch<AppDispatch>()
   const confirmTemrs:ConfirmTerm[] = [
    {isRef:serviceResistRef,strongword:"회원,서비스",word:"가입",haveto:true,arrow:true},
    {isRef:eventAlarmRef,word:"회원,서비스 이벤트 혜택 알림",haveto:false,subWords:"펀딩·프리오더·스토어 서비스, 이벤트·할인 혜택 등에 대한 정보를 이메일, 앱 알림(앱 회원가입 시)로 받아볼 수 있습니다. (동의 철회 시까지)"},
    {isRef:investRef,strongword:"투자",word:" 서비스 가입",haveto:false,arrow:true},
    {isRef:startupFindRef,strongword:"스타트업 찾기",word:"서비스 가입",haveto:false,arrow:true},
    {isRef:im14Ref,word:"만 14세 이상입니다.",haveto:true}
   ]

  const onChangeEmail = (e:React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value)
  const onChangeNumber = (e:React.ChangeEvent<HTMLInputElement>) => setTypeNumber(e.target.value)

  const onChangeSignup= (e:React.ChangeEvent<HTMLInputElement>) =>{
    let {name, value} = e.target
    setSignupInput({...signupInput,[name]:value})}

  const submitEmailAdress = async(e:React.ChangeEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const res = await dispatch(emailSignup(signupInput)).unwrap()
    if(res.ok){
      navigate("/")
    }else{
      toast(
        <p className="whitespace-pre-line">
          이메일 정보를 작성해주세요
        </p>,
        toastCommonProps("top-right", "toast_alert",1000)
      )
    }

  }
  const onClickOpenAuthenticate = async() =>{
    const res = await dispatch(sendEmail({email:email})).unwrap()
    console.log(res,'res')
    if(res.ok){
      setOpenAuthenticate(true);
      setGetAuthenticate(res.confirmNumber)
//  타이머설정하기
    }else{
      toast(
        <p className="whitespace-pre-line">
          {res.error}
        </p>,
        toastCommonProps("top-right", "toast_alert",1000)
      );
    }
  }

  const conFirmTermList = () =>{
    return(
      <>
        {confirmTemrs?.map((el,idx)=>(
          <li key={idx}className='flex justify-between'>
            <div className='flex items-center gap-x-2 '>
              <div className='flex items-start h-full'>
                <InputCheckbox thisRef={el.isRef} onChangeRef={onClickAllRef}/>    
              </div>
              <div>
                <div>
                  <strong>{el?.strongword}</strong>
                  <span>{el?.word}</span>
                  <span className={el?.haveto?'text-primary_100':''}>{el?.haveto?'(필수)':'(선택)'}</span>
                </div>
                <div>{el?.subWords}</div>
              </div>
            </div>
            {el?.arrow&& <span>화살</span>}
          </li>
        ))}
      </>
    )
  }

  const checkAll = () =>{
    return(
      <div className='flex gap-x-2 items-start '>
        <div>
          <InputCheckbox thisRef={checkallRef} onChangeRef={onClickAllRef}/>
        </div>
        <div>
          <span className='inline-block font-semibold'>전체동의</span>
          <p className='text-sm'>회원·서비스(필수), 투자 서비스 (선택), 스타트업찾기 서비스 (선택), 이벤트·혜택알림 동의(선택), 만 14세 이상(필수)</p>
        </div>
        <span onClick={()=>setOpenModal(true)}>화살</span>
      </div> 
    )
  }

  const onClickAuthenticateOK = async() =>{
    if(String(getAuthenticate) === typeNumber){
      setOpenAuthenticate(false)
      setConfirmAuthenticate(true)
      setSignupInput({...signupInput,email:email})
    }else{
      console.log("not correct")
    }
  }

  const onClickAllRef = (e:React.ChangeEvent<HTMLInputElement>)=>{
      setSignupInput({...signupInput, agree:e.target.checked})
  }

  return (
    <>
      {openModal&& 
      <CenterModal onClickClose={()=>setOpenModal(false)}>
        <Head3_3xl title="약관확인" />
        <span className='pt-2 inline-block text-sm text-gray-700'>약관에 동의하셔야 해당 서비스를 이용할 수 있습니다.</span>
        <div className='shadow-xl p-4 rounded flex gap-x-2 items-center'>
            <InputCheckbox thisRef={modalCheckallRef} onChangeRef={onClickAllRef}/>
            <div>
              <strong>전체 동의</strong>
              <span>(선택항목 포함)</span>
            </div>
        </div>
        <ul className='flex flex-col gap-y-6 pt-6 text-sm px-4'>
          {conFirmTermList()}
        </ul>
        <div className='px-4'>
          <p className='text-xs text-gray-600 py-6'>선택 동의를 거부해도 펀딩 프리오더 스토어 서비스(투자,스타트업 찾기 제외) 이용이 가능합니다.</p>
          <ButtonDefault title='확인' bgcolor='bg-primary_100' txtcolor='text-white' onClickFunction={()=>{console.log('약관확인')}}/>
        </div>
      </CenterModal>
      }
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
          <div className='pt-8'>
            <LabelLayoutInput title='이메일'>
                <div className='flex gap-x-2'>
                  <InputDefault InType='email' Inplaceholder='이메일 계정' InClassName='w-2/3' InonChangeFunction={onChangeEmail} />
                  <ButtonDefault title='인증하기'bgcolor={'bg-primary_100'} txtcolor='text-white'btnWidth='w-1/3' onClickFunction={onClickOpenAuthenticate}/>
                </div>
            </LabelLayoutInput>
            {openAuthenticate&&
            <>
              <div className=' flex gap-x-2 pt-6'>
                  <InputDefault InType='email' Inplaceholder='번호 확인' InClassName='w-2/3' InonChangeFunction={onChangeNumber} />
                  <ButtonDefault title='확인'bgcolor='bg-primary_100' txtcolor='text-white'btnWidth='w-1/3' onClickFunction={onClickAuthenticateOK}/>
              </div>
            <div>{times}</div>
            </>
            }
          </div>
          <form className='flex flex-col py-8 gap-y-6' onSubmit={submitEmailAdress}>
            <LabelLayoutInput title='이름'>
              <InputDefault InType='text' Inplaceholder='이름 입력' 
              InName='username'
              InonChangeFunction={onChangeSignup} InValue={signupInput.username}/>
            </LabelLayoutInput>
            <LabelLayoutInput title='비밀번호'>
              <div className='flex flex-col gap-y-1'>
                {confirmAuthenticate?
                <>
                  <InputDefault InType='password' Inplaceholder='비밀번호 입력' 
                  InName='password'
                  InonChangeFunction={onChangeSignup} InValue={signupInput.password}/>
                  {/* <InputDefault InType='password' Inplaceholder='비밀번호 입력' InonChangeFunction={onChangeSignup} InValue={signupInput.name}/> */}
                </>
                :
                <>
                  <InputDisabled Inplaceholder='비밀번호 입력' InType='password'/>
                  <InputDisabled Inplaceholder='비밀번호 입력' InType='password'/>
                </>
                }
              </div>
            </LabelLayoutInput>
            {checkAll()}
            <ButtonDefault title='완료' bgcolor='bg-primary_100' txtcolor='text-white' />
          </form>
          <div className='flex justify-center gap-x-2 pb-20'>
            <p>이미 와디즈 계정이 있나요?</p>
            <a className='text-primary_100 underline' href='/login'>로그인</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup