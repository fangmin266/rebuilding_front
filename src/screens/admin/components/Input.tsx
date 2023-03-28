import { RefObject } from "react";

export interface InputDefualtProps extends InputProps{
    InonChangeFunction?: (e: React.ChangeEvent<HTMLInputElement>)=> void;
    InName?:string;
    InValue?:string;
    InClassName?:string;
  }

export interface InputProps{
    InType:'email'|'password'|'text';
    Inplaceholder:string;
}

export interface InputCheckboxProps{
    thisRef: RefObject<HTMLInputElement>,
    onChangeRef:(e: React.ChangeEvent<HTMLInputElement>)=> void; 
}
export const InputDefault = ({InType,Inplaceholder,InonChangeFunction,InName,InValue,InClassName}:InputDefualtProps) =>{
    return(
        <input 
        className={InClassName}
        type={InType}
        placeholder={Inplaceholder}
        onChange={InonChangeFunction}
        name={InName}
        value={InValue}
        />
    )
}

export const InputDisabled = ({Inplaceholder,InType}:InputProps) =>{
    return(
        <div className='relative'>
            <input
            type={InType} 
            disabled 
            placeholder={Inplaceholder}/>
            <span className='absolute top-1/2 right-2 transformY-50'>눈깔</span>
        </div>
    )
}

export const InputCheckbox = ({thisRef,onChangeRef}:InputCheckboxProps) =>{
    return(
        <input
        ref={thisRef}
        onChange={onChangeRef} 
        type='checkbox' 
        className='w-5 h-5 border-[#efefef]'/>
    )
}