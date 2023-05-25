import React, { useState } from "react";
import { Header2 } from "../components/Header";
import { Head2 } from "../components/HeadTitle";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../features/store";
import {
  ResetPassTokenState,
  changePassBeforeLogin,
} from "../../../features/admin/loginsSignupSlice";
import { LabelLayoutInput } from "../components/LabelLayout";
import { InputDefault } from "../components/Input";
import { validatePass } from "../../../common/function/reg";
import { ButtonDefault } from "../components/Button";
import toastCommonProps from "../../../common/toast";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const location = useLocation();
  const token = location.search.replace("?token=", "");
  const dispatch = useDispatch<AppDispatch>();
  const [passwordInput, setPasswordInput] = useState({
    password: "",
    passwordConfirm: "",
  });
  const [passError, setPassError] = useState({
    pass: false,
    passConfirm: false,
  });
  const finalActive =
    validatePass(passwordInput?.password) &&
    validatePass(passwordInput?.passwordConfirm) &&
    passwordInput?.password === passwordInput?.passwordConfirm;

  const onChangeSignup = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    setPasswordInput({ ...passwordInput, [name]: value });
    if (name === "password") {
      if (validatePass(value)) {
        setPassError({ ...passError, pass: true });
      } else {
        setPassError({ ...passError, pass: false });
      }
    } else if (name === "passwordConfirm") {
      if (validatePass(value)) {
        setPassError({ ...passError, passConfirm: true });
      } else {
        setPassError({ ...passError, passConfirm: false });
      }
    }
  };

  const clickConfirm = async () => {
    const emailState: ResetPassTokenState = {
      token: token,
      password: passwordInput.password,
    };
    try {
      const res = await dispatch(changePassBeforeLogin(emailState)).unwrap();
      if (res.data.statusCode === 200) {
        toast(
          <p className="whitespace-pre-line">
            비밀번호 변경이 완료되었습니다.
          </p>,
          toastCommonProps("top-right", "toast_alert", 1000)
        );
      } else {
        toast(
          <p className="whitespace-pre-line">
            비밀번호 변경에 실패하였습니다.
          </p>,
          toastCommonProps("top-right", "toast_alert", 1000)
        );
      }
    } catch (error) {
      console.log(error);
      toast(
        <p className="whitespace-pre-line">
          토큰이 만료되었습니다. 다시 이메일 전송해주세요.
        </p>,
        toastCommonProps("top-right", "toast_alert", 1000)
      );
    }
  };
  return (
    <>
      <Header2 />
      <div className="w-full mx-auto maxW">
        <Head2 title="비밀번호 재설정" />
        <p className="text-gray-500 text-sm pb-12">
          새로 사용하기를 원하는 비밀번호를 입력해주세요.
        </p>
        <LabelLayoutInput title="비밀번호">
          <div className="flex flex-col gap-y-1">
            <InputDefault
              InType="password"
              Inplaceholder="비밀번호 입력(영문,숫자,특수문자 포함 7~20자)"
              InName="password"
              InClassName="relative"
              InonChangeFunction={onChangeSignup}
              InValue={passwordInput.password}
            />
            {passError?.pass ? (
              <p className="text-primary_100">비밀번호 형식이 올바릅니다</p>
            ) : passwordInput?.password === "" ? (
              ""
            ) : (
              <p className="text-red-500">비밀번호 형식이 틀렸습니다.</p>
            )}
            <InputDefault
              InType="password"
              Inplaceholder="비밀번호 확인(영문,숫자,특수문자 포함 7~20자)"
              InName="passwordConfirm"
              InClassName="relative"
              InonChangeFunction={onChangeSignup}
              InValue={passwordInput.passwordConfirm}
            />
            {passError?.passConfirm ? (
              <p className="text-primary_100">비밀번호 형식이 올바릅니다</p>
            ) : passwordInput?.passwordConfirm === "" ? (
              ""
            ) : (
              <p className="text-red-500">비밀번호 형식이 틀렸습니다.</p>
            )}
          </div>
        </LabelLayoutInput>
        <div className="pt-8">
          <ButtonDefault
            bgcolor={finalActive ? "bg-primary_100" : "bg-unactive_100"}
            txtcolor="text-white"
            title="확인"
            InDisabled={finalActive ? false : true}
            onClickFunction={clickConfirm}
          />
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
