import { RefObject, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
export interface InputDefualtProps extends InputProps {
  InonChangeFunction?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  InName?: string;
  InValue?: string;
  InClassName?: string;
  InDisabled?: boolean;
}

export interface InputProps {
  InType: "email" | "password" | "text";
  Inplaceholder: string;
}

export interface InputCheckboxProps {
  thisRef: RefObject<HTMLInputElement>;
  onChangeRef: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const InputDefault = ({
  InType,
  Inplaceholder,
  InonChangeFunction,
  InName,
  InValue,
  InClassName,
  InDisabled,
}: InputDefualtProps) => {
  const [changeType, setChangeType] = useState(InType);
  return (
    <div className={InClassName}>
      <input
        type={changeType}
        placeholder={Inplaceholder}
        onChange={InonChangeFunction}
        name={InName}
        value={InValue}
        disabled={InDisabled}
      />
      {InType === "password" ? (
        <div
          className="absolute top-1/2 right-2 translate-y-50"
          onClick={() => {
            setChangeType(changeType === "password" ? "text" : "password");
          }}
        >
          <VisibilityIcon />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export const InputCheckbox = ({ thisRef, onChangeRef }: InputCheckboxProps) => {
  return (
    <input
      ref={thisRef}
      onChange={onChangeRef}
      type="checkbox"
      className="w-5 h-5 border-[#efefef]"
    />
  );
};
