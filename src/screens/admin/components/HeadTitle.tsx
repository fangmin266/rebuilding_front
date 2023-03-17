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