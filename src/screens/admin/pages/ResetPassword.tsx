import React from "react";
import { Header2 } from "../components/Header";
import { Head2 } from "../components/HeadTitle";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../features/store";

const ResetPassword = () => {
  const location = useLocation();
  const token = location.search.replace("?token=", "");
  const dispatch = useDispatch<AppDispatch>();

  console.log(token, "token");
  return (
    <>
      <Header2 />
      <div className="w-full mx-auto maxW">
        <Head2 title="비밀번호 재설정" />
        <p>새로 사용하기를 원하는 비밀번호를 입력해주세요.</p>
        <input />
        <button onClick={() => {}}>완료</button>
      </div>
    </>
  );
};

export default ResetPassword;
