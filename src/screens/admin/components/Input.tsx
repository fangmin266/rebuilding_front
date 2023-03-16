export interface InputDefualtProps{
    InType:'email'|'password';
    Inplaceholder:string;
    InonChangeFunction?: (e: React.ChangeEvent<HTMLInputElement>)=> void;
    InName:string;
    InValue:string;
  }
export const InputDefault = ({InType,Inplaceholder,InonChangeFunction,InName,InValue}:InputDefualtProps) =>{
    return(
        <input 
        type={InType}
        placeholder={Inplaceholder}
        onChange={InonChangeFunction}
        name={InName}
        value={InValue}
        />
    )
}