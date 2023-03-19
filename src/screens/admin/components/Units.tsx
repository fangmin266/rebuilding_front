import { IHomeCategoryDummy } from "../../../common/dummyDatas/HomeDummy"

export const pricePercent = (element:IHomeCategoryDummy) => {
    return(
      <div>
        <span className='text-primary_100 font-semibold'>
          {element?.count?element?.count?.toLocaleString('ko-KR'):element?.percentage ?element.percentage.toLocaleString('ko-KR'):element?.price?.toLocaleString('ko-KR')}
        </span>
        <span className='font-semibold'>{element.unit}</span>
      </div>
    )
  }
export const scoreRate = (element:IHomeCategoryDummy) => { 
    return(
        <span className='inline-block px-2 text-sm font-bold tracking-tight'>{element.score}</span>
    )
}
export const deliveryStyle = (element:IHomeCategoryDummy) => {
    return(
        <div >
            {element?.freedel&&<span className=' rounded-sm text-xs text-white bg-gray-400 mr-1'>무배</span>}
            {element?.quick&&<span className='border rounded-sm text-xs text-gray-400'>퀵배</span>}
        </div>
    )
} 