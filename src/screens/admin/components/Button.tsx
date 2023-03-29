export interface ButtonDefualtProps{
    title:string;
    bgcolor:string;
    txtcolor:string;
    btnWidth?:string;
    onClickFunction?: () => void;
  }
export const ButtonDefault = ({title,bgcolor,txtcolor,btnWidth,onClickFunction}:ButtonDefualtProps) =>{
    return(
      <button  className={' rounded py-3 font-semibold '+bgcolor+' '+txtcolor+' '+(btnWidth?.includes('w-')?btnWidth:' w-full ' )}onClick={onClickFunction}>{title}</button>
    )
  }