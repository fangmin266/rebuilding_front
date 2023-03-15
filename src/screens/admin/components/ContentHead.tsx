import React from 'react'

interface titleProps{
    title:string,
    subtitle:string,
    option:number
}

export const ContentHead1 = ({title,subtitle,option}:titleProps) =>{
    return(
    <div className='flex justify-between items-end'>
      <div>
        <h2 className='font-semibold text-2xl tracking-tight leading-6'>{title}</h2>
        {option===1&&
         <span className='text-[#878787] text-xs'>{subtitle}</span>  
        }
      </div>
      {option===1&&
        <div className='font-bold'>waAi</div>
      }
    </div>

    )
  }
