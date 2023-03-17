export interface titleProps{
  title:string,
  // layoutC
  children:React.ReactNode
}
export const LabelLayoutInput = ({title,children}:titleProps) =>{
  return(
    <div className="w-full">
      <label>{title}</label>
      {children}
    </div>
  )
}