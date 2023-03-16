export interface titleProps {
    title:string
}
export const Head2 = ({title}:titleProps) =>{
    return(
        <h2 className='text-4xl font-bold pt-14'>{title}</h2>
    )
}