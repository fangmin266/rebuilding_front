export interface ButtonDefualtProps {
  title: string;
  bgcolor: string;
  txtcolor: string;
  btnWidth?: string;
  InDisabled?: boolean;
  onClickFunction?: () => void;
}
export const ButtonDefault = ({
  title,
  bgcolor,
  txtcolor,
  btnWidth,
  InDisabled,
  onClickFunction,
}: ButtonDefualtProps) => {
  return (
    <button
      disabled={InDisabled}
      className={
        " rounded py-3 font-semibold " +
        bgcolor +
        " " +
        txtcolor +
        " " +
        (btnWidth?.includes("w-") ? btnWidth : " w-full ")
      }
      onClick={onClickFunction}
    >
      {title}
    </button>
  );
};
