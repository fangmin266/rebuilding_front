export interface InputDefualtProps{
    InType:'email'|'password'|'string';
    Inplaceholder:string;
    InonChangeFunction?: (e: React.ChangeEvent<HTMLInputElement>)=> void;
    InName?:string;
    InValue?:string;
    InClassName?:string;
  }
export const InputDefault = ({InType,Inplaceholder,InonChangeFunction,InName,InValue,InClassName}:InputDefualtProps) =>{
    return(
        <input 
        className={InClassName}
        type={InType}
        placeholder={Inplaceholder}
        onChange={InonChangeFunction}
        name={InName}
        value={InValue}
        />
    )
}