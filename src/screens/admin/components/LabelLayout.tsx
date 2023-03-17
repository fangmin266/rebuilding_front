export interface titleProps{
  title:string,
  children:React.ReactNode
}
export const LabelLayoutInput = ({title,children}:titleProps) =>{
  return(
    <div className="w-full">
      <label className="pb-1 block">{title}</label>
      {children}
    </div>
  )
}