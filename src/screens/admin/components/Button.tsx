export interface ButtonDefualtProps{
    title:string;
    bgcolor:string;
    txtcolor:string;
    onClickFunction?: () => void;
  }
export const ButtonDefault = ({title,bgcolor,txtcolor,onClickFunction}:ButtonDefualtProps) =>{
    return(
      <button className={' w-full rounded py-3 font-semibold '+bgcolor+' '+txtcolor}onClick={onClickFunction}>{title}</button>
    )
  }