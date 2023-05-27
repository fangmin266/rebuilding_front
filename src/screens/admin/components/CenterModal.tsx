import React from "react";
import CloseIcon from "@mui/icons-material/Close";
interface CenterModalProps {
  children: React.ReactNode;
  onClickClose: () => void;
}
const CenterModal = ({ children, onClickClose }: CenterModalProps) => {
  return (
    <>
      <div
        className="w-full h-screen bg-black opacity-20 fixed top-0 left-0 z-1"
        onClick={onClickClose}
      ></div>
      <div className="w-[400px] fixed top-1/2 left-1/2 transformXY-50 bg-white rounded-2xl p-5 pb-10 z-10">
        <div className="flex justify-end">
          <CloseIcon fontSize="small" onClick={() => onClickClose()} />
        </div>

        {children}
      </div>
    </>
  );
};

export default CenterModal;
