export interface titleProps {
    title:string
}
export const Head2 = ({title}:titleProps) =>{
    return(
        <h2 className='text-4xl font-bold pt-14'>{title}</h2>
    )
}

export const Head3 =({title}:titleProps) =>{
    return(
        <h3 className="text-lg font-bold pt-14">{title}</h3>
    )
}
export const Head3_3xl =({title}:titleProps) =>{
    return(
        <h3 className="text-3xl font-bold pt-10">{title}</h3>
    )
}
export const Head4_4xl = ({title}:titleProps) =>{
    return(
        <h4 className='text-4xl font-bold'>{title}</h4>
    )
}